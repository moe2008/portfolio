import React from "react";

const HeroSection = ({currentLang}) => {
  return (
    <section className="py-20 px-6" id="home">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          <span className="gradient-text">Build. Automate. Scale.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in stagger-1">
          {currentLang === "de"
            ? "Ich entwickle skalierbare MERN/Next.js-SaaS und automatisiere Prozesse mit APIs, Zapier & n8n – weniger manueller Aufwand, mehr Ergebnis."
            : "I build scalable MERN/Next.js SaaS and automate workflows with APIs, Zapier & n8n—less manual work, more outcomes."}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in stagger-2">
          <a
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            {currentLang === "de" ? "Projekt anfragen" : "Request Project"}
          </a>
          <a
            href="#projects"
            className="border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            {currentLang === "de"
              ? "Technical Deep-Dive"
              : "Technical Deep-Dive"}
          </a>
        </div>

        <div className="text-sm text-gray-400 mb-12 fade-in stagger-3">
          {currentLang === "de"
            ? "10+ SaaS-Launches · 50+ Integrationen · Core Web Vitals A"
            : "10+ SaaS Launches · 50+ Integrations · Core Web Vitals A"}
        </div>

        {/* USPs */}
        <div className="grid md:grid-cols-4 gap-8 fade-in stagger-4">
          {[
            {
              de: "Schnelle Time-to-Market",
              en: "Fast Time-to-Market",
              icon: "./icons/LaptopCoding.svg",
            },
            {
              de: "Saubere Architektur & Tests",
              en: "Clean Architecture & Tests",
              icon: "./icons/Layer.svg",
            },
            {
              de: "Automationen mit echtem Zeitgewinn",
              en: "Automations that Save Time",
              icon: "./icons/RobotAi.svg",
            },
            {
              de: "SEO & Performance ab Tag 1",
              en: "SEO & Performance from Day One",
              icon: "./icons/SearchCoding.svg",
            },
          ].map((usp, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <img
                  src={usp.icon}
                  className="w-12 h-12 object-contain"
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-gray-200">
                {currentLang === "de" ? usp.de : usp.en}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
