import NavBar from "./ui/landing/nav";
import Section1 from "./ui/landing/section1";
import Section2 from "./ui/landing/section2";
export default function Home() {
  return (
    <main className="min-h-screen w-min py-10 px-[30px] bg-white">
      <NavBar />
      <Section1 />
      <Section2 />
    </main>
  );
}
