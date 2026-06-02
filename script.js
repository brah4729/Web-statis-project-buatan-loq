const toggle = document.getElementById("darkmode");
const htmlElement = document.documentElement;

// 1. Cek apakah ada preferensi tema yang tersimpan di localStorage
const currentTheme = localStorage.getItem("theme");

// 2. Jika ada, terapkan tema tersebut
if (currentTheme === "dark") {
  htmlElement.classList.add("darkmode");
  // Pastikan tombol toggle juga dalam keadaan aktif (checked)
  if (toggle) toggle.checked = true;
}

// 3. Tambahkan event listener ke tombol toggle (jika elemennya ada di halaman)
if (toggle) {
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      htmlElement.classList.add("darkmode");
      // Simpan preferensi "dark" ke localStorage
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("darkmode");
      // Simpan preferensi "light" ke localStorage
      localStorage.setItem("theme", "light");
    }
  });
}