"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState("de");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "de";
    setCurrentLang(savedLang);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <main>
          {/* Hero Section */}
          <HeroSection currentLang={currentLang} />
          {/* Process Section */}
          <ProcessSection currentLang={currentLang} />
          {/* Projects Section */}
          <ProjectsSection currentLang={currentLang} />
          {/* Pricing Section */}
          <PricingSection currentLang={currentLang} />
          {/* About Section */}
          <AboutSection currentLang={currentLang} />
          {/* FAQ Section */}

          <FaqSection currentLang={currentLang} />
          {/* Contact Section */}
          <ContactSection currentLang={currentLang} />
        </main>

        {/* Footer */}
      </div>
    </>
  );
}
