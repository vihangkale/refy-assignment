import Image from "next/image";
import companyLogo from "../assets/companyLogo.svg";
export default function CompanyLogo() {
  return (
    <div className={`flex flex-row items-center leading-none gap-x-[10.5px]`}>
      <Image src={companyLogo} width={40} height={40} alt="company logo" />
      <p className="text-xl leading 6 text-black font-bold">
        AB Dummy Pte. Ltd
      </p>
    </div>
  );
}
