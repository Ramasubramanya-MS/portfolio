function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX - 0.75 * 37.8}px`; // Adjust position to center
  cursor.style.top = `${e.pageY - 0.75 * 37.8}px`; // Adjust position to center
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
  });
  img.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
});
// Function to wrap words in span
document.querySelectorAll("p, h1, h2, h3, span").forEach((element) => {
  const words = element.innerHTML.split(" "); // Split text into words
  element.innerHTML = words
    .map((word) => `<span class="hover-word">${word}</span>`)
    .join(" "); // Wrap each word in a span
});
