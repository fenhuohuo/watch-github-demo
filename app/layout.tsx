import "./globals.css";
import type { Metadata } from "next";
//ui组件库
import { AntdRegistry } from "@ant-design/nextjs-registry";
//头部组件

export const metadata: Metadata = {
  title: "Jinchuang Digital System",
  description: "Jinchuang digital management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
