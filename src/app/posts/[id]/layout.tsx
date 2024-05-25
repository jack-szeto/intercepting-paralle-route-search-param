import CloseModal from "@/app/_close-modal";
import Portal from "@/components/portal";
import React from "react";

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default Layout;
