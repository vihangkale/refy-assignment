"use client";
import { poppins } from "../../font";
import Link from "next/link";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Career",
    href: "/career",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer
      className={`${poppins.className} mt-[6.25rem] text-base font-normal leading-[26px] bg-[#162251] h-[66px] rounded-t-[30px] flex justify-center gap-x-[60px] text-white`}
    >
      {links.map((link) => {
        const { name, href } = link ?? {};
        return (
          <Link
            key={name}
            href={href}
            className={clsx(
              `${poppins.className} flex grow items-center justify-center`
            )}
          >
            <p className="block">{name}</p>
          </Link>
        );
      })}
    </footer>
  );
}
