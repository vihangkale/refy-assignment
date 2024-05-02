import { poppins } from "../../../font";
export default function Text({ data }) {
  const { text1, text2 } = data ?? {};
  return (
    <div
      className={`${poppins.className} font-normal text-[18px] leading-[30px] text-[#5A5A5A] flex flex-col gap-y-[40px]`}
    >
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}
