import clsx from "clsx";
import Image from "next/image";
import dots from "../../../../assets/teambuildingDots.svg";
import { poppins } from "../../../font";
export default function ImageWithText({ data, id }) {
  const { header, points, image } = data ?? {};
  return (
    <div
      className={clsx(
        `w-full flex flex-col md:flex-row m-h-[30.813rem] justify-between items-center`,
        {
          "md:flex-row-reverse": id === 2,
        }
      )}
    >
      <Image src={image} height="100%" alt="company logo" />
      <div
        className={clsx(`mr-0 mt-[2rem] md:mt-0 md:mr-[7.5rem]`, {
          "mr-0 ml-0 md:ml-[7.5rem]": id === 2,
        })}
      >
        <div className="flex flex-col md:flex-row gap-y-[1rem] md:gap-x-[21px] items-center">
          <p className="text-[70px] font-bold leading-[85px] text-[#D9D9D9]">
            {"0" + id}
          </p>
          <Image src={dots} height="100%" alt="company logo" />
        </div>
        <p className="text-[32px] leading-[39px] text-[#333333] my-[30px] font-bold">
          {header}
        </p>
        <ul
          className={`${poppins.className} text-[#5A5A5A] text-[18px] leading-[30px] font-normal list-disc ml-[19px]`}
        >
          {points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
