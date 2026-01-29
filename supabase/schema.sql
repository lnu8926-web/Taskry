-- ============================================
-- Taskry Database Schema for Supabase
-- ============================================
-- 실행 방법: Supabase Dashboard > SQL Editor에서 실행

-- ============================================
-- 1. ENUM 타입 생성
-- ============================================

-- Task 상태
CREATE TYPE task_status AS ENUM ('todo', 'inprogress', 'done');

-- Task 우선순위
CREATE TYPE task_priority AS ENUM ('low', 'normal', 'high');

-- 프로젝트 상태
CREATE TYPE project_status AS ENUM ('active', 'completed', 'archived');

-- 사용자 역할 (전역)
CREATE TYPE user_role AS ENUM ('admin', 'user');

-- 프로젝트 멤버 역할
CREATE TYPE project_role AS ENUM ('leader', 'member');


-- ============================================
-- 2. 테이블 생성
-- ============================================

-- Users 테이블
CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  profile_image TEXT,
  global_role user_role DEFAULT 'user',
  auth_provider VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects 테이블
CREATE TABLE projects (
  project_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE SET NULL,
  project_name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50),
  status project_status DEFAULT 'active',
  tech_stack TEXT,
  started_at DATE,
  ended_at DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Kanban Boards 테이블
CREATE TABLE kanban_boards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  columns VARCHAR(255) DEFAULT 'todo,inprogress,done',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks 테이블
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kanban_board_id UUID NOT NULL REFERENCES kanban_boards(id) ON DELETE CASCADE,
  project_id UUID NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status task_status DEFAULT 'todo',
  priority task_priority DEFAULT 'normal',
  assigned_user_id UUID REFERENCES users(user_id) ON DELETE SET NULL,
  subtasks JSONB DEFAULT '[]',
  memo TEXT,
  started_at DATE,
  ended_at DATE,
  use_time BOOLEAN DEFAULT false,
  start_time TIME,
  end_time TIME,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project Members 테이블 (팀 협업용)
CREATE TABLE project_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  role project_role DEFAULT 'member',
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(project_id, user_id)
);


-- ============================================
-- 3. 인덱스 생성
-- ============================================

-- Projects 인덱스
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_status ON projects(status);

-- Kanban Boards 인덱스
CREATE INDEX idx_kanban_boards_project_id ON kanban_boards(project_id);

-- Tasks 인덱스
CREATE INDEX idx_tasks_kanban_board_id ON tasks(kanban_board_id);
CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_assigned_user_id ON tasks(assigned_user_id);
CREATE INDEX idx_tasks_ended_at ON tasks(ended_at);

-- Project Members 인덱스
CREATE INDEX idx_project_members_project_id ON project_members(project_id);
CREATE INDEX idx_project_members_user_id ON project_members(user_id);


-- ============================================
-- 4. updated_at 자동 업데이트 트리거
-- ============================================

-- 트리거 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 각 테이블에 트리거 적용
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_kanban_boards_updated_at
  BEFORE UPDATE ON kanban_boards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at
  BEFORE UPDATE ON tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ============================================
-- 5. Row Level Security (RLS) 정책
-- ============================================

-- RLS 활성화
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE kanban_boards ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_members ENABLE ROW LEVEL SECURITY;

-- Users 정책: 자신의 정보만 조회/수정 가능
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = user_id);

-- Projects 정책: 소유자 또는 멤버만 접근 가능
CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM project_members
      WHERE project_members.project_id = projects.project_id
      AND project_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create projects"
  ON projects FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Project owners can update"
  ON projects FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Project owners can delete"
  ON projects FOR DELETE
  USING (user_id = auth.uid());

-- Kanban Boards 정책: 프로젝트 접근 권한이 있으면 보드도 접근 가능
CREATE POLICY "Users can view boards of accessible projects"
  ON kanban_boards FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.project_id = kanban_boards.project_id
      AND (
        projects.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM project_members
          WHERE project_members.project_id = projects.project_id
          AND project_members.user_id = auth.uid()
        )
      )
    )
  );

CREATE POLICY "Project members can manage boards"
  ON kanban_boards FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.project_id = kanban_boards.project_id
      AND projects.user_id = auth.uid()
    )
  );

-- Tasks 정책: 프로젝트 접근 권한이 있으면 태스크도 접근 가능
CREATE POLICY "Users can view tasks of accessible projects"
  ON tasks FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.project_id = tasks.project_id
      AND (
        projects.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM project_members
          WHERE project_members.project_id = projects.project_id
          AND project_members.user_id = auth.uid()
        )
      )
    )
  );

CREATE POLICY "Project members can manage tasks"
  ON tasks FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.project_id = tasks.project_id
      AND (
        projects.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM project_members
          WHERE project_members.project_id = projects.project_id
          AND project_members.user_id = auth.uid()
        )
      )
    )
  );

-- Project Members 정책
CREATE POLICY "Project owners can manage members"
  ON project_members FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.project_id = project_members.project_id
      AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Members can view project members"
  ON project_members FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM project_members pm
      WHERE pm.project_id = project_members.project_id
      AND pm.user_id = auth.uid()
    )
  );


-- ============================================
-- 6. Auth 연동: 새 사용자 자동 생성
-- ============================================

-- 새 사용자가 가입하면 users 테이블에 자동으로 추가
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (user_id, email, user_name, profile_image, auth_provider)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_app_meta_data->>'provider'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Auth 트리거 생성
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ============================================
-- 7. 유용한 뷰 (선택)
-- ============================================

-- 프로젝트별 태스크 통계 뷰
CREATE OR REPLACE VIEW project_task_stats AS
SELECT
  p.project_id,
  p.project_name,
  COUNT(t.id) AS total_tasks,
  COUNT(CASE WHEN t.status = 'todo' THEN 1 END) AS todo_count,
  COUNT(CASE WHEN t.status = 'inprogress' THEN 1 END) AS inprogress_count,
  COUNT(CASE WHEN t.status = 'done' THEN 1 END) AS done_count,
  ROUND(
    COUNT(CASE WHEN t.status = 'done' THEN 1 END)::NUMERIC /
    NULLIF(COUNT(t.id), 0) * 100, 2
  ) AS completion_rate
FROM projects p
LEFT JOIN tasks t ON p.project_id = t.project_id
GROUP BY p.project_id, p.project_name;
