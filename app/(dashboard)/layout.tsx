import Navbarmain from "@/components/navbar/Navbarmain";
import React from "react";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbarmain/>
      {children}

    </div>
  );
}
