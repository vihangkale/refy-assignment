import Heading from "../ui/heading";
import Image from "next/image";
import avatar from "../assets/avatar.jpg";
import { poppins } from "../ui/font";
const cardData = [
  {
    name: "Brenden Jacobs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Brenden Jacobs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Brenden Jacobs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },

  {
    name: "Brenden Jacobs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Brenden Jacobs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Brenden Jacobs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
export default function Page() {
  return (
    <div className="py-[175.51px] flex flex-col gap-y-[60px] px-[30px] bg-white">
      <Heading text="Career" className="text-center" />
      <div className="flex flex-col md:flex-row gap-[40px]">
        <div className="border border-solid border-[lightgrey] p-[32px] w-full md:w-1/5"></div>
        <div className="flex flex-col gap-[40px] w-full md:w-4/5">
          {cardData?.map(({ name, description }, id) => (
            <div
              key={id}
              className="flex flex-col md:flex-row rounded-[1rem] gap-[36px] p-[32px] border border-solid border-[lightgrey]"
            >
              <Image
                className="rounded-[24px]"
                src={avatar}
                width={190}
                height={190}
              />
              <div className="flex flex-col gap-[1rem]">
                <p className="font-bold text-[20px] leading-[24px] text-black">
                  {name}
                </p>
                <p
                  className={`${poppins.className} font-normal text-[18px] leading-[30px] text-black`}
                >
                  {description}
                </p>

                <button
                  className={`${poppins.className} flex justify-center items-center text-white leading-[24px] text-base font-bold w-[188px] h-[48px] border border-solid border-[#0D80DF] rounded-[24px] getStarted-gradient`}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
