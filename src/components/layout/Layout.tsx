import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
