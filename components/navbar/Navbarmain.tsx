import Link from "next/link";
import React from "react";
import style from "/style/home.module.css";

export default function Navbarmain() {
  return (
    <div className="flex flex-row  justify-between text-white ">
      <h2 className="w-full  p-5 bg-zinc-700"> Logo</h2>
      <div className="w-full  flex justify-between p-5 bg-zinc-700 ">
        <Link href="/" className="bg-green ">
          Home
        </Link>

        <Link href="/about" className="">
          About us
        </Link>

        <Link href="/login" className="bg-green">
          login
        </Link>
       
      </div>
    </div>
  );
}
