import About from "@/components/home/About";
import Booking from "@/components/home/Booking";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Menu from "@/components/home/Menu";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      {/* hero */}
      <Hero/>
      {/* features */}
      <About/>
      <Features/>
      {/* booking */}
      <Booking/>
      {/* menu */}
      <Menu/>
      {/* products */}
      {/* newsletter */}
      {/* footer  */}
    </div>
  )
}
