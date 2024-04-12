const container = document.querySelector(".container"),
  heart = document.querySelector(".heart");

let timeoutId;

container.addEventListener("dblclick", (e) => {
  let xValue = e.clientX - e.target.offsetLeft,
    yValue = e.clientY - e.target.offsetTop;

  heart.style.left = `${xValue}px`;
  heart.style.top = `${yValue}px`;

  clearTimeout(timeoutId);

  heart.classList.add("active");

  timeoutId = setTimeout(() => {
    heart.classList.remove("active");
  }, 1000);
});
