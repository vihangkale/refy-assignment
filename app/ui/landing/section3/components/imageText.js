import Image from "next/image";

export default function ImageText({ data }) {
  const { text, header, image } = data ?? {};
  return (
    <div className="flex flex-col justify-center items-center gap-y-[20px]">
      <Image src={image} width={497} height={300} alt="hero" />
      <p className="text-[#333333] font-bold text-[32px] leading-[39px] text-center">
        {header}
      </p>
      <p className="text-[#5A5A5A] font-normal text-[18px] leading-[30px] text-center">
        {text}
      </p>
    </div>
  );
}
