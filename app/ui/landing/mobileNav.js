"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { poppins } from "../font";
import { usePathname } from "next/navigation";
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
  },
];
export default function MobileNav() {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  const handleOpenClick = () => setIsMenu((prev) => !prev);

  return (
    <div class="flex md:hidden absolute right-0 top-0 w-full z-10 justify-end p-2 flex-col items-end bg-white border-b-[0.5px] border-slate-300 border-solid">
      <button onClick={handleOpenClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isMenu && (
        <div className="flex flex-col w-full">
          {links.map((link) => {
            const { name, href, className } = link ?? {};
            return (
              <Link
                key={name}
                href={href}
                className={clsx(
                  `${poppins.className} ${
                    className ? className : ""
                  } flex grow items-center justify-center text-base font-normal	leading-[26px] text-[#333333] px-[1rem] py-[14px] hover:bg-[#ddd]`,
                  {
                    "bg-sky-100 text-blue-600": pathname === href,
                  }
                )}
              >
                {/* <LinkIcon className="w-6" /> */}
                <p>{name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
