import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import ReduxProvider from "@/store/Provider";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"flex h-screen bg-gray-900 text-gray-100 overflow-hidden"}
      >
        <ReduxProvider>
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
            </div>
          </div>
          <Sidebar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
