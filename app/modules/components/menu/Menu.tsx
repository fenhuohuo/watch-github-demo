"use client"
import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { useRouter } from "next/navigation";
type MenuItem = Required<MenuProps>["items"][number];
function MenuCom() {
    const router = useRouter();
  const items: MenuItem[] = [
    {
      key: "/home",
      label: "首页",
      icon: <MailOutlined />,
    },
    {
      key: "/home/data-monitoring",
      label: "健康数据监控",
      icon: <AppstoreOutlined />,
      children: [
        { key: "/home/data-monitoring/general-trends", label: "预警统计" },
        { key: "/home/data-monitoring/recruitment-statistics", label: "总体趋势" },
      ],
    },
    {
      key: "/home/driver-management",
      label: "司机管理",
      icon: <SettingOutlined />,
    },
    {
      key: "/home/device-management",
      label: "设备管理"
    },
    {
      key: "/home/exception-management",
      label: "异常管理",
      children: [
        { key: "/home/exception-management/equipment", label: "预警统计" },
        { key: "/home/exception-management/personnel", label: "总体趋势" },
      ],
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    router.push(e.key)
  };
  return (
    <div className="w-full h-full py-8 px-2 text-white">
      <div className="my-16">logo</div>
      <Menu
        onClick={onClick}
        style={{ width: "100%", backgroundColor: "#2B3942" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}

export default MenuCom;
