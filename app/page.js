import NavBar from "./ui/landing/nav";
import Section1 from "./ui/landing/section1";
import Section2 from "./ui/landing/section2";
import Section3 from "./ui/landing/section3";
import Section4 from "./ui/landing/section4";
import Footer from "./ui/landing/footer";
import MobileNav from "./ui/landing/mobileNav";
export default function Home() {
  return (
    <main className="min-h-screen pt-10 px-[30px] bg-white">
      <NavBar />
      <MobileNav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
