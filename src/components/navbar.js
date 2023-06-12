'use client'

import Link from "next/link";

export const Navbar = () => {
    const navLinks = [
        { name: "Home", 
         path: "/" 
        },
        {
          name: "About Us",
          path: "/about",
        },
        {
          name: "Services",
          path: "/services",
        },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Contact Us",
          path: "contact",
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
