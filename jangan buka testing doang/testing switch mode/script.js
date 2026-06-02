alert("Selamat datang di project web statis kelompok 7");

const toggle = document.getElementById("darkmode");
const body = document.body;

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    body.classList.add("darkmode");
  } else {
    body.classList.remove("darkmode");
  }
});
