"use client";

import React, { useEffect, useMemo } from "react";

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const portalRoot = useMemo(() => {
    const root = document.createElement("div");
    root.id = "portal-root";
    return root;
  }, []);

  useEffect(() => {
    document.body.appendChild(portalRoot);
    return () => {
      document.body.removeChild(portalRoot);
    };
  }, [portalRoot]);
  return <>{portalRoot && children}</>;
};

export default Portal;
