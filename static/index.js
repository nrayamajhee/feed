const dates = document.querySelectorAll("time");

dates.forEach((e) => {
  e.innerText = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date(e.innerText.trim()));
});

const dayHeaders = document.querySelectorAll("section time");

dayHeaders.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.toggle("closed");
  });
});

const sources = document.querySelectorAll(".sourceUrl");

sources.forEach(
  (s) =>
    (s.innerText = new URL(s.innerText).hostname
      .replace("www.", "")
      .split(".")[0])
);

// function groupBySource(e) {
//   let el = e.target.
// }
