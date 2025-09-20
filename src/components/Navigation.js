import React, { useState } from "react";

const Navigation = ({ currentLang, setCurrentLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleLang = () => {
    const next = currentLang === "de" ? "en" : "de";
    setCurrentLang(next);
    localStorage.setItem("language", next);
  };
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <a href="#home">
              <svg
                width="50"
                height="30"
                viewBox="0 0 114 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M113.995 40.5677C113.995 36.7268 113.995 32.8789 113.995 29.038C113.995 25.6457 113.995 22.2534 113.995 18.854C113.995 12.567 113.995 6.28001 113.995 0H102.305C102.311 2.25688 102.305 4.50675 102.305 6.76363C102.305 10.1209 102.305 13.4782 102.305 16.8355C102.305 20.6694 102.305 24.4962 102.305 28.3231C102.305 29.1992 102.305 30.0824 102.305 30.9585C97.9604 28.0357 92.7527 26.5849 87.6049 26.8582C84.8682 26.9914 82.1515 27.6082 79.6008 28.6666C76.8442 29.816 74.2869 31.4771 72.0816 33.5588C71.8026 33.8181 71.5303 34.0774 71.2845 34.3648C70.0689 33.0261 68.7936 31.7225 67.3323 30.6781C63.8982 28.1199 59.6869 26.8232 55.4955 26.8302C53.2305 26.8162 50.9521 27.0545 48.7734 27.7414C46.8737 28.3301 45.1002 29.3114 43.4927 30.5239C42.689 31.1337 41.9185 31.7925 41.1878 32.4934C39.4475 30.8463 37.5345 29.3604 35.3691 28.4002C32.2272 27.0405 28.7599 26.7601 25.3988 26.8442C22.4164 26.9634 19.4539 27.8185 16.8766 29.4235C14.7245 30.7552 12.8513 32.5565 11.2837 34.6031C9.80246 36.5516 8.64004 38.7734 7.92266 41.1565C7.22521 43.4414 6.93958 45.8455 6.9728 48.2425C6.9728 50.6045 6.9728 52.9665 6.9728 55.3215C9.198 55.3285 11.4232 55.3215 13.6418 55.3215C15.3156 55.3215 16.9895 55.3215 18.6634 55.3215C18.6568 52.9806 18.6701 50.6396 18.6568 48.3056C18.6103 46.5534 18.7431 44.738 19.5203 43.154C20.6429 40.785 22.7817 38.8786 25.2992 38.4721C27.3118 38.1567 29.4374 38.5001 31.1976 39.6075C32.9977 40.7359 34.4524 42.5372 35.0436 44.675C35.3358 45.6772 35.4089 46.7356 35.389 47.7799C35.389 52.2656 35.389 56.7514 35.389 61.2371C35.389 67.482 35.389 73.72 35.389 79.965C39.2881 79.965 43.1938 79.965 47.0929 79.965H47.2324C47.2257 74.4559 47.239 68.9539 47.2257 63.4519C47.239 57.8448 47.2191 52.2376 47.239 46.6305C47.3387 43.5325 49.1255 40.5817 51.7359 39.1729C53.37 38.3038 55.2962 38.1777 57.0698 38.5842C60.5371 39.4042 63.4066 42.7265 63.6192 46.5113C63.7122 49.448 63.5594 52.3918 63.7122 55.3285C67.6245 55.3426 71.5369 55.3285 75.4493 55.3356C75.1836 53.1067 75.3829 50.8078 76.0936 48.6911C76.9305 46.1679 78.4649 43.904 80.451 42.2499C83.0615 40.0421 86.4823 38.9417 89.8168 39.215C92.8258 39.4393 95.7485 40.778 97.9604 42.9438C100.378 45.2777 101.926 48.5579 102.251 51.9993C102.564 55.3566 101.727 58.826 99.8734 61.5805C99.0298 62.8421 97.9936 63.9636 96.8179 64.8817C94.4067 66.7882 91.3778 67.7274 88.3754 67.6713C84.1243 67.6713 79.8731 67.6713 75.6154 67.6713C72.9385 67.6713 70.2549 67.6643 67.578 67.6783C70.2815 72.185 74.3134 75.7947 78.9631 77.8763C81.4872 79.0118 84.1973 79.7056 86.934 79.9159C90.7467 80.2173 94.6325 79.6005 98.1796 78.0936C100.631 77.0563 102.922 75.6054 104.948 73.8251C106.117 72.7948 107.193 71.6594 108.17 70.4188C109.89 68.239 111.278 65.7719 112.261 63.1365C113.264 60.4451 113.842 57.5714 113.969 54.6837C114.028 49.9667 113.982 45.2637 113.995 40.5677Z"
                  fill="currentColor"
                />
                <path
                  d="M5.26576 49.7775C3.51217 49.7775 1.75857 49.7775 0.0049818 49.7775C-0.0016606 51.6278 -0.0016606 53.4782 0.0049818 55.3285C1.75857 55.3285 3.51217 55.3285 5.26576 55.3285C5.25912 53.4782 5.26576 51.6278 5.26576 49.7775Z"
                  fill="currentColor"
                />
                <path
                  d="M11.5096 62.9472C11.5096 60.8025 11.5096 58.6577 11.5096 56.506C9.477 56.513 7.43779 56.506 5.40521 56.513C4.28929 56.513 3.18001 56.506 2.06409 56.513C2.06409 59.8352 2.06409 63.1575 2.06409 66.4797C5.21258 66.4867 8.36108 66.4797 11.5029 66.4797C11.5162 65.3092 11.5162 64.1247 11.5096 62.9472Z"
                  fill="currentColor"
                />
                <path
                  d="M7.70349 67.6643C7.45772 67.6573 7.21196 67.6573 6.96619 67.6713C6.97283 71.7645 6.96619 75.8577 6.96619 79.9579C10.8254 79.979 14.678 79.993 18.5372 80H18.6635C18.6568 75.8928 18.6568 71.7855 18.6635 67.6783C15.0168 67.6573 11.3635 67.6643 7.70349 67.6643Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Leistungen" : "Services"}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Projekte" : "Projects"}
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Preise" : "Pricing"}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Über mich" : "About"}
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {currentLang === "de" ? "Kontakt" : "Contact"}
            </a>
            <span>|</span>
            <a
              href="/blog"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Desktop Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-lg border border-green-500/30 text-green-300 hover:border-green-500/60 hover:text-green-200 transition-colors text-xs"
                aria-label="Toggle language"
                title="Toggle language"
              >
                {currentLang === "de" ? "EN" : "DE"}
              </button>
            </div>
            <a
              href="#contact"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              {currentLang === "de"
                ? "Kostenloses Erstgespräch"
                : "Free Consultation"}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 flex items-center w-full ${
            mobileMenuOpen ? " opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-12 pb-2 space-y-4 w-full items-center flex flex-col">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              {currentLang === "de" ? "Leistungen" : "Services"}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              {currentLang === "de" ? "Projekte" : "Projects"}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              {currentLang === "de" ? "Preise" : "Pricing"}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              {currentLang === "de" ? "Über mich" : "About"}
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              FAQ
            </a>
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              {currentLang === "de" ? "Kontakt" : "Contact"}
            </a>

            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-4 py-2 border-t border-gray-700 mt-4 pt-4">
              <div className="flex items-center space-x-2 text-sm">
                <button
                  onClick={toggleLang}
                  className="px-3 py-1.5 rounded-lg border border-green-500/30 text-green-300 hover:border-green-500/60 hover:text-green-200 transition-colors text-xs"
                  aria-label="Toggle language"
                  title="Toggle language"
                >
                  {currentLang === "de" ? "EN" : "DE"}
                </button>
              </div>
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors mt-4"
            >
              {currentLang === "de"
                ? "Kostenloses Erstgespräch"
                : "Free Consultation"}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
