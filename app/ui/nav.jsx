import CompanyLogo from "./company-logo";
import NavLinks from "./navlinks";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav class="h-[87.63px] bg-white rounded-[50px] p-5 fixed inset-x-[30px] top-[41.5px] z-10 hidden md:block">
      <div class="flex h-full justify-between">
        <Link class="flex justify-start" href="/">
          <CompanyLogo />
        </Link>
        <div class="flex gap-x-10">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
