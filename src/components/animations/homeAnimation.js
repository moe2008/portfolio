import gsap from "gsap";

export const homeAnimation = () => {
  const tl = gsap.timeline();
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const targetText = "modev";
  const element = document.getElementById("text");

  let randomChars = Array(targetText.length).fill("");

  let lastUpdateTimes = Array(targetText.length).fill(0);

  const scrambleInterval = 0.1;

  tl.fromTo(
    "#preloaderContainer",
    { x: -1060 },
    {
      x: 0,
      onComplete: () => {
        gsap.to("#LogoSVG3", {
          transformOrigin: "center center",
          rotate: 360,
          duration: 0.1,
          stagger: 0.2,
          repeat: 1,
          onComplete: () => {
            gsap.to("#LogoSVG", {
              scale: 0.2,
              position: "relative",
              top: "-42%",
              left: "0%",
              duration: 1,
              onComplete: () => {
                document.querySelector("#preloaderContainer").style.display =
                  "none";

                gsap.fromTo(
                  "#navbar",
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
                );
                gsap.fromTo(
                  "#header",
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
                );
              },
            });
          },
        });
      },
    }
  ).to(
    { scrambleProgress: 0 },
    {
      scrambleProgress: 1,
      duration: 2.5,
      delay: 3,
      ease: "none",
      onUpdate: function () {
        const progress = this.targets()[0].scrambleProgress;
        const currentTime = this.time();
        const output = targetText
          .split("")
          .map((char, i) => {
            if (i < Math.floor(targetText.length * progress)) {
              return targetText[i];
            } else {
              if (currentTime - lastUpdateTimes[i] >= scrambleInterval) {
                randomChars[i] =
                  letters[Math.floor(Math.random() * letters.length)];
                lastUpdateTimes[i] = currentTime;
              }
              return randomChars[i];
            }
          })
          .join("");
        element.textContent = output;
      },
      onComplete: function () {
        element.textContent = targetText;
      },
    }
  );
};
