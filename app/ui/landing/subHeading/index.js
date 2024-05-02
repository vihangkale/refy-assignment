import titleUnderline from "../../../assets/title-underline.svg";
import Image from "next/image";
export default function SubHeading({ heading }) {
  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      <p className="text-[50px] font-bold	leading-[61px] text-black">
        {heading}
      </p>
      <Image src={titleUnderline} width={338} height={38} alt="underline" />
    </div>
  );
}
