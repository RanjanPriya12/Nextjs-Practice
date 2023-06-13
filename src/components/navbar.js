"use client";

import Link from "next/link";

export const Navbar = () => {
  const navLinks = [
    { name: "logo", path: "/" },
    {
      name: "Fitness",
      path: "/fitness",
    },
    {
      name: "Care",
      path: "/care",
    },
    {
      name: "Mind",
      path: "/mind",
    },
    {
      name: "Store",
      path: "/store",
    },
    {
      name: "Location",
      path: "/location",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];
  return (
    <nav className="navContainer">
      <div className="leftContainer">
        <ul className="navLinkList">
          <li className="navLink">
            <Link href="/" className="link">
              Logo
            </Link>
          </li>
        </ul>
      </div>
      <div className="midContainer">
        <ul className="navLinkList">
          <li className="navLink">
            <Link href="/fitness" className="link">
              Fitness
            </Link>
          </li>
          <li className="navLink">
            <Link href="/care" className="link">
              Care
            </Link>
          </li>
          <li className="navLink">
            <Link href="/mind" className="link">
              Mind
            </Link>
          </li>
          <li className="navLink">
            <Link href="/store" className="link">
              Store
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <ul className="navLinkList">
          <li className="navLink">
            <Link href="/location" className="link">
              Location
            </Link>
          </li>
          <li className="navLink">
            <Link href="/login" className="link">
              Login
            </Link>
          </li>
          <li className="navLink">
            <Link href="/cart" className="link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
