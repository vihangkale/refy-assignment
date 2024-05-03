import Heading from "../ui/heading";
import Image from "next/image";
import { poppins, opensans } from "../ui/font";
import hero from "../assets/aboutHero.svg";
import map from "../assets/map.svg";
const inputs = [
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Address",
    name: "address",
  },
];
export default function Page() {
  return (
    <div className="py-[175.51px] flex flex-col gap-y-[60px] px-[30px]">
      <Heading text="Contact Us" className="text-center" />
      <div className="flex flex-col md:flex-row gap-[40px]">
        <div className="w-full md:w-2/4 flex flex-col gap-[36px]">
          <p
            className={`${poppins.className} text-[18px] font-normal leading-[30px] text-[#000000] `}
          >
            Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin
            metus.
          </p>

          {inputs?.map(({ label, name }) => (
            <input
              key={name}
              className={`${opensans.className} border border-solid border-[#18B0E9] rounded-[3px] w-full h-[56px] px-[20px] py-[12px] text-[14px] font-normal text-black`}
              type="text"
              placeholder={label}
              name={name}
            />
          ))}
          <button className="w-[188px] h-[48px] justofy-center items-center getStarted-gradient border border-solid border-[#0D80DF] rounded-[24px] font-bold text-[#FFFFFF] leading-[24px] text-base text-white">
            Submit
          </button>
        </div>
        <Image className="w-full md:w-2/4" src={hero} alt="about" />
      </div>
      <div className="flex flex-col md:flex-row gap-[40px]">
        <Image className="w-full md:w-2/4" src={map} alt="map" />
        <div
          className={`${poppins.className} w-full md:w-2/4 flex flex-col gap-[36px] text-[18px] font-normal leading-[30px] text-[#000000]`}
        >
          <p>Name</p>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}
