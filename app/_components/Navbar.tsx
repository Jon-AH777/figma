"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRightShort, BsSearch, BsCart, BsList } from "react-icons/bs";

const Navbar = () => {
  const navItems: string[] = ["HOME", "PRODUCT", "PRICING", "CONTACT"];

  return (
    <div className="relative w-full sm:bg-transparent">
      <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-0">
        <Link href="/">
          <h1 className="font-bold text-3xl">Bandage</h1>
        </Link>
        <div className="flex sm:hidden items-center gap-4">
          <BsSearch className="text-2xl" />
          <BsCart className="text-2xl" />
          <BsList className="text-2xl cursor-pointer" />
        </div>
        <ul className="hidden sm:flex gap-5 text-sm font-semibold text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="flex flex-col items-center gap-1"
            >
              <p>{item}</p>
            </Link>
          ))}
        </ul>
        <div className="hidden sm:flex items-center font-semibold justify-between gap-8">
          <p className="text-blue-500">Login</p>
          <button className="flex gap-2 items-center text-white border rounded-md bg-blue-500 p-4">
            Become a member
            <BsArrowRightShort className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center sm:hidden gap-4">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
            className="flex flex-col items-center gap-1 text-lg"
          >
            <p>{item}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
