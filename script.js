// ===== Part 1: Console log for JS check =====
console.log("JavaScript is running!");

// ===== Part 2: Change header color on click =====
const header = document.querySelector("header");
header.addEventListener("click", () => {
  header.style.backgroundColor = header.style.backgroundColor === "lightblue" ? "#ffcc66" : "lightblue";
});

// ===== Part 3: Toggle form visibility =====
const formSection = document.querySelector("form");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Show/Hide Enrollment Form";
toggleBtn.style.display = "block";
toggleBtn.style.margin = "20px auto";
toggleBtn.style.padding = "10px";
toggleBtn.style.backgroundColor = "#cc6600";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.cursor = "pointer";

formSection.parentNode.insertBefore(toggleBtn, formSection);

toggleBtn.addEventListener("click", () => {
  if (formSection.style.display === "none") {
    formSection.style.display = "block";
  } else {
    formSection.style.display = "none";
  }
});

// ===== Part 4: Highlight table rows on hover =====
const tableRows = document.querySelectorAll("table tr:not(:first-child)");
tableRows.forEach(row => {
  row.addEventListener("mouseenter", () => row.style.backgroundColor = "#ffe0b3");
  row.addEventListener("mouseleave", () => row.style.backgroundColor = "#fff2e6");
});

