import React from "react";

const ProcessSection = ({ currentLang = "de" }) => {
  const steps = [
    {
      number: "01",
      title:
        currentLang === "de" ? "Deep Dive & Strategie" : "Deep Dive & Strategy",
      desc:
        currentLang === "de"
          ? "Ich höre zu, stelle die richtigen Fragen und verstehe erst mal wirklich, was du brauchst. Wo drückt der Schuh? Welche Daten sind wichtig? Was kann schiefgehen?"
          : "I listen, ask the right questions and really understand what you need first. Where does it hurt? What data matters? What could go wrong?",
      highlight:
        currentLang === "de"
          ? "Verstehen vor Programmieren"
          : "Understanding before coding",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: currentLang === "de" ? "Build & Test" : "Build & Test",
      desc:
        currentLang === "de"
          ? "Wöchentliche Updates, damit du siehst wie's läuft. Ich teste alles gründlich und sorge dafür, dass nichts kaputt geht wenn's live geht."
          : "Weekly updates so you can see how it's going. I test everything thoroughly and make sure nothing breaks when it goes live.",
      highlight:
        currentLang === "de"
          ? "Keine bösen Überraschungen"
          : "No nasty surprises",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: currentLang === "de" ? "Launch & Growth" : "Launch & Growth",
      desc:
        currentLang === "de"
          ? "Deine App geht live! Aber das ist erst der Anfang. Ich überwache alles, optimiere Performance und helfe dir beim nächsten Level."
          : "Your app goes live! But that's just the beginning. I monitor everything, optimize performance and help you reach the next level.",
      highlight:
        currentLang === "de" ? "Langfristiger Partner" : "Long-term partner",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      label: currentLang === "de" ? "Transparenz" : "Transparency",
    },
    {
      label: currentLang === "de" ? "Qualität" : "Quality",
    },
    {
      label: currentLang === "de" ? "Nachhaltigkeit" : "Sustainability",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-gray-800 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">
          {currentLang === "de" ? "So arbeite ich" : "How I Work"}
        </h2>

        <div className="relative">
          {/* Vertical line - versteckt auf sehr kleinen Screens */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-400"></div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                {/* Circle with number */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-emerald-400 rounded-full text-gray-900 font-bold text-base sm:text-lg flex-shrink-0">
                  {step.number}
                </div>

                {/* Content */}
                <div className="ml-4 sm:ml-6 md:ml-8 flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-3 gap-2 sm:gap-0">
                    <div className="flex items-center">
                      <div className="text-emerald-400 mr-2 sm:mr-3 flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-emerald-400 font-medium text-base sm:text-lg mb-2 sm:mb-3">
                    {step.highlight}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400 text-sm sm:text-base">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <span>{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
