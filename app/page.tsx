"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import StreamingSection from "@/components/sections/streaming-section";
import HostingSection from "@/components/sections/hosting-section";
import DevelopmentSection from "@/components/sections/development-section";

export default function PudloMediaWebsite() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-['Fira_Code',_monospace]">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection />
      <StreamingSection />
      <HostingSection />
      <DevelopmentSection />
    </div>
  );
}
