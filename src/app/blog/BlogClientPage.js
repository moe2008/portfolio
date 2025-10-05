"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const blogPosts = [
  {
    id: 7,
    title: "Von Idee zu SaaS in 90 Tagen: Schneller zum Launch",
    titleEn: "From Idea to SaaS in 90 Days: Faster to Launch",
    excerpt:
      "Warum viele SaaS-Gründer Monate verlieren – und wie du mit klarer Architektur, Automatisierung und MVP-Fokus Zeit und Geld sparst.",
    excerptEn:
      "Why many SaaS founders lose months—and how clear architecture, automation, and MVP focus save time and money.",
    fullContent: `
      <h3>Der Weg zum Launch in 90 Tagen</h3>
      <p>Die größte Gefahr für SaaS-Gründer: zu viel bauen, zu spät launchen. Mit klarer Architektur und Automatisierung kannst du deine Idee in 90 Tagen in zahlende Kundschaft verwandeln.</p>

      <h4>Die 3 Erfolgshebel</h4>
      <ul>
        <li><strong>MVP-Fokus:</strong> Nur Kernfeatures in Version 1.</li>
        <li><strong>Automatisierung:</strong> Billing, Onboarding & Support ab Tag 1 automatisieren.</li>
        <li><strong>Iterieren statt perfektionieren:</strong> Feedback einbauen, statt warten.</li>
      </ul>

      <h4>90-Tage-Roadmap</h4>
      <ol>
        <li>Tag 1–30: Prototyp & Kernarchitektur.</li>
        <li>Tag 31–60: Billing, Auth, Onboarding automatisieren.</li>
        <li>Tag 61–90: Closed Beta → erste zahlende Kunden.</li>
      </ol>

      <p>Ergebnis: schneller Launch, validiertes Business, weniger verbranntes Kapital.</p>
      <p><a href="#contact">Jetzt Roadmap besprechen →</a></p>
    `,
    date: "2025-09-01",
    readTime: "9 min",
    category: "SaaS",
    tags: ["MVP", "Automation", "Launch", "Product Strategy"],
    image: "./4.webp",
  },
  {
    id: 8,
    title:
      "SaaS skalieren ohne Kostenexplosion: Architektur & Hosting richtig planen",
    titleEn:
      "Scaling SaaS Without Cost Explosion: Plan Architecture & Hosting Right",
    excerpt:
      "Wie du deine SaaS skalierst, ohne dass Cloud-Kosten, Bugs oder langsame Performance dich ausbremsen.",
    excerptEn:
      "How to scale SaaS without cloud costs, bugs, or slow performance killing your growth.",
    fullContent: `
      <h3>Skalierung, die bezahlbar bleibt</h3>
      <p>SaaS kann schnell teuer werden – vor allem durch falsche Architektur-Entscheidungen. Mit der richtigen Planung vermeidest du Kostenfallen und lieferst stabil.</p>

      <h4>Architektur-Strategien</h4>
      <ul>
        <li><strong>Clean Architecture:</strong> Klare Trennung von Core, API & Integrationen.</li>
        <li><strong>Edge Rendering:</strong> Performance + Kostensenkung.</li>
        <li><strong>Monitoring:</strong> Fehler früh erkennen, Ausfälle vermeiden.</li>
      </ul>

      <h4>Kostenfallen vermeiden</h4>
      <p>Unnötige DB-Queries, zu viele Microservices, keine Caches – typische Ursachen für hohe Cloud-Rechnungen.</p>

      <p><a href="#contact">Architektur-Check starten →</a></p>
    `,
    date: "2025-09-05",
    readTime: "8 min",
    category: "Architecture",
    tags: ["SaaS", "Cloud", "Scaling", "Architecture"],
    image: "./12.webp",
  },
  {
    id: 9,
    title: "SaaS-Automatisierung: Wachstum ohne zusätzliches Team",
    titleEn: "SaaS Automation: Growth Without Extra Headcount",
    excerpt:
      "Onboarding, Support, Billing – wie du deine SaaS automatisierst und so Kapazität für Wachstum statt Routine schaffst.",
    excerptEn:
      "Automate onboarding, support, and billing so you can scale your SaaS without growing your team.",
    fullContent: `
      <h3>Automation, die Umsatz freischaltet</h3>
      <p>Routineaufgaben sind Gift für Wachstum. Mit Automatisierung kannst du dich auf Features & Kunden konzentrieren.</p>

      <h4>Top-Automationen</h4>
      <ul>
        <li>User Onboarding: E-Mails, Produkttour, Trial-Reminder.</li>
        <li>Billing: Stripe Webhooks, Rechnungen & Mahnwesen.</li>
        <li>Support: Tickets automatisch priorisieren.</li>
        <li>Analytics: Events → Warehouse → wöchentliche Reports.</li>
      </ul>

      <p>Ergebnis: weniger Busywork, mehr Fokus aufs Wachstum.</p>
      <p><a href="#contact">Automatisierungs-Use-Cases durchgehen →</a></p>
    `,
    date: "2025-09-09",
    readTime: "10 min",
    category: "Automation",
    tags: ["Automation", "Zapier", "n8n", "SaaS Growth"],
    image: "./13.webp",
  },
  {
    id: 10,
    title: "Sicherheit in SaaS: Vertrauen aufbauen & Risiken minimieren",
    titleEn: "SaaS Security: Build Trust & Reduce Risks",
    excerpt:
      "Warum Security und Compliance Pflicht sind – und wie du sie pragmatisch in deine SaaS integrierst.",
    excerptEn:
      "Why security and compliance are a must—and how to pragmatically integrate them into your SaaS.",
    fullContent: `
      <h3>Sicherheit als Business-Faktor</h3>
      <p>Security ist kein Nice-to-Have. Kunden kaufen Vertrauen – und das beginnt bei sicherer Software.</p>

      <h4>Die Basics</h4>
      <ul>
        <li>DSGVO & Datenschutz von Anfang an.</li>
        <li>Sichere Auth: JWT Rotation, SSO, Auth0.</li>
        <li>Payment-Sicherheit mit Stripe.</li>
        <li>Regelmäßige Audits & Dependency-Checks.</li>
      </ul>

      <p>Ergebnis: mehr Vertrauen, weniger Risiko, höhere Conversions.</p>
      <p><a href="#contact">Security-Review anfragen →</a></p>
    `,
    date: "2025-09-12",
    readTime: "7 min",
    category: "Security",
    tags: ["SaaS", "Security", "Compliance", "Trust"],
    image: "/16.webp",
  },
  {
    id: 11,
    title: "Von Daten zu Entscheidungen: SaaS-Analytics richtig nutzen",
    titleEn: "From Data to Decisions: Using SaaS Analytics Right",
    excerpt:
      "Welche KPIs wirklich zählen – und wie du Tracking sauber aufsetzt, ohne dich in Daten zu verlieren.",
    excerptEn:
      "Which KPIs really matter—and how to set up tracking without drowning in data.",
    fullContent: `
      <h3>Daten, die dein Wachstum steuern</h3>
      <p>Viele Gründer ertrinken in Daten, aber haben keine Insights. Mit den richtigen KPIs triffst du bessere Entscheidungen.</p>

      <h4>Wichtige SaaS-KPIs</h4>
      <ul>
        <li>MRR, Churn, LTV, Activation.</li>
        <li>Cohort-Analysen für langfristige Trends.</li>
        <li>Conversion-Funnels für Onboarding & Retention.</li>
      </ul>

      <h4>Tracking-Setup</h4>
      <p>Mix aus GA4, PostHog & eigenen Events – sauber dokumentiert, testbar und skalierbar.</p>

      <p><a href="#contact">Analytics-Setup prüfen →</a></p>
    `,
    date: "2025-09-15",
    readTime: "9 min",
    category: "Analytics",
    tags: ["Analytics", "KPIs", "SaaS Growth", "Tracking"],
    image: "./8.webp",
  },
  {
    id: 12,
    title: "Internationalisierung für SaaS: Global wachsen ab Tag 1",
    titleEn: "Internationalizing SaaS: Grow Global From Day 1",
    excerpt:
      "Mehrsprachigkeit, internationale Payments und Compliance – so baust du deine SaaS global-ready auf.",
    excerptEn:
      "Multilingual, international payments, and compliance—how to make your SaaS global-ready.",
    fullContent: `
      <h3>Global denken, lokal starten</h3>
      <p>Viele SaaS starten lokal und scheitern später an Internationalisierung. Mit der richtigen Architektur sparst du dir Rewrites.</p>

      <h4>Must-Haves</h4>
      <ul>
        <li>Mehrsprachigkeit (i18n) ab MVP.</li>
        <li>Stripe für mehrere Währungen.</li>
        <li>Steuern & Compliance (VAT, OSS).</li>
        <li>Content & Support lokalisiert.</li>
      </ul>

      <p>Ergebnis: Wachstumsoptionen ab Tag 1, mehr Märkte, weniger Hürden.</p>
      <p><a href="#contact">Internationalisierungs-Check starten →</a></p>
    `,
    date: "2025-09-18",
    readTime: "11 min",
    category: "Scaling",
    tags: ["SaaS", "Internationalization", "Global Growth", "Stripe"],
    image: "./24.webp",
  },
];

export default function BlogClientPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentLang, setCurrentLang] = useState("de");
  const pathname = usePathname();

  // Sprache initial aus localStorage lesen
  useEffect(() => {
    const saved = localStorage.getItem("language") || "de";
    setCurrentLang(saved);
  }, []);

  // Smooth scroll zu Hash
  useEffect(() => {
    const smoothScrollToHash = () => {
      if (!window.location.hash) return;
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    smoothScrollToHash();
    window.addEventListener("hashchange", smoothScrollToHash);
    return () => window.removeEventListener("hashchange", smoothScrollToHash);
  }, [pathname]);

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  // Helper: lokalisierte Strings
  const t = useMemo(
    () => ({
      blogLabel: currentLang === "de" ? "Blog" : "Blog",
      contact: currentLang === "de" ? "Kontakt" : "Contact",
      heroTitle: currentLang === "de" ? "Development Blog" : "Development Blog",
      heroDesc:
        currentLang === "de"
          ? "Insights, Tutorials und Best Practices aus der Welt der modernen Web-Entwicklung. Von MERN Stack über SaaS bis hin zu Blockchain-Integration."
          : "Insights, tutorials, and best practices in modern web development—from MERN and SaaS to blockchain integrations.",
      chip1: currentLang === "de" ? "Web Development" : "Web Development",
      chip2:
        currentLang === "de" ? "SaaS & Automatisierung" : "SaaS & Automation",
      chip3: currentLang === "de" ? "Moderne Frameworks" : "Modern Frameworks",
      readMore: currentLang === "de" ? "Weiterlesen" : "Read more",
      likeShare:
        currentLang === "de"
          ? "Gefällt dir dieser Artikel? Teile ihn mit anderen Entwicklern!"
          : "Enjoyed this article? Share it with other developers!",
      close: currentLang === "de" ? "Schließen" : "Close",
      letsTalk: currentLang === "de" ? "Lass uns sprechen" : "Let's Talk",
      readyTitle:
        currentLang === "de"
          ? "Bereit für dein nächstes Projekt?"
          : "Ready for your next project?",
      readyDesc:
        currentLang === "de"
          ? "Erzähl mir von deiner Idee. Wir finden gemeinsam den besten Weg, sie umzusetzen."
          : "Tell me about your idea. Together we'll find the best way to bring it to life.",
      quickResponseTitle:
        currentLang === "de" ? "Schnelle Antwort" : "Quick Response",
      quickResponseDesc:
        currentLang === "de" ? "Antwort innerhalb 24h" : "Reply within 24h",
      freeConsultTitle:
        currentLang === "de" ? "Kostenlose Beratung" : "Free Consultation",
      freeConsultDesc:
        currentLang === "de"
          ? "30min Strategie-Call gratis"
          : "30-min strategy call free",
      quickStartTitle: currentLang === "de" ? "Schneller Start" : "Quick Start",
      quickStartDesc:
        currentLang === "de"
          ? "Projekt-Kick-off in 1 Woche"
          : "Project kick-off in 1 week",
      orFollow:
        currentLang === "de" ? "Oder folge mir hier:" : "Or follow me here:",
      name: currentLang === "de" ? "Name" : "Name",
      namePh: currentLang === "de" ? "Max Mustermann" : "John Doe",
      email: "E-Mail",
      projectGoal: currentLang === "de" ? "Projektziel" : "Project Goal",
      projectPh:
        currentLang === "de"
          ? "Beschreibe dein Projekt, deine Ziele und Herausforderungen..."
          : "Describe your project, goals and challenges...",
      budget: "Budget",
      selectBudget: currentLang === "de" ? "Budget wählen" : "Select budget",
      submitText: currentLang === "de" ? "Projekt anfragen" : "Start Project",
      replyGuaranteed:
        currentLang === "de"
          ? "Antwort garantiert innerhalb 24h"
          : "Reply guaranteed within 24h",
      navHome: currentLang === "de" ? "Home" : "Home",
      navBlog: currentLang === "de" ? "Blog" : "Blog",
      navContact: currentLang === "de" ? "Kontakt" : "Contact",
      navImpressum: currentLang === "de" ? "Impressum" : "Impressum",
      navDatenschutz: currentLang === "de" ? "Datenschutz" : "Privacy Policy",
    }),
    [currentLang]
  );

  // Language switcher
  const toggleLang = () => {
    const next = currentLang === "de" ? "en" : "de";
    setCurrentLang(next);
    localStorage.setItem("language", next);
  };

  // Datumsformat pro Sprache
  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString(currentLang === "de" ? "de-DE" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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
              <Link href="/blog" className="text-green-400 font-medium text-lg">
                {t.blogLabel}
              </Link>
            </nav>

            {/* Right: Contact + Lang switch */}
            <div className="flex items-center gap-3">
              <Link
                href="/blog#contact"
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

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
              {t.chip1}
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
              {t.chip2}
            </span>
            <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
              {t.chip3}
            </span>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const title =
                currentLang === "de" ? post.title : post.titleEn || post.title;
              const excerpt =
                currentLang === "de"
                  ? post.excerpt
                  : post.excerptEn || post.excerpt;
              return (
                <article
                  key={post.id}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="aspect-video overflow-hidden flex items-center justify-center">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={title}
                      className="w-auto h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                      {title}
                    </h2>

                    <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <time className="text-gray-400 text-sm">
                        {fmtDate(post.date)}
                      </time>
                      <button
                        onClick={() => openModal(post)}
                        className="text-green-400 hover:text-green-300 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        {t.readMore}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-title"
        >
          <div className="relative w-full max-w-4xl h-[90vh] bg-gradient-to-br from-green-900/30 via-gray-900 to-black border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/20 overflow-hidden">
            <div className="grid grid-rows-[auto,1fr,auto] h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-900/40 to-blue-900/20 border-b border-green-500/30 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/30 to-blue-500/20 text-green-300 text-sm rounded-full border border-green-500/40">
                        {selectedPost.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {selectedPost.readTime}
                      </div>
                    </div>
                    <h1
                      id="post-title"
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-2"
                    >
                      {currentLang === "de"
                        ? selectedPost.title
                        : selectedPost.titleEn || selectedPost.title}
                    </h1>
                    <time className="text-gray-400 text-sm">
                      {fmtDate(selectedPost.date)}
                    </time>
                  </div>

                  <button
                    onClick={closeModal}
                    className="ml-4 p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
                    aria-label={t.close}
                    title={t.close}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto overscroll-contain">
                <div className="p-6">
                  <div className="aspect-video overflow-hidden rounded-xl mb-6 border border-green-500/30 flex items-center justify-center">
                    <img
                      src={selectedPost.image || "/placeholder.svg"}
                      alt={
                        currentLang === "de"
                          ? selectedPost.title
                          : selectedPost.titleEn || selectedPost.title
                      }
                      className="w-auto h-full object-cover"
                    />
                  </div>

                  {!!selectedPost.tags?.length && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/10 text-green-300 text-sm rounded-full border border-green-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Hinweis: fullContent enthält DE+EN. Falls gewünscht, in Daten auftrennen. */}
                  <div
                    className="prose prose-invert prose-green max-w-none
                      prose-headings:bg-gradient-to-r prose-headings:from-green-400 prose-headings:to-blue-400
                      prose-headings:bg-clip-text prose-headings:text-transparent
                      prose-a:text-green-400
                      prose-code:text-green-300 prose-code:bg-gray-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                      prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-green-500/30"
                    dangerouslySetInnerHTML={{
                      __html: selectedPost.fullContent,
                    }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-green-900/40 to-blue-900/20 border-t border-green-500/30 p-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between">
                  <div className="text-sm text-gray-400">{t.likeShare}</div>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-green-500/25"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactSection currentLang={currentLang} />

      <FooterSection currentLang={currentLang} />
    </div>
  );
}
