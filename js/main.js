/* -----------------------------------
   Sagar Hotel & Restaurant
   JavaScript Interactions
   ----------------------------------- */

// 1️⃣ Show a friendly welcome message
window.addEventListener("load", function() {
  console.log("Welcome to Sagar Hotel & Restaurant!");
  alert("Welcome to Sagar Hotel & Restaurant! Enjoy your visit 😊");
});

// 2️⃣ Smooth scroll effect for navigation links
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    // Only apply smooth scroll if the link starts with #
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      }
    }
  });
});

// 3️⃣ Create a "Back to Top" button
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.id = "backToTopBtn";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.background = "#b8860b";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.padding = "10px 15px";
backToTop.style.borderRadius = "8px";
backToTop.style.fontSize = "16px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";

// Show button when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll back to top when clicked
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
