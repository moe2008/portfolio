import React, { useMemo } from "react";
import Link from "next/link";

const FooterSection = ({currentLang}) => {
  const t = useMemo(
    () => ({
      navHome: currentLang === "de" ? "Home" : "Home",
      navBlog: currentLang === "de" ? "Blog" : "Blog",
      navContact: currentLang === "de" ? "Kontakt" : "Contact",
      navImpressum: currentLang === "de" ? "Impressum" : "Impressum",
      navDatenschutz: currentLang === "de" ? "Datenschutz" : "Privacy Policy",
    }),
    [currentLang]
  );
  return (
    <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            >
              modev
            </Link>
            <p className="text-gray-400 mt-2">
              Web Development & Automation Expert
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t.navHome}
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t.navBlog}
            </Link>
            <Link
              href="/#contact"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t.navContact}
            </Link>
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t.navImpressum}
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t.navDatenschutz}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; 2025 modev.{" "}
            {currentLang === "de"
              ? "Alle Rechte vorbehalten."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
