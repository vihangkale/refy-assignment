import ImageWithText from "./imageWithText";
import hero1 from "../../../../assets/heroTeamBuild1.svg";
import hero2 from "../../../../assets/heroTeamBuild2.svg";
import hero3 from "../../../../assets/heroTeamBuild3.svg";
const sectionData = [
  {
    header: "Leadership Hiring",
    points: [
      "Leadership Hiring",
      "Lorem ipsum dolor sit amet consectetur",
      "Tincidunt eget tincidunt porttitor proin tortor mattis sodales id rhoncus",
      "Cras tincidunt felis tortor lacus felis libero",
    ],
    image: hero1,
  },
  {
    header: "Building Extended Team",
    points: [
      "Hiring and setting up teams in different locations",
      "Lorem ipsum dolor sit amet consectetur",
      "Tincidunt eget tincidunt porttitor proin tortor mattis sodales id rhoncus",
      "Cras tincidunt felis tortor lacus felis libero",
    ],
    image: hero2,
  },
  {
    header: "Hiring Candidates for Clients",
    points: [
      "Lorem ipsum dolor sit amet consectetur",
      "Tincidunt eget tincidunt porttitor proin tortor mattis sodales id rhoncus",
      "Cras tincidunt felis tortor lacus felis libero",
    ],
    image: hero3,
  },
];
export default function Sections() {
  return (
    <div className="mt-[36.76px] flex flex-col gap-[6.25rem]">
      {sectionData.map((sectionObj, index) => (
        <ImageWithText key={index + 1} data={sectionObj} id={index + 1} />
      ))}
    </div>
  );
}
