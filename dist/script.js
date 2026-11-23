document.getElementById("year").textContent = new Date().getFullYear();

for (const link of document.querySelectorAll('a[href^="http"]')) {
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}
