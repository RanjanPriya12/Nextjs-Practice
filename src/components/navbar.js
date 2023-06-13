'use client'

import Link from "next/link";

export const Navbar = () => {
    const navLinks = [
        { name: "logo", 
         path: "/" 
        },
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
    <div>
        <nav>
            <ul>
                {navLinks?.map((link,ind)=>(
                    <li key={ind}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}
