import React from "react";

const ProjectsSection = ({ currentLang }) => {
  return (
    <section id="projects" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          {currentLang === "de" ? "Erfolgreiche Projekte" : "Successfull SaaS"}
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              name: "eingutertipp.de",
              category:
                currentLang === "de"
                  ? "Lead & Empfehlungsmarketing"
                  : "Lead & Referral Marketing",
              description:
                currentLang === "de"
                  ? "Empfehlungsmarketing-Plattform die Unternehmen und Kunden intelligent vernetzt. Automatisches Lead-Routing und Performance-Tracking für nachhaltige Geschäftsbeziehungen."
                  : "Referral marketing platform that intelligently connects businesses and customers. Automated lead routing and performance tracking for sustainable business relationships.",
              metrics: [
                {
                  label: currentLang === "de" ? "Empfehlungen" : "Referrals",
                  value: "+340%",
                },
                {
                  label: currentLang === "de" ? "Kosten" : "Costs",
                  value: "-60%",
                },
              ],
              tech: [
                "Next.js",
                "Node.js",
                "MongoDB",
                "Stripe",
                "Cloudinary",
                "AntD",
              ],
              icon: (
                <svg
                  className="w-8 h-8"
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
              color: "border-blue-500",
            },
            {
              name: "Reebaq",
              category:
                currentLang === "de"
                  ? "AI Feedback Management"
                  : "AI Feedback Management",
              description:
                currentLang === "de"
                  ? "KI-gestütztes Feedback-Management mit automatischer Sentiment-Analyse und Smart-Gutschein-System. Verwandelt Kundenfeedback in actionable Insights und Retention-Strategien."
                  : "AI-powered feedback management with automatic sentiment analysis and smart voucher system. Transforms customer feedback into actionable insights and retention strategies.",
              metrics: [
                { label: "Response Rate", value: "+280%" },
                {
                  label:
                    currentLang === "de"
                      ? "Auswertungszeit"
                      : "Evaluation Time",
                  value: "-75%",
                },
              ],
              tech: ["React", "OpenAI", "MongoDB", "Auth0", "n8n", "AntD"],
              icon: (
                <svg
                  className="w-8 h-8"
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
              color: "border-purple-500",
            },
            {
              name: "Proofly",
              category:
                currentLang === "de"
                  ? "Social Proof Tool"
                  : "Social Proof Tool",
              description:
                currentLang === "de"
                  ? "Live-Notification System für Websites mit Echtzeit-Analytics und einfacher Integration"
                  : "Live notification system for websites with real-time analytics and simple integration",
              metrics: [
                { label: "Conversion Rate", value: "+45%" },
                {
                  label: currentLang === "de" ? "Verweildauer" : "Dwell Time",
                  value: "+120%",
                },
              ],
              tech: [
                "Next.Js",
                "PostgreSQL",
                "Supabase",
                "Express",
                "Analytics Umami",
              ],
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4.828 7l2.828 2.828M9 3l3 3-3 3M4 17l5-5M20 7l-5 5"
                  />
                </svg>
              ),
              color: "border-green-500",
            },
            {
              name: "Dreamfundr",
              category:
                currentLang === "de"
                  ? "Dezentrale Funding-Plattform"
                  : "Decentralized Funding Platform",
              description:
                currentLang === "de"
                  ? "Ethereum-basierte Crowdfunding-Plattform mit Smart Contracts und transparenter Mittelverwendung"
                  : "Ethereum-based crowdfunding platform with smart contracts and transparent fund usage",
              metrics: [
                {
                  label: currentLang === "de" ? "Transparenz" : "Transparency",
                  value: "100%",
                },
                {
                  label:
                    currentLang === "de" ? "Gebühren gespart" : "Fees Saved",
                  value: "90%",
                },
              ],
              tech: ["React", "Ethereum", "Solidity", "Web3.js", "IPFS"],
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              ),
              color: "border-yellow-500",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`project-card p-8 rounded-lg ${
                project.color
              } scale-in stagger-${index + 1}`}
            >
              <div className="flex items-center mb-6">
                <div className="text-emerald-400 mr-4">{project.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-6 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-badge px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Projects */}
        <div className="border-t border-gray-700 pt-16">
          <h3 className="text-3xl font-bold text-center mb-4 fade-in">
            {currentLang === "de" ? "Side Projects" : "Side Projects"}
          </h3>
          <p className="text-center text-gray-400 mb-12 fade-in">
            {currentLang === "de"
              ? "Experimentelle Projekte und Tools für die Community"
              : "Experimental projects and tools for the community"}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Pokemon Soullink Dashboard",
                desc:
                  currentLang === "de"
                    ? "Interaktives Dashboard für Pokemon Soullink Challenges mit Team-Management und Statistiken"
                    : "Interactive dashboard for Pokemon Soullink challenges with team management and statistics",
                tech: ["React", "Pokemon API", "Chart.js"],
                icon: "🎮",
                status: "Live",
                users: "2.3k",
              },
              {
                name: "Chrome Extension Design Helper",
                desc:
                  currentLang === "de"
                    ? "Browser-Extension für Designer mit Farbpaletten, Typografie-Tools und Layout-Hilfen"
                    : "Browser extension for designers with color palettes, typography tools and layout helpers",
                tech: ["JavaScript", "Chrome API", "CSS"],
                icon: "🎨",
                status: "Beta",
                users: "450",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`fun-project-card p-6 rounded-xl border border-gray-600 bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 hover:scale-105 slide-in-${
                  index % 2 === 0 ? "left" : "right"
                } stagger-${index + 1}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            project.status === "Live"
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {project.users}{" "}
                          {currentLang === "de" ? "Nutzer" : "users"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs bg-gray-700/50 border border-gray-600 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fun Fact for Side Projects */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              {currentLang === "de"
                ? "💡 Diese Projekte entstehen in meiner Freizeit und sind Open Source verfügbar"
                : "💡 These projects are built in my spare time and available as Open Source"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
