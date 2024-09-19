"use client";
//内置模块
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage():JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("token") || "";
    const auth = getCookie("auth") || "";
    // 判断是否登录
    if (!token) {
      // router.push("/login");
    } else {
      ///权限判断
      // if (auth === "ADMIN") {
      //   router.push("/management/driver-health");
      // } else {
      //   router.push("/digital-screen");
      // }
    }
  }, []);

  return <div>加载中...</div>;
}
