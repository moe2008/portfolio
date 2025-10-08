import React, { useState, useRef } from "react";
import { Target, Zap, Rocket, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = ({ currentLang = "de" }) => {
  const [sendMessage, setSendMessage] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [lastSubmit, setLastSubmit] = useState(0);
  const recaptchaRef = useRef(null);

  const validateForm = (data) => {
    const suspiciousPatterns = /[<>{}[\]\\]/;

    if (
      suspiciousPatterns.test(data.name) ||
      suspiciousPatterns.test(data.project)
    ) {
      return false;
    }

    if (data.project.length < 10) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmit < 5000) {
      setError(true);
      setSendMessage(
        currentLang === "de"
          ? "Bitte warte einen Moment vor dem nächsten Versuch."
          : "Please wait a moment before trying again."
      );
      return;
    }

    if (!captchaValue) {
      setError(true);
      setSendMessage(
        currentLang === "de"
          ? "Bitte bestätige, dass du kein Roboter bist."
          : "Please confirm you're not a robot."
      );
      return;
    }

    setIsLoading(true);
    setSendMessage("");
    setError(false);

    const formData = new FormData(e.target);

    const honeypot = formData.get("honeypot");
    if (honeypot) {
      console.log("Bot detected via honeypot");
      setIsLoading(false);
      return;
    }

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      project: formData.get("project"),
      budget: formData.get("budget"),
      "g-recaptcha-response": captchaValue,
    };

    if (!validateForm(templateParams)) {
      setError(true);
      setSendMessage(
        currentLang === "de"
          ? "Bitte fülle alle Felder korrekt aus. Die Projektbeschreibung muss mindestens 10 Zeichen lang sein."
          : "Please fill out all fields correctly. Project description must be at least 10 characters long."
      );
      setIsLoading(false);
      return;
    }

    // Simuliere erfolgreichen Versand nach 2 Sekunden
    setTimeout(() => {
      console.log("SUCCESS! (simulated)", templateParams);
      setSendMessage(
        currentLang === "de"
          ? "Nachricht erfolgreich gesendet! Ich melde mich innerhalb von 24h bei Ihnen."
          : "Message sent successfully! I'll get back to you within 24 hours."
      );
      setError(false);
      setLastSubmit(now);
      e.target.reset();
      setCaptchaValue(null);
      setIsLoading(false);
    }, 2000);
  };

  const contactCards = [
    {
      icon: Zap,
      title: currentLang === "de" ? "Schnelle Antwort" : "Quick Response",
      desc: currentLang === "de" ? "Antwort innerhalb 24h" : "Reply within 24h",
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/40",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
      titleColor: "text-emerald-400",
    },
    {
      icon: Target,
      title: currentLang === "de" ? "Kostenlose Beratung" : "Free Consultation",
      desc:
        currentLang === "de"
          ? "30min Strategie-Call gratis"
          : "30min strategy call free",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/40",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      titleColor: "text-blue-400",
    },
    {
      icon: Rocket,
      title: currentLang === "de" ? "Schneller Start" : "Quick Start",
      desc:
        currentLang === "de"
          ? "Projekt-Kick-off in 1 Woche"
          : "Project kick-off in 1 week",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/40",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      titleColor: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/moe2008",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/mooodykrs",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-gray-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          {currentLang === "de" ? "Lass uns sprechen" : "Let's Talk"}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Info Cards */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                {currentLang === "de"
                  ? "Bereit für dein nächstes Projekt?"
                  : "Ready for your next project?"}
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                {currentLang === "de"
                  ? "Erzähl mir von deiner Idee. Wir finden gemeinsam den besten Weg, sie umzusetzen."
                  : "Tell me about your idea. Together we'll find the best way to implement it."}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactCards.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={index}
                    className={`p-3 sm:p-4 rounded-xl ${item.bgColor} border ${item.borderColor} ${item.hoverBorder} transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${item.iconBg} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`}
                        />
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`font-semibold text-sm sm:text-base ${item.titleColor}`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6 sm:pt-8">
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {currentLang === "de"
                  ? "Oder folge mir hier:"
                  : "Or follow me here:"}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;

                  return (
                    <a
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.href}
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-700 hover:border-emerald-400 transition-all duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Form */}
          <div className="relative w-full">
            {/* Background decoration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-30"></div>

            <div className="relative bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700/50">
              <form className="space-y-4 sm:space-y-6" onSubmit={sendEmail}>
                {/* Honeypot Field */}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium mb-2 text-gray-300"
                    >
                      {currentLang === "de" ? "Name" : "Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500 text-sm sm:text-base"
                      placeholder={
                        currentLang === "de" ? "Max Mustermann" : "John Doe"
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium mb-2 text-gray-300"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500 text-sm sm:text-base"
                      placeholder="max@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-xs sm:text-sm font-medium mb-2 text-gray-300"
                  >
                    {currentLang === "de" ? "Projektziel" : "Project Goal"}
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500 resize-none text-sm sm:text-base"
                    placeholder={
                      currentLang === "de"
                        ? "Beschreibe dein Projekt, deine Ziele und Herausforderungen..."
                        : "Describe your project, goals and challenges..."
                    }
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs sm:text-sm font-medium mb-2 text-gray-300"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500 text-sm sm:text-base"
                  >
                    <option value="">
                      {currentLang === "de" ? "Budget wählen" : "Select budget"}
                    </option>
                    <option value="2500-5000">€2.500 - €5.000</option>
                    <option value="5000-10000">€5.000 - €10.000</option>
                    <option value="10000+">€10.000+</option>
                  </select>
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="flex justify-center p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-lg mb-2">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      reCAPTCHA Placeholder
                    </p>
                    <button
                      type="button"
                      onClick={() => setCaptchaValue("demo-captcha-token")}
                      className="mt-2 text-xs text-emerald-400 hover:text-emerald-300"
                    >
                      {captchaValue ? "✓ Verified" : "Click to verify"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-gray-900 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/25 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {currentLang === "de"
                          ? "Wird gesendet..."
                          : "Sending..."}
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        {currentLang === "de"
                          ? "Projekt anfragen"
                          : "Start Project"}
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>

                <p className="text-center text-xs sm:text-sm text-gray-400 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {currentLang === "de"
                    ? "Antwort garantiert innerhalb 24h"
                    : "Reply guaranteed within 24h"}
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Success/Error Message */}
        {sendMessage && (
          <div
            className={`max-w-2xl mx-auto mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg border ${
              error
                ? "bg-red-500/10 border-red-500/30 text-red-300"
                : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
            }`}
          >
            <div className="flex items-start sm:items-center">
              {error ? (
                <svg
                  className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 sm:mt-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 sm:mt-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              <p className="text-xs sm:text-sm font-medium">{sendMessage}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
