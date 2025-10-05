import React from "react";
import ReviewSection from "./ReviewSection";

const AboutSection = ({ currentLang }) => {
  function showTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach((content) => content.classList.remove("active"));

    // Remove active styling from all tabs
    const tabs = document.querySelectorAll(".tab-button");
    tabs.forEach((tab) => {
      tab.classList.remove(
        "border-blue-400",
        "text-blue-300",
        "border-green-400",
        "text-green-300",
        "border-purple-400",
        "text-purple-300"
      );
      tab.classList.add("text-gray-400");
      tab.style.borderBottom = "none";
    });

    // Show selected tab content
    document.getElementById(tabName + "-content").classList.add("active");

    // Style active tab
    const activeTab = document.getElementById("tab-" + tabName);
    activeTab.classList.remove("text-gray-400");

    if (tabName === "frontend") {
      activeTab.classList.add("text-blue-300", "border-blue-400");
      activeTab.style.borderBottom = "2px solid rgb(96 165 250)";
    } else if (tabName === "backend") {
      activeTab.classList.add("text-green-300", "border-green-400");
      activeTab.style.borderBottom = "2px solid rgb(74 222 128)";
    } else if (tabName === "devops") {
      activeTab.classList.add("text-purple-300", "border-purple-400");
      activeTab.style.borderBottom = "2px solid rgb(196 181 253)";
    }
  }

  return (
    <section id="about" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          {currentLang === "de" ? "Über mich" : "About Me"}
        </h2>

        <div className="text-center mb-12 fade-in stagger-1">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {currentLang === "de"
              ? "Spezialisiert auf MERN/Next.js, SaaS-Entwicklung, API-Design und Prozessautomatisierung. Mit über 3 Jahren Erfahrung helfe ich Unternehmen dabei, ihre digitalen Workflows zu optimieren und skalierbare Lösungen zu entwickeln."
              : "Specialized in MERN/Next.js, SaaS development, API design and process automation. With over 3 years of experience, I help companies optimize their digital workflows and develop scalable solutions."}
          </p>
        </div>

        {/* Improved Arsenal Section */}
        <div className="mb-12 fade-in stagger-2">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            {currentLang === "de" ? "Mein Arsenal" : "My Arsenal"}
          </h3>

          {/* Tab Navigation */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-center border-b border-gray-700">
              <button
                onClick={() => showTab("frontend")}
                id="tab-frontend"
                className="tab-button px-6 py-3 text-blue-300 border-b-2 border-blue-400 font-semibold"
              >
                Frontend
              </button>
              <button
                onClick={() => showTab("backend")}
                id="tab-backend"
                className="tab-button px-6 py-3 text-gray-400 hover:text-green-300 transition-colors"
              >
                Backend
              </button>
              <button
                onClick={() => showTab("devops")}
                id="tab-devops"
                className="tab-button px-6 py-3 text-gray-400 hover:text-purple-300 transition-colors"
              >
                DevOps
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Frontend Tab */}
            <div id="frontend-content" className="tab-content active">
              <div className="group p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">
                      <img src="./icons/Frontend.svg" alt="" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-blue-300">
                        Frontend Development
                      </h4>
                      <p className="text-sm text-gray-400">
                        {currentLang === "de"
                          ? "Interfaces die User lieben"
                          : "Interfaces your users will love"}
                      </p>
                    </div>
                  </div>
                  <div className="text-blue-400 font-mono text-sm">Expert</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Vue.js",
                    "Tailwind CSS",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="relative overflow-hidden px-3 py-1.5 text-sm rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-200 hover:bg-blue-500/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Tab */}
            <div id="backend-content" className="tab-content">
              <div className="group p-6 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">
                      <img src="./icons/DataCode.svg" alt="" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-green-300">
                        Backend Development
                      </h4>
                      <p className="text-sm text-gray-400">
                        {currentLang === "de"
                          ? "Skalierbar und sicher"
                          : "Scalable & secure foundations"}
                      </p>
                    </div>
                  </div>
                  <div className="text-green-400 font-mono text-sm">Expert</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "MongoDB", "PostgreSQL", "GraphQL", "Redis"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="relative overflow-hidden px-3 py-1.5 text-sm rounded-lg bg-green-500/10 border border-green-500/30 text-green-200 hover:bg-green-500/20 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* DevOps Tab */}
            <div id="devops-content" className="tab-content">
              <div className="group p-6 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl">
                      <img src="./icons/Configuration.svg" alt="" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-purple-300">
                        DevOps & Infrastructure
                      </h4>
                      <p className="text-sm text-gray-400">
                        {currentLang === "de"
                          ? "Deployment und Monitoring"
                          : "Deployment & monitoring mastery"}
                      </p>
                    </div>
                  </div>
                  <div className="text-purple-400 font-mono text-sm">
                    Advanced
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "AWS", "Vercel", "Linux", "n8n", "Git"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="relative overflow-hidden px-3 py-1.5 text-sm rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Favorite Integrations - Kompakter */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h4 className="text-4xl font-semibold mb-2 text-gray-300">
                {currentLang === "de"
                  ? "Lieblings-Integrationen"
                  : "Favorite Integrations"}
              </h4>
              <p className="text-gray-500">
                {currentLang === "de"
                  ? "APIs mit denen ich gerne arbeite"
                  : "APIs I love working with"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Stripe", icon: "💳" },
                { name: "OpenAI", icon: "🤖" },
                { name: "Discord", icon: "💬" },
                { name: "Telegram", icon: "📱" },
                { name: "Notion", icon: "📝" },
                { name: "Airtable", icon: "📊" },
              ].map((integration, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 text-center backdrop-blur-sm bg-gray-800/20"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-emerald-400 transition-colors">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400/10 to-blue-400/10 border border-emerald-400/20">
              <span className="text-lg">💡</span>
              <span className="text-emerald-400 font-medium">
                {currentLang === "de"
                  ? "Aktuell erkunde ich:"
                  : "Currently exploring:"}
              </span>
              <span className="text-gray-300">Blockchain, AI, Web3</span>
            </div>
          </div>
        </div>
      </div>
      <ReviewSection currentLang={currentLang} />
    </section>
  );
};

export default AboutSection;
