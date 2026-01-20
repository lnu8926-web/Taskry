// 변경 후 전체
"use client";

import { useEffect } from "react";
import { initLocalStorage } from "@/lib/local";

const Home = () => {
  useEffect(() => {
    initLocalStorage();
  }, []);

  return <div className="h-full flex flex-col"></div>;
};

export default Home;
