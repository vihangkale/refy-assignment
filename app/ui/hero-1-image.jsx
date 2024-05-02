import Image from "next/image";
import hero from "../assets/hero1.svg";
export default function Hero1Image() {
  return (
    <Image
      className="absolute top-0 right-0 hidden md:block"
      src={hero}
      alt="hero1 logo"
    />
  );
}
