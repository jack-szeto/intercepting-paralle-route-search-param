import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className={"flex items-center justify-center gap-4 p-4"}>
      <Link href="/" className={"text-lg font-bold hover:underline transition"}>
        Home
      </Link>
      <Link
        href="/posts"
        className={"text-lg font-bold hover:underline transition"}
      >
        Posts
      </Link>
    </nav>
  );
};

export default NavBar;
