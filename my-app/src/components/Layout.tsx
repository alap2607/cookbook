import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
}

export default function Layout({ children, onSearch }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        <TopBar onSearch={onSearch} />
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
}
