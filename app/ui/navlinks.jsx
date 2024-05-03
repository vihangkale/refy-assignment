"use client";
import { poppins } from "./font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import cart from "../assets/cart.svg";
import Image from "next/image";

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
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Cart",
    href: "/cart",
    icon: cart,
    className: "cart-button",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const { name, href, icon, className } = link ?? {};
        return (
          <Link
            key={name}
            href={href}
            className={clsx(
              `${poppins.className} ${
                className ? className : ""
              } flex grow items-center justify-center text-basefont-normal	leading-[26px] text-[#333333] gap-x-2.5`,
              {
                "bg-sky-100 text-blue-600": pathname === href,
              }
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{name}</p>
            {icon && <Image width={26} height={28} src={icon} alt="link" />}
          </Link>
        );
      })}
    </>
  );
}
