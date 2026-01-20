// 변경 후 전체
"use client";

import { useEffect } from "react";
import Container from "@/components/shared/Container";
import ProjectBoard from "@/components/features/project/ProjectBoard";
import { initLocalStorage } from "@/lib/local";

const Home = () => {
  useEffect(() => {
    initLocalStorage();
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Container className="h-full">
        <ProjectBoard />
      </Container>
    </div>
  );
};

export default Home;
