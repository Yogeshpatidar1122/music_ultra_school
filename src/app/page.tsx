
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import { TestimonialCards } from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instructor />
      <Footer />
    </main>
  )
}
