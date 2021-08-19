const textwrap = document.querySelector(".ml12");
textwrap.innerHTML = textwrap.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
console.log(textwrap);

const textanim = anime.timeline().add({
  targets: ".ml12 .letter",
  translateY: [90, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 2000 + 60 * i,
});

TweenMax.from(".left", 3, {
  left: "-50%",
  ease: Expo.easeInOut,
  delay: 3.4,
});

TweenMax.from(".header h1", 3, {
  left: "-140%",
  ease: Expo.easeInOut,
  delay: 3.4,
});

TweenMax.staggerFrom(
  ".images > div",
  1,
  {
    y: 100,
    opacity: 0,
    ease: Power2.easeOut,
    delay: 6,
  },
  0.5
);

TweenMax.staggerFrom(
  ".header p",
  1,
  {
    y: 60,
    opacity: 0,
    ease: Power2.easeOut,
    delay: 5.6,
  },
  0.2
);

TweenMax.staggerFrom(".link", 1, {
  opacity: 0,
  ease: SteppedEase.config(1),
  repeat: -1,
  repeatDelay: 0.2,
  delay: 7.8,
});
