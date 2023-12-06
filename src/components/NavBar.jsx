"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSistrix, FaShoppingCart, FaHamburger } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-10">
      <header className="flex flex-wrap px-4 items-center justify-between z-10 bg-white">
        <Link href="/">
          <Image
            className="pt-2 "
            src="/pizza-logo.png"
            alt="logo"
            width={40}
            height={40}
            priority
            object-contain
          />
        </Link>
        <Image
          className=""
          src="/pizza-header.png"
          alt="pizza header"
          width={150}
          height={50}
          priority
        />
        <button
          onClick={() => setIsMenuOpen((pre) => !pre)}
          className="md:hidden inline-flex"
        >
          <FaHamburger />
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } pt-8 gap-6 font-bold md:flex`}
        >
          <ul className="flex gap-2">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/product">PRODUCTS</Link>
            </li>
            <li>
              <Link href={""}>PAGES</Link>
            </li>
            <li>
              <Link href={""}>BLOG</Link>
            </li>
            <li>
              <Link href={""}>CONTACT</Link>
            </li>
          </ul>
          <FaSistrix className="text-xl" />
          <FaShoppingCart className="text-blue-600 text-2xl" />
        </div>
      </header>
    </nav>
  );
}
