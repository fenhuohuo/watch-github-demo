"use client";
import { Flex, Layout } from "antd";
//内置模块
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
//菜单组件
import Menu from "@/app/modules/components/menu/Menu";
//ui库
import { Modal, message } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function ManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siderStyle: React.CSSProperties = {
    background: "#2B3942",
  };
  const contentStyle: React.CSSProperties = {
    background:
      "linear-gradient(117.48deg, #F1F7F5 0.94%, #F0F5E9 58.25%, #F1F7F5 96.62%)",
  };
  return (
    <Layout className="w-full h-full">
      <Sider className="w-[220px]" style={siderStyle}>
        <Menu />
      </Sider>
      <Layout className="w-[calc(100% - 200px)]">
        <Header style={{ backgroundColor: "#fff" }}>Header</Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default ManagementLayout;
