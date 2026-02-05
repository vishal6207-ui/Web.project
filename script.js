document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;

  document.querySelector(".hero").style.transform =
    `translate(${x}px, ${y}px)`;
});