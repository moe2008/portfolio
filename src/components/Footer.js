import React from "react";

const Footer = ({ currentLang }) => {
  return (
    <footer className="border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">modev</div>
            <p className="text-gray-400">Build. Automate. Scale.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#services"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Leistungen" : "Services"}
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Projekte" : "Projects"}
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Kontakt" : "Contact"}
            </a>
            <a
              href="/impressum"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Impressum" : "Legal"}
            </a>
            <a
              href="/datenschutz"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Datenschutz" : "Privacy"}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2025 modev.{" "}
          {currentLang === "de"
            ? "Alle Rechte vorbehalten."
            : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
