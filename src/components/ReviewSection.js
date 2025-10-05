import React from "react";

const ReviewSection = ({ currentLang }) => {
  const reviews = [
    {
      text:
        currentLang === "de"
          ? "Transparente Kommunikation, belastbare Roadmap und technisch exzellente Umsetzung. Unser SaaS läuft seit 18 Monaten stabil in Production."
          : "Transparent communication, reliable roadmap and technically excellent implementation. Our SaaS has been running stably in production for 18 months.",
      author: "Sarah M.",
      company: "Tech Startup",
      avatar: "👩‍💻",
      rating: 5,
    },
    {
      text:
        currentLang === "de"
          ? "Die Automatisierungen haben unsere Backoffice-Prozesse um 70% beschleunigt. ROI war bereits nach 3 Monaten erreicht."
          : "The automations accelerated our back office processes by 70%. ROI was achieved after just 3 months.",
      author: "Michael K.",
      company: "E-Commerce",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      text:
        currentLang === "de"
          ? "Perfekte Balance zwischen schneller Lieferung und sauberer Architektur. Genau das, was wir für unser Scale-up brauchten."
          : "Perfect balance between fast delivery and clean architecture. Exactly what we needed for our scale-up.",
      author: "Lisa R.",
      company: "Fintech",
      avatar: "👩‍🚀",
      rating: 5,
    },
    {
      text:
        currentLang === "de"
          ? "Code-Quality top, Deadlines eingehalten, Support auch nach Launch. Definitiv wieder!"
          : "Top code quality, deadlines met, support even after launch. Definitely again!",
      author: "Alex T.",
      company: "Healthcare",
      avatar: "👨‍⚕️",
      rating: 5,
    },
  ];
  return (
    <section>
      {/* Testimonials */}
      <div className="space-y-8 fade-in stagger-3 border-t border-gray-700 pt-16">
        <h3 className="md:text-5xl text-3xl font-bold text-center mb-12">
          {currentLang === "de" ? "Was Kunden sagen" : "What Clients Say"}
        </h3>

        {/* Slider Container */}
        <div className="relative overflow-hidden md:min-w-3xl max-w-5xl mx-auto">
          <div
            className="testimonial-slider md:min-w-3xl max-w-5xl"
            data-current-index="0"
          >
            {reviews.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card  transition-opacity duration-500 ${
                  index === 0 ? "block" : "hidden"
                }`}
              >
                <div className="md:min-w-4xl max-w-5xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl max-w-2xl mx-auto">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-200 text-lg leading-relaxed mb-8 text-center italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div className="text-center">
                      <div className="font-semibold text-emerald-400 text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            className="nav-btn prev-btn p-3 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-emerald-400 transition-all duration-200"
            onClick={() => {
              const slider = document.querySelector(".testimonial-slider");
              const cards = document.querySelectorAll(".testimonial-card");
              const currentIndex = parseInt(slider.dataset.currentIndex || "0");
              const newIndex =
                currentIndex > 0 ? currentIndex - 1 : cards.length - 1;

              // Hide all cards
              cards.forEach((card) => card.classList.add("hidden"));
              // Show new card
              cards[newIndex].classList.remove("hidden");

              slider.dataset.currentIndex = newIndex;

              // Update dots
              document.querySelectorAll(".dot").forEach((dot, i) => {
                dot.classList.toggle("bg-emerald-400", i === newIndex);
                dot.classList.toggle("bg-gray-600", i !== newIndex);
              });
            }}
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`dot w-3 h-3 rounded-full transition-all duration-200 ${
                  index === 0
                    ? "bg-emerald-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => {
                  const slider = document.querySelector(".testimonial-slider");
                  const cards = document.querySelectorAll(".testimonial-card");

                  // Hide all cards
                  cards.forEach((card) => card.classList.add("hidden"));
                  // Show selected card
                  cards[index].classList.remove("hidden");

                  slider.dataset.currentIndex = index;

                  // Update dots
                  document.querySelectorAll(".dot").forEach((dot, i) => {
                    dot.classList.toggle("bg-emerald-400", i === index);
                    dot.classList.toggle("bg-gray-600", i !== index);
                  });
                }}
              />
            ))}
          </div>

          <button
            className="nav-btn next-btn p-3 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-emerald-400 transition-all duration-200"
            onClick={() => {
              const slider = document.querySelector(".testimonial-slider");
              const cards = document.querySelectorAll(".testimonial-card");
              const currentIndex = parseInt(slider.dataset.currentIndex || "0");
              const newIndex =
                currentIndex < cards.length - 1 ? currentIndex + 1 : 0;

              // Hide all cards
              cards.forEach((card) => card.classList.add("hidden"));
              // Show new card
              cards[newIndex].classList.remove("hidden");

              slider.dataset.currentIndex = newIndex;

              // Update dots
              document.querySelectorAll(".dot").forEach((dot, i) => {
                dot.classList.toggle("bg-emerald-400", i === newIndex);
                dot.classList.toggle("bg-gray-600", i !== newIndex);
              });
            }}
          >
            <svg
              className="w-5 h-5 text-gray-300"
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
      (function() {
        let autoplayInterval;
        
        function startAutoplay() {
          autoplayInterval = setInterval(() => {
            const nextBtn = document.querySelector('.next-btn');
            if (nextBtn) nextBtn.click();
          }, 5000);
        }
        
        function stopAutoplay() {
          clearInterval(autoplayInterval);
        }
        
        // Start autoplay after page load
        setTimeout(() => {
          startAutoplay();
          
          // Pause on hover
          const slider = document.querySelector('.testimonial-slider');
          if (slider) {
            slider.addEventListener('mouseenter', stopAutoplay);
            slider.addEventListener('mouseleave', startAutoplay);
          }
        }, 2000);
      })();
    `,
        }}
      />
    </section>
  );
};

export default ReviewSection;
