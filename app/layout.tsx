import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";

//목업서버의 역할로 만든 route handler에 fetch요청을 하는 services폴더 내의 함수 들에 대하여,
//build시 static파일 형성 과정에서 route handler경로로 데이터 prefetch가 시도되며 404 페이지가 반환되어 build 에러가 발생했습니다.
//해당 에러를 방지하기 위해 prefetch되지 않도록 "force-dynamic"설정을 추가한 것으로 실제 활용 시 필요에 맞춰 변경이 필요한 부분입니다.
export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "백패커 과제 - 박정선",
  description: "백패커 프론트엔드 개발과제 구현 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
