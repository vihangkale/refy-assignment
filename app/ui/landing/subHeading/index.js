import clsx from "clsx";
import titleUnderline from "../../../assets/title-underline.svg";
import Image from "next/image";
export default function SubHeading({ heading, textAlign = "left" }) {
  return (
    <div
      className={clsx("flex flex-col items-center gap-y-[10px w-min", {
        "mx-auto": textAlign === "center",
      })}
    >
      <p className="text-[50px] font-bold leading-[61px] text-black whitespace-nowrap">
        {heading}
      </p>
      <Image
        src={titleUnderline}
        className="w-full"
        height={38}
        alt="underline"
      />
    </div>
  );
}
