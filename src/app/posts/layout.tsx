import NavBar from "@/components/nav-bar";
import React from "react";

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) => {
  return (
    <div className={"flex flex-col gap-4"}>
      <NavBar />

      <main className="flex flex-col w-full px-4">
        {children}
        {modal}
      </main>
    </div>
  );
};

export default Layout;
