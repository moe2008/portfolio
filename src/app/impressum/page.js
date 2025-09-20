"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DatenschutzPage() {
  const [currentLang, setCurrentLang] = useState("de");

  // Sprache initial aus localStorage lesen
  useEffect(() => {
    const saved = localStorage.getItem("language") || "de";
    setCurrentLang(saved);
  }, []);

  const toggleLang = () => {
    const next = currentLang === "de" ? "en" : "de";
    setCurrentLang(next);
    localStorage.setItem("language", next);
  };

  const t = {
    title: currentLang === "de" ? "Datenschutzerklärung" : "Privacy Policy",
    contact: currentLang === "de" ? "Kontakt" : "Contact",
    intro:
      currentLang === "de"
        ? "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website."
        : "The protection of your personal data is important to us. This privacy policy informs you about the type, scope and purpose of processing personal data on our website.",

    responsible:
      currentLang === "de" ? "Verantwortliche Stelle" : "Data Controller",
    responsibleText:
      currentLang === "de"
        ? "Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"
        : "The responsible party for data processing on this website is:",

    dataCollection:
      currentLang === "de"
        ? "Datenerfassung auf unserer Website"
        : "Data Collection on Our Website",
    cookiesTitle: currentLang === "de" ? "Cookies" : "Cookies",
    cookiesText:
      currentLang === "de"
        ? "Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für die Funktionalität der Website erforderlich sind (z.B. Spracheinstellungen). Diese Cookies werden ohne Ihre Einwilligung gesetzt, da sie für den ordnungsgemäßen Betrieb der Website unerlässlich sind."
        : "Our website uses only technically necessary cookies that are required for the functionality of the website (e.g. language settings). These cookies are set without your consent as they are essential for the proper operation of the website.",

    logFiles: currentLang === "de" ? "Server-Log-Dateien" : "Server Log Files",
    logFilesText:
      currentLang === "de"
        ? "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, IP-Adresse, Uhrzeit der Serveranfrage. Diese Daten werden nur zur Gewährleistung eines störungsfreien Betriebs der Seite verwendet."
        : "The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: browser type and version, operating system used, referrer URL, IP address, time of server request. This data is only used to ensure trouble-free operation of the site.",

    contactForm: currentLang === "de" ? "Kontaktformular" : "Contact Form",
    contactFormText:
      currentLang === "de"
        ? "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
        : "If you send us inquiries via contact form, your data from the inquiry form including the contact data you provide there will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.",

    rights: currentLang === "de" ? "Ihre Rechte" : "Your Rights",
    rightsText:
      currentLang === "de"
        ? "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten."
        : "You have the right at any time to receive free information about your stored personal data, its origin and recipients and the purpose of data processing as well as a right to correction or deletion of this data.",

    dataProtection: currentLang === "de" ? "Datensicherheit" : "Data Security",
    dataProtectionText:
      currentLang === "de"
        ? "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt."
        : "For security reasons and to protect the transmission of confidential content, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from 'http://' to 'https://'.",

    changes:
      currentLang === "de"
        ? "Änderungen der Datenschutzerklärung"
        : "Changes to Privacy Policy",
    changesText:
      currentLang === "de"
        ? "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen."
        : "We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services.",

    lastUpdated:
      currentLang === "de"
        ? "Stand: September 2024"
        : "Last updated: September 2024",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-green-900/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Back */}
            <Link
              href="/"
              className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
              aria-label={
                currentLang === "de"
                  ? "Zurück zur Startseite"
                  : "Back to homepage"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>

            {/* Center nav */}
            <nav className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-green-400 font-medium text-lg">
                {t.title}
              </span>
            </nav>

            {/* Right: Contact + Lang switch */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                {t.contact}
              </Link>
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
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {t.title}
          </h1>

          <div className="space-y-8">
            {/* Intro */}
            <section>
              <p className="text-gray-300 leading-relaxed mb-4">{t.intro}</p>
              <p className="text-sm text-gray-400">{t.lastUpdated}</p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-green-400">
                {t.responsible}
              </h2>
              <p className="text-gray-300 mb-4">{t.responsibleText}</p>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Moritz Dierker</p>
                <p>Lerchenstraße 34</p>
                <p>49577 Kettenkamp</p>
                <p>Deutschland</p>
                <p>E-Mail: moritz@modev.de</p>
              </div>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-green-400">
                {t.dataCollection}
              </h2>

              {/* Cookies */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-blue-400">
                  {t.cookiesTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">{t.cookiesText}</p>
              </div>

              {/* Log Files */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-blue-400">
                  {t.logFiles}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.logFilesText}
                </p>
              </div>

              {/* Kontaktformular */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-blue-400">
                  {t.contactForm}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.contactFormText}
                </p>
              </div>
            </section>

            {/* Rechte */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-green-400">
                {t.rights}
              </h2>
              <p className="text-gray-300 leading-relaxed">{t.rightsText}</p>
            </section>

            {/* Datensicherheit */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-green-400">
                {t.dataProtection}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t.dataProtectionText}
              </p>
            </section>

            {/* Änderungen */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-green-400">
                {t.changes}
              </h2>
              <p className="text-gray-300 leading-relaxed">{t.changesText}</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                {currentLang === "de" ? "Home" : "Home"}
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/impressum"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {currentLang === "de" ? "Impressum" : "Legal"}
              </Link>
              <Link
                href="/datenschutz"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {currentLang === "de" ? "Datenschutz" : "Privacy"}
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; 2024 modev.{" "}
              {currentLang === "de"
                ? "Alle Rechte vorbehalten."
                : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
