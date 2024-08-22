import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Course from "@/components/Course";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
      <Header /> 
      <Hero/>
      <Search/>
      <Course/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
