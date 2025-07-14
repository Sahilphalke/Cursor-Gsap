let initialPath = "M 10 150 Q 500 150 990 150";

const line = document.querySelector("#line");
const svgPath = document.querySelector("#line svg path");

line.addEventListener("mousemove", function (e) {
  const rect = line.getBoundingClientRect();
  const relativeY = e.clientY - rect.top;
  const relativeX = e.clientX - rect.left;

  const controlY = Math.max(50, Math.min(relativeY, 250));
  const controlX = Math.max(100, Math.min(relativeX, 900));

  const newPath = `M 10 150 Q ${controlX} ${controlY} 990 150`;

  gsap.to(svgPath, {
    attr: { d: newPath },
    duration: 0.3,
    ease: "power2.out",
  });
});

line.addEventListener("mouseleave", function () {
  gsap.to(svgPath, {
    attr: { d: initialPath },
    duration: 2,
    ease: "elastic.out(2,0.1)",
  });
});
