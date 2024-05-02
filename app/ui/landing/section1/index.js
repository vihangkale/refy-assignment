import { poppins } from "../../font";
import Hero1Image from "../../hero-1-image";
export default function Section1() {
  return (
    <div>
      <div className="flex flex-col gap-y-10 mt-[17.914rem]">
        <p className="text-[60px] font-thin leading-[73px] text-[#333333] w-[30%]">
          <span className="text-[80px] font-bold leading-[97px]">
            {" "}
            Provide team{" "}
          </span>
          to organizations irrespective of their size
        </p>

        <button
          className={`${poppins.className} flex justify-center w-[154px] h-[48px] items-center getStarted-gradient rounded-3xl border-solid border border-[#0D80DF] text-white font-bold font-base leading-6`}
        >
          Get Started
        </button>
      </div>
      <Hero1Image />
    </div>
  );
}
