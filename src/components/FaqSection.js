import React from "react";
import {
  Target,
  Clock,
  Lock,
  Wrench,
  TrendingUp,
  Cloud,
  ChevronDown,
} from "lucide-react";

const FaqSection = ({ currentLang }) => {
  return (
    <section id="faq" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          FAQ
        </h2>

        <div className="space-y-4">
          {[
            {
              q:
                currentLang === "de"
                  ? "Wie definieren wir den Projekt-Scope?"
                  : "How do we define the project scope?",
              a:
                currentLang === "de"
                  ? "Gemeinsame Discovery-Phase mit User Stories, technischen Requirements und klaren Akzeptanzkriterien. Agile Anpassungen sind jederzeit möglich."
                  : "Joint discovery phase with user stories, technical requirements and clear acceptance criteria. Agile adjustments are possible at any time.",
              icon: Target,
              color: "blue",
            },
            {
              q:
                currentLang === "de"
                  ? "Wie lange dauert ein typisches Projekt?"
                  : "How long does a typical project take?",
              a:
                currentLang === "de"
                  ? "MVP: 2-4 Wochen, vollständige SaaS-Lösung: 6-12 Wochen. Abhängig von Komplexität und Integrationen."
                  : "MVP: 2-4 weeks, complete SaaS solution: 6-12 weeks. Depending on complexity and integrations.",
              icon: Clock,
              color: "green",
            },
            {
              q:
                currentLang === "de"
                  ? "Wem gehört der Code?"
                  : "Who owns the code?",
              a:
                currentLang === "de"
                  ? "Vollständige Code-Ownership liegt beim Kunden. Alle Repositories werden übertragen, keine Vendor-Lock-ins."
                  : "Complete code ownership lies with the customer. All repositories are transferred, no vendor lock-ins.",
              icon: Lock,
              color: "purple",
            },
            {
              q:
                currentLang === "de"
                  ? "Bieten Sie Wartung an?"
                  : "Do you offer maintenance?",
              a:
                currentLang === "de"
                  ? "Ja, flexible Wartungsverträge für Updates, Monitoring und Feature-Erweiterungen. Auch punktuelle Unterstützung möglich."
                  : "Yes, flexible maintenance contracts for updates, monitoring and feature extensions. Occasional support also possible.",
              icon: Wrench,
              color: "orange",
            },
            {
              q:
                currentLang === "de"
                  ? "Wie handhaben Sie SEO?"
                  : "How do you handle SEO?",
              a:
                currentLang === "de"
                  ? "Technisches SEO ist Standard: strukturierte Daten, Core Web Vitals, semantisches HTML. Content-SEO auf Wunsch."
                  : "Technical SEO is standard: structured data, Core Web Vitals, semantic HTML. Content SEO on request.",
              icon: TrendingUp,
              color: "emerald",
            },
            {
              q:
                currentLang === "de"
                  ? "Welche Hosting-Optionen gibt es?"
                  : "What hosting options are available?",
              a:
                currentLang === "de"
                  ? "Vercel, AWS, oder Ihre bevorzugte Plattform. Setup und Deployment-Pipeline inklusive."
                  : "Vercel, AWS, or your preferred platform. Setup and deployment pipeline included.",
              icon: Cloud,
              color: "cyan",
            },
          ].map((faq, index) => {
            const IconComponent = faq.icon;

            return (
              <div
                key={index}
                className={`faq-item bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 fade-in stagger-${
                  index + 1
                }`}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 rounded-xl transition-colors duration-200"
                  onClick={(e) => {
                    const item = e.target.closest(".faq-item");
                    const answer = item.querySelector(".faq-answer");
                    const chevron = item.querySelector(".chevron");
                    const isOpen = !answer.classList.contains("hidden");

                    // Close all other items
                    document
                      .querySelectorAll(".faq-item")
                      .forEach((otherItem) => {
                        if (otherItem !== item) {
                          const otherAnswer =
                            otherItem.querySelector(".faq-answer");
                          const otherChevron =
                            otherItem.querySelector(".chevron");
                          otherAnswer.classList.add("hidden");
                          otherChevron.style.transform = "rotate(0deg)";
                          otherItem.classList.remove(
                            "ring-2",
                            `ring-${otherItem.dataset.color}-500/20`
                          );
                        }
                      });

                    // Toggle current item
                    if (isOpen) {
                      answer.classList.add("hidden");
                      chevron.style.transform = "rotate(0deg)";
                      item.classList.remove(
                        "ring-2",
                        `ring-${faq.color}-500/20`
                      );
                    } else {
                      answer.classList.remove("hidden");
                      chevron.style.transform = "rotate(180deg)";
                      item.classList.add("ring-2", `ring-${faq.color}-500/20`);
                    }
                  }}
                  data-color={faq.color}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${faq.color}-500/10 flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <IconComponent
                        className={`w-6 h-6 text-${faq.color}-400`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {faq.q}
                      </h3>
                      <div
                        className={`text-${faq.color}-400 text-sm font-medium`}
                      >
                        {currentLang === "de"
                          ? "Klicken zum Aufklappen"
                          : "Click to expand"}
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className="chevron w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0"
                    style={{ transform: "rotate(0deg)" }}
                  />
                </button>

                <div className="faq-answer hidden px-6 pb-6">
                  <div
                    className={`bg-${faq.color}-500/5 rounded-lg p-4 border-l-4 border-${faq.color}-500`}
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block w-full bg-gradient-to-r from-emerald-400/10 to-blue-500/10 rounded-xl p-6 border border-emerald-400/20">
            <h3 className="text-xl font-bold text-white mb-2">
              {currentLang === "de" ? "Noch Fragen?" : "More Questions?"}
            </h3>
            <p className="text-gray-400 mb-4">
              {currentLang === "de"
                ? "Lass uns bei einem kostenlosen Beratungsgespräch deine Idee besprechen"
                : "Let's discuss your idea in a free consultation"}
            </p>
            <button className="bg-emerald-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-emerald-300 transition-colors duration-200">
              {currentLang === "de"
                ? "Kostenloses Gespräch buchen"
                : "Book Free Consultation"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
