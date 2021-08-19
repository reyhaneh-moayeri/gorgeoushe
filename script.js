const textwrap = document.querySelector(".ml12");
textwrap.innerHTML = textwrap.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
console.log(textwrap);

anime.timeline().add({
  targets: ".ml12 .letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 2000 + 60 * i,
});
