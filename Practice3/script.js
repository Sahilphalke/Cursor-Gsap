var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (e) => {
  console.log(e);
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
  });
});
