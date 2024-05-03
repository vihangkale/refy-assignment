export default function Heading({ text, className }) {
  return (
    <p
      className={`${
        className ? className : ""
      } font-bold text-[70px] leading-[85px] text[#162251]`}
    >
      {text}
    </p>
  );
}
