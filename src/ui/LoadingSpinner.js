import { useState, useEffect } from "react";

export default function LoadingSpinner({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simuliere Fortschritt während der Spracherkennung
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete && onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Zufällige Schritte für natürlicheren Look
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main spinner container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-32 h-32 rounded-full border-4 border-green-500/20 border-t-green-400 animate-spin"></div>

          {/* Inner pulsing circle */}
          <div className="absolute inset-4 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20 animate-pulse flex items-center justify-center">
            {/* Progress ring */}
            <svg
              className="w-20 h-20 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-gray-700"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="text-green-400 transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
            </svg>

            {/* Center logo/text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  modev
                </div>
                <div className="text-xs text-gray-400">
                  {Math.round(progress)}%
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting dots */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              style={{
                animation: `orbit 2s linear infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* Loading text with typing effect */}
        <div className="mt-8 text-center">
          <div className="text-lg font-medium text-white mb-2">
            <span className="inline-block animate-pulse">Initializing</span>
            <span className="inline-block animate-bounce ml-1">.</span>
            <span
              className="inline-block animate-bounce ml-1"
              style={{ animationDelay: "0.1s" }}
            >
              .
            </span>
            <span
              className="inline-block animate-bounce ml-1"
              style={{ animationDelay: "0.2s" }}
            >
              .
            </span>
          </div>
          <div className="text-sm text-gray-400">
            Setting up language preferences
          </div>
        </div>

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-blue-500/10 rounded-full blur-xl animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        .animate-spin {
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
