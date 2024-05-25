import React from "react";
import CloseModal from "../../../_close-modal";
import Portal from "@/components/portal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Portal>
      <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-start">
        <div className="relative">
          {children}
          <CloseModal />
        </div>
      </div>
    </Portal>
  );
};

export default Layout;
