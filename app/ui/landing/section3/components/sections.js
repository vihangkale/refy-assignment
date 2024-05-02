import Section from "./section";
import Payroll from "../../../../assets/payroll.svg";
import Office from "../../../../assets/office.svg";
import Consultancy from "../../../../assets/consultancy.svg";
import Arrangement from "../../../../assets/arrangement.svg";
import SubHeading from "../../subHeading";

const sectionData1 = [
  {
    type: "text",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2:
      "Lorem ipsum dolor sit amet consectetur. In eget facilisi porta amet tincidunt sed tempor. Morbi habitant erat vitae odio. Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget ultrices viverra duis ut bibendum neque penatibus tempus justo.",
  },
  {
    type: "card",
    text: "Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna sed gravida sed elementum amet.",
    image: Office,
    header: "Setup office",
  },
  {
    type: "imageText",
    text: "Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna sed gravida sed elementum amet.",
    header: "Payroll Management",
    image: Payroll,
  },
];
const sectionData2 = [
  {
    type: "imageText",
    text: "Vendors, Cafeteria etc. Lorem ipsum dolor sit amet consectetur. Purus tellus quam",
    image: Arrangement,
    header: "Third-party Arrangement",
  },
  {
    type: "card",
    text: "Optimize cost, Execution strategy, Streamlining business Lorem ipsum dolor sit amet consectetur purus tellus quam",
    image: Consultancy,
    header: "Consultancy",
  },
];
export default function Sections() {
  return (
    <div className="flex flex-col md:flex-row gap-[40px] mt-[37.95px]">
      <div className="flex flex-col gap-[40px] w-full md:w-6/12">
        <SubHeading heading="Services" />
        {sectionData1?.map((dataObj, index) => (
          <Section key={index} data={dataObj} />
        ))}
      </div>
      <div className="flex flex-col gap-[40px] w-full md:w-6/12 mt-[70px]">
        {sectionData2?.map((dataObj, index) => (
          <Section key={index} data={dataObj} />
        ))}
      </div>
    </div>
  );
}
