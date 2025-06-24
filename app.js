// ✅ Tambah data 44 anggota Karang Taruna saat pertama kali dijalankan
if (!localStorage.getItem("anggota-karang")) {
  const dataAwal = [
    { nama: "Rosi", kas: "belum", tabungan: 0 },
    { nama: "Bahrul", kas: "belum", tabungan: 0 },
    { nama: "Dahrul", kas: "belum", tabungan: 0 },
    { nama: "Ihya", kas: "belum", tabungan: 0 },
    { nama: "Rahmat", kas: "belum", tabungan: 0 },
    { nama: "Ratna", kas: "belum", tabungan: 0 },
    { nama: "Yongki", kas: "belum", tabungan: 0 },
    { nama: "Aji", kas: "belum", tabungan: 0 },
    { nama: "Viana", kas: "belum", tabungan: 0 },
    { nama: "Irwan", kas: "belum", tabungan: 0 },
    { nama: "Gibran", kas: "belum", tabungan: 0 },
    { nama: "Ponisih", kas: "belum", tabungan: 0 },
    { nama: "Kheisa", kas: "belum", tabungan: 0 },
    { nama: "Reyhan", kas: "belum", tabungan: 0 },
    { nama: "Diky", kas: "belum", tabungan: 0 },
    { nama: "Cinta", kas: "belum", tabungan: 0 },
    { nama: "Linda", kas: "belum", tabungan: 0 },
    { nama: "Dewi", kas: "belum", tabungan: 0 },
    { nama: "Nesya", kas: "belum", tabungan: 0 },
    { nama: "Shinta", kas: "belum", tabungan: 0 },
    { nama: "Ahmed", kas: "belum", tabungan: 0 },
    { nama: "Pita", kas: "belum", tabungan: 0 },
    { nama: "Apri", kas: "belum", tabungan: 0 },
    { nama: "Adhin", kas: "belum", tabungan: 0 },
    { nama: "Andika", kas: "belum", tabungan: 0 },
    { nama: "Novia", kas: "belum", tabungan: 0 },
    { nama: "Akbar", kas: "belum", tabungan: 0 },
    { nama: "Bima", kas: "belum", tabungan: 0 },
    { nama: "Lita", kas: "belum", tabungan: 0 },
    { nama: "Afifah", kas: "belum", tabungan: 0 },
    { nama: "Nabila", kas: "belum", tabungan: 0 },
    { nama: "Tyas", kas: "belum", tabungan: 0 },
    { nama: "Shintya", kas: "belum", tabungan: 0 },
    { nama: "Ferlita", kas: "belum", tabungan: 0 },
    { nama: "Hayu", kas: "belum", tabungan: 0 },
    { nama: "Apin", kas: "belum", tabungan: 0 },
    { nama: "Firman", kas: "belum", tabungan: 0 },
    { nama: "Hery", kas: "belum", tabungan: 0 },
    { nama: "Ilham", kas: "belum", tabungan: 0 },
    { nama: "Syifa", kas: "belum", tabungan: 0 },
    { nama: "Miranda", kas: "belum", tabungan: 0 },
    { nama: "Falya", kas: "belum", tabungan: 0 },
    { nama: "Lisa", kas: "belum", tabungan: 0 },
    { nama: "Kiki", kas: "belum", tabungan: 0 },
    { nama: "Aul", kas: "belum", tabungan: 0 },
    { nama: "Sakti", kas: "belum", tabungan: 0 },
    { nama: "Angga", kas: "belum", tabungan: 0 },
    { nama: "Yuda", kas: "belum", tabungan: 0 },
    { nama: "Nashwa", kas: "belum", tabungan: 0 },
    { nama: "Eko", kas: "belum", tabungan: 0 },
    { nama: "Andri", kas: "belum", tabungan: 0 },
    { nama: "Joko", kas: "belum", tabungan: 0 },
    { nama: "Agus Rembo", kas: "belum", tabungan: 0 },
    { nama: "Riyan", kas: "belum", tabungan: 0 },
    { nama: "Amalia", kas: "belum", tabungan: 0 },
    { nama: "Meysa", kas: "belum", tabungan: 0 },
    { nama: "Putri", kas: "belum", tabungan: 0 },
    { nama: "Nadia", kas: "belum", tabungan: 0 }
  ];
  localStorage.setItem("anggota-karang", JSON.stringify(dataAwal));
}

// ✅ Ambil dari localStorage atau mulai dengan array kosong
let anggota = JSON.parse(localStorage.getItem("anggota-karang")) || [];

const anggotaList = document.getElementById("anggota-list");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filterStatus");
const formTambah = document.getElementById("formTambah");

// ✅ Simpan data ke localStorage
function simpanData() {
  localStorage.setItem("anggota-karang", JSON.stringify(anggota));
}

// ✅ Tampilkan daftar anggota
function renderList() {
  const keyword = searchInput.value.toLowerCase();
  const filter = filterSelect.value;
  anggotaList.innerHTML = "";

  anggota
    .filter(a =>
      a.nama.toLowerCase().includes(keyword) &&
      (filter === "" || a.kas === filter)
    )
    .forEach((a, index) => {
      const div = document.createElement("div");
      div.className = "card";

      const kasLabel = a.kas === "sudah" ? "✅ sudah" : "❌ belum";
      const kasColor = a.kas === "sudah" ? "green" : "red";

      div.innerHTML = `
        <strong>${a.nama}</strong><br>
        Kas: <button data-index="${index}" class="toggle-kas" style="color:${kasColor}; background:none; border:none;">${kasLabel}</button><br>
        Tabungan: Rp <input type="number" class="input-tabungan" data-index="${index}" value="${a.tabungan}" style="width:100px;">
        <br><button class="hapus" data-index="${index}" style="margin-top:5px; background:red; color:white;">🗑 Hapus</button>
      `;
      anggotaList.appendChild(div);
    });

  document.querySelectorAll(".toggle-kas").forEach(btn => {
    btn.onclick = () => {
      const i = btn.dataset.index;
      anggota[i].kas = anggota[i].kas === "sudah" ? "belum" : "sudah";
      simpanData();
      renderList();
    };
  });

  document.querySelectorAll(".input-tabungan").forEach(input => {
    input.onchange = () => {
      const i = input.dataset.index;
      anggota[i].tabungan = parseInt(input.value) || 0;
      simpanData();
    };
  });

  document.querySelectorAll(".hapus").forEach(btn => {
    btn.onclick = () => {
      const i = btn.dataset.index;
      if (confirm(`Hapus ${anggota[i].nama}?`)) {
        anggota.splice(i, 1);
        simpanData();
        renderList();
      }
    };
  });
}

// ➕ Tambah anggota baru
formTambah.onsubmit = (e) => {
  e.preventDefault();
  const nama = document.getElementById("namaBaru").value.trim();
  const tabungan = parseInt(document.getElementById("tabunganBaru").value) || 0;
  const kas = document.getElementById("kasBaru").value;
  if (!nama) return;
  anggota.push({ nama, kas, tabungan });
  simpanData();
  formTambah.reset();
  renderList();
};

searchInput.oninput = renderList;
filterSelect.onchange = renderList;
renderList();

// ✅ PWA - tombol install
let deferredPrompt;
const installBtn = document.getElementById("installButton");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === "accepted") installBtn.style.display = "none";
  deferredPrompt = null;
});

// ✅ Daftarkan Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service Worker registered');
  });
}

// ✅ Toggle Dark/Light Mode — AMAN
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleMode");
  const savedMode = localStorage.getItem("mode");

  if (savedMode === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  toggleBtn.onclick = () => {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("mode", mode);
    toggleBtn.textContent = mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  };
});
