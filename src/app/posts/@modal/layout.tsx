import React from "react";
import CloseModal from "./_close-modal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative">
        {children}
        <CloseModal />
      </div>
    </div>
  );
};

export default Layout;
