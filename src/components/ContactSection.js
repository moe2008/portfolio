import React, { useState, useRef } from "react";
import { Target, Zap, Rocket, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = ({ currentLang }) => {
  const [sendMessage, setSendMessage] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [lastSubmit, setLastSubmit] = useState(0);
  const recaptchaRef = useRef(null);

  const validateForm = (data) => {
    // Prüfe auf verdächtige Zeichen
    const suspiciousPatterns = /[<>{}[\]\\]/;

    if (
      suspiciousPatterns.test(data.name) ||
      suspiciousPatterns.test(data.project)
    ) {
      return false;
    }

    // Mindestlänge für Projekt-Beschreibung
    if (data.project.length < 10) {
      return false;
    }

    // E-Mail-Format prüfen
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Rate Limiting: 5 Sekunden zwischen Anfragen
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

    // CAPTCHA-Prüfung
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

    // FormData erstellen
    const formData = new FormData(e.target);

    // Honeypot-Prüfung
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

    // Validierung
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

    console.log("Sending data:", templateParams);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSendMessage(
            currentLang === "de"
              ? "Nachricht erfolgreich gesendet! Ich melde mich innerhalb von 24h bei Ihnen."
              : "Message sent successfully! I'll get back to you within 24 hours."
          );
          setError(false);
          setLastSubmit(now);
          e.target.reset();
          setCaptchaValue(null);
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
        },
        (error) => {
          console.log("ERROR:", error.text);
          setError(true);
          setSendMessage(
            currentLang === "de"
              ? "Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt."
              : "Error sending message. Please try again or contact me directly."
          );
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 border-t border-gray-800 z-[999]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          {currentLang === "de" ? "Lass uns sprechen" : "Let's Talk"}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Cards */}
          <div className="space-y-6">
            <div className="fade-in stagger-1">
              <h3 className="text-2xl font-bold mb-6 text-white">
                {currentLang === "de"
                  ? "Bereit für dein nächstes Projekt?"
                  : "Ready for your next project?"}
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                {currentLang === "de"
                  ? "Erzähl mir von deiner Idee. Wir finden gemeinsam den besten Weg, sie umzusetzen."
                  : "Tell me about your idea. Together we'll find the best way to implement it."}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title:
                    currentLang === "de"
                      ? "Schnelle Antwort"
                      : "Quick Response",
                  desc:
                    currentLang === "de"
                      ? "Antwort innerhalb 24h"
                      : "Reply within 24h",
                  color: "emerald",
                },
                {
                  icon: Target,
                  title:
                    currentLang === "de"
                      ? "Kostenlose Beratung"
                      : "Free Consultation",
                  desc:
                    currentLang === "de"
                      ? "30min Strategie-Call gratis"
                      : "30min strategy call free",
                  color: "blue",
                },
                {
                  icon: Rocket,
                  title:
                    currentLang === "de" ? "Schneller Start" : "Quick Start",
                  desc:
                    currentLang === "de"
                      ? "Projekt-Kick-off in 1 Woche"
                      : "Project kick-off in 1 week",
                  color: "purple",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={index}
                    className={`contact-info-card p-4 rounded-xl bg-${
                      item.color
                    }-500/5 border border-${item.color}-500/20 hover:border-${
                      item.color
                    }-500/40 transition-all duration-300 hover:scale-105 fade-in stagger-${
                      index + 2
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${item.color}-500/20 flex items-center justify-center mr-4`}
                      >
                        <IconComponent
                          className={`w-6 h-6 text-${item.color}-400`}
                        />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-${item.color}-400`}>
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 fade-in stagger-5">
              <p className="text-gray-400 mb-4">
                {currentLang === "de"
                  ? "Oder folge mir hier:"
                  : "Or follow me here:"}
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    name: "GitHub",
                    icon: Github,
                    href: "https://github.com/moe2008",
                  },
                  { name: "LinkedIn", icon: Linkedin, href: "#" },
                  {
                    name: "Twitter",
                    icon: Twitter,
                    href: "https://x.com/mooodykrs",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;

                  return (
                    <a
                      key={index}
                      target="_blank"
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-700 hover:border-emerald-400 transition-all duration-200 hover:scale-110"
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
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-30"></div>

            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <form
                className="space-y-6 fade-in stagger-6"
                onSubmit={sendEmail}
              >
                {/* Honeypot Field - versteckt für Bots */}
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      {currentLang === "de" ? "Name" : "Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500"
                      placeholder={
                        currentLang === "de" ? "Max Mustermann" : "John Doe"
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500"
                      placeholder="max@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    {currentLang === "de" ? "Projektziel" : "Project Goal"}
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500 resize-none"
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
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-gray-500"
                  >
                    <option value="">
                      {currentLang === "de" ? "Budget wählen" : "Select budget"}
                    </option>
                    <option value="2500-5000">€2.500 - €5.000</option>
                    <option value="5000-10000">€5.000 - €10.000</option>
                    <option value="10000+">€10.000+</option>
                  </select>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LegDt8rAAAAANygJaoQPsi3YikZuacN_feV4a6n"
                    onChange={(value) => setCaptchaValue(value)}
                    onExpired={() => setCaptchaValue(null)}
                    theme="dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-gray-900 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/25 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
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
                          className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200"
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

                <p className="text-center text-sm text-gray-400 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2 text-emerald-400"
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
            className={`max-w-2xl mx-auto mt-8 p-4 rounded-lg border ${
              error
                ? "bg-red-500/10 border-red-500/30 text-red-300"
                : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
            }`}
          >
            <div className="flex items-center">
              {error ? (
                <svg
                  className="w-5 h-5 mr-2 flex-shrink-0"
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
                  className="w-5 h-5 mr-2 flex-shrink-0"
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
              <p className="text-sm font-medium">{sendMessage}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
