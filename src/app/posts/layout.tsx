import NavBar from "@/components/nav-bar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"flex flex-col gap-4"}>
      <NavBar />

      <main className="flex flex-col w-full px-4">{children}</main>
    </div>
  );
};

export default Layout;
