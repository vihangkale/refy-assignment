import Header from "./components/header";
import List from "./components/list";
import Text from "./components/text";
import Button from "./components/button";
import Hero from "../../../assets/hero4.svg";
import Image from "next/image";
export default function Section4() {
  return (
    <div className="flex justify-between  mt-[11.25rem]">
      <div className="w-2/4 flex flex-col gap-y-[40px]">
        <Header />
        <List />
        <Text />
        <Button />
      </div>
      <Image src={Hero} width={497} height={497} alt="company logo" />
    </div>
  );
}