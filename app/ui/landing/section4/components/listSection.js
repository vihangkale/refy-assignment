import { poppins } from "../../../font";
const points = ["Ads", "Increasing footprints"];
export default function ListSection() {
  return (
    <ul
      className={`${poppins.className} text-[18px] font-normal leading-[30px] text-[#5A5A5A] list-disc ml-[19px]`}
    >
      {points?.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
}
