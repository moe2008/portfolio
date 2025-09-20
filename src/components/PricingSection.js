import React from "react";

const PricingSection = ({currentLang}) => {
  return (
    <section id="pricing" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          {currentLang === "de" ? "Preise" : "Pricing"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              desc: currentLang === "de" ? "MVP/PoC" : "MVP/PoC",
              price: currentLang === "de" ? "ab €2.500" : "from €2,500",
              features:
                currentLang === "de"
                  ? [
                      "Basic SaaS Setup",
                      "Auth & User Management",
                      "Core Features",
                      "4 Wochen Entwicklung",
                    ]
                  : [
                      "Basic SaaS Setup",
                      "Auth & User Management",
                      "Core Features",
                      "4 weeks development",
                    ],
            },
            {
              name: "Scale",
              desc:
                currentLang === "de"
                  ? "Produktiv + Integrationen"
                  : "Production + Integrations",
              price: currentLang === "de" ? "ab €7.500" : "from €7,500",
              features:
                currentLang === "de"
                  ? [
                      "Vollständige SaaS-Lösung",
                      "API-Integrationen",
                      "Automationen",
                      "Performance-Optimierung",
                    ]
                  : [
                      "Complete SaaS solution",
                      "API integrations",
                      "Automations",
                      "Performance optimization",
                    ],
              featured: true,
            },
            {
              name: "Custom",
              desc:
                currentLang === "de"
                  ? "Enterprise/Compliance"
                  : "Enterprise/Compliance",
              price: currentLang === "de" ? "auf Anfrage" : "on request",
              features:
                currentLang === "de"
                  ? [
                      "Maßgeschneiderte Lösung",
                      "Enterprise Features",
                      "Compliance & Security",
                      "Dedicated Support",
                    ]
                  : [
                      "Custom solution",
                      "Enterprise features",
                      "Compliance & security",
                      "Dedicated support",
                    ],
            },
          ].map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border transition-all hover:scale-105 ${
                tier.featured
                  ? "border-emerald-600 bg-emerald-900/20"
                  : "border-gray-700 bg-gray-800/50"
              } scale-in stagger-${index + 1}`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-4">{tier.desc}</p>
              <div className="text-3xl font-bold mb-6 text-emerald-400">
                {tier.price}
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-emerald-400 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
