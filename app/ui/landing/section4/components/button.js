import { poppins } from "../../../font";

export default function Button() {
  return (
    <button
      className={`w-[153px] h-[48px] flex justify-center items-center ${poppins} getStarted-gradient text-white font-bold leading-[24px] text-base rounded-[24px] border border-solid border-[#0D80DF]`}
    >
      Contact us
    </button>
  );
}
