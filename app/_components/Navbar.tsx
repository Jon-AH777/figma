import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems: string[] = ["HOME", "PROODCUCT", "PRICING", "CONTACT"];

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link href="/">
        <h1 className="font-bold text-3xl">Bandage</h1>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
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
    </div>
  );
};

export default Navbar;
