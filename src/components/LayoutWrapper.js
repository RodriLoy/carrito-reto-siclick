"use client";

import Navbar from "@/components/NavBar";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  const hideNavbar = ["/login", "/register"];

  return (
    <>
      {!hideNavbar.includes(pathname) && <Navbar />}
      {children}
    </>
  );
};

export default LayoutWrapper;
