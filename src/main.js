import './style.css'

// Data Master: Dummy Database Properti (Dibuat oleh Anggota 2)
const propertiesData = [
    { id: 1, foto: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", nama: "Mansion Indah Kemang", tipe: "Rumah", lokasi: "Jakarta Selatan", harga: 5500000000, kamar: 5, status: "Dijual" },
    { id: 2, foto: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", nama: "Apartemen Sudirman Suites", tipe: "Apartemen", lokasi: "Jakarta Pusat", harga: 150000000, kamar: 2, status: "Disewakan" },
    { id: 3, foto: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", nama: "Cluster Asri BSD", tipe: "Rumah", lokasi: "Tangerang Selatan", harga: 2500000000, kamar: 3, status: "Dijual" },
    { id: 4, foto: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=500&auto=format&fit=crop&q=60", nama: "Loft Studio Senopati", tipe: "Apartemen", lokasi: "Jakarta Selatan", harga: 120000000, kamar: 1, status: "Disewakan" },
    { id: 5, foto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", nama: "Minimalist House Depok", tipe: "Rumah", lokasi: "Depok", harga: 850000000, kamar: 2, status: "Dijual" },
    { id: 6, foto: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", nama: "Villa Tropis Canggu", tipe: "Rumah", lokasi: "Bali", harga: 350000000, kamar: 4, status: "Disewakan" },
    { id: 7, foto: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", nama: "Green Pramuka City", tipe: "Apartemen", lokasi: "Jakarta Pusat", harga: 750000000, kamar: 2, status: "Dijual" },
    { id: 8, foto: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80", nama: "Townhouse Cibubur", tipe: "Rumah", lokasi: "Jakarta Timur", harga: 65000000, kamar: 3, status: "Disewakan" },
    { id: 9, foto: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80", nama: "Penthouse Thamrin", tipe: "Apartemen", lokasi: "Jakarta Pusat", harga: 12000000000, kamar: 4, status: "Dijual" },
    { id: 10, foto: "https://asset.kompas.com/crops/huc9vg18DTqzFcuHSy4Xc4njOHA=/0x0:1040x520/1200x800/data/photo/2019/10/08/5d9c4dbb07e7d.jpg", nama: "Rumah Klasik Menteng", tipe: "Rumah", lokasi: "Jakarta Pusat", harga: 45000000000, kamar: 6, status: "Dijual" },
    { id: 11, foto: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80", nama: "Apartemen Margonda", tipe: "Apartemen", lokasi: "Depok", harga: 45000000, kamar: 1, status: "Disewakan" },
    { id: 12, foto: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", nama: "Kavling Modern Bekasi", tipe: "Rumah", lokasi: "Bekasi", harga: 1200000000, kamar: 3, status: "Dijual" }
];

// Fungsi untuk memformat angka menjadi format Rupiah
const formatRupiah = (angka) => {
  if (angka >= 1_000_000_000) {
    return "Rp " + (angka / 1_000_000_000).toLocaleString("id-ID", { maximumFractionDigits: 2 }) + " M";
  }
  if (angka >= 1_000_000) {
    return "Rp " + (angka / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 }) + " Jt";
  }
  return "Rp " + angka.toLocaleString("id-ID");
};
 // Fungsi untuk membuat elemen kartu properti
const createPropertyCard = (p) => {
  const isDijual = p.status === "Dijual";
  const badgeColor = isDijual ? "bg-emerald-600" : "bg-sky-600";
  const priceColor = isDijual ? "text-emerald-700" : "text-sky-700";
  const btnColor = isDijual
    ? "bg-emerald-600 hover:bg-emerald-700"
    : "bg-sky-600 hover:bg-sky-700";
  const periode = isDijual ? "" : `<span class="text-sm font-normal text-gray-500"> / tahun</span>`;

  return `
    <article
      class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
      data-id="${p.id}"
    >
      <div class="relative overflow-hidden">
        <img
          src="${p.foto}"
          alt="${p.nama}"
          class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span class="absolute top-3 left-3 ${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full">
          ${p.status}
        </span>
        <span class="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
          ${p.tipe}
        </span>
      </div>

      <div class="p-5 flex flex-col flex-1">
        <p class="text-xl font-bold ${priceColor}">${formatRupiah(p.harga)}${periode}</p>

        <h3 class="mt-1 text-lg font-semibold text-gray-800 line-clamp-1">${p.nama}</h3>

        <p class="mt-1 flex items-center text-sm text-gray-500">
          <svg class="w-4 h-4 mr-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          ${p.lokasi}
        </p>

        <div class="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-600">
          <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18v2m18-2v2M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3" />
          </svg>
          <span class="font-semibold text-gray-800 mr-1">${p.kamar}</span> Kamar Tidur
        </div>

        <button
          class="btn-detail mt-5 w-full ${btnColor} text-white font-medium py-2.5 rounded-xl transition"
          data-id="${p.id}">
          Lihat Detail
        </button>
      </div>
    </article>
  `;
};



// Modal Detail Properti
const modal = document.getElementById('detail-modal');

function formatHarga(harga) {
  // Kalau harga di data sudah berupa string ("Rp 1,2 M"), langsung pakai saja
  return typeof harga === 'number'
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(harga)
    : harga;
}

function bukaDetail(id) {
  const p = propertiesData.find(item => item.id === Number(id));
  if (!p) return;

   const deskripsi = p.deskripsi ||
    `Properti ${p.tipe.toLowerCase()} ini berlokasi di ${p.lokasi}, memiliki ${p.kamar} kamar tidur, dan berstatus ${p.status.toLowerCase()}.`;

  document.getElementById('detail-deskripsi').textContent = deskripsi;

  document.getElementById('detail-foto').src = p.foto;
  document.getElementById('detail-foto').alt = p.nama;
  document.getElementById('detail-nama').textContent = p.nama;
  document.getElementById('detail-lokasi').textContent = '📍 ' + p.lokasi;
  document.getElementById('detail-harga').textContent = formatHarga(p.harga);
  document.getElementById('detail-tipe').textContent = p.tipe;
  document.getElementById('detail-kamar').textContent = p.kamar + ' kamar';

  const status = document.getElementById('detail-status');
  status.textContent = p.status;
  status.className = 'inline-block text-xs font-semibold px-2 py-1 rounded-full ' +
    (p.status === 'Dijual' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800');

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function tutupDetail() {
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Event delegation: satu listener untuk semua tombol, termasuk kartu yang dibuat ulang saat filter/search
document.getElementById('property-grid').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-detail');
  if (btn) bukaDetail(btn.dataset.id);
});

document.getElementById('detail-close').addEventListener('click', tutupDetail);
modal.addEventListener('click', (e) => { if (e.target === modal) tutupDetail(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') tutupDetail(); });



const renderProperties = (list) => {
  const grid = document.getElementById("property-grid");
  const empty = document.getElementById("property-empty");

  grid.innerHTML = list.map(createPropertyCard).join("");
  empty.classList.toggle("hidden", list.length > 0);
};

const searchInput  = document.getElementById("search-lokasi");
const tipeSelect   = document.getElementById("filter-tipe");
const statusSelect = document.getElementById("filter-status");
const resetBtn     = document.getElementById("filter-reset");
const filterForm   = document.getElementById("filter-form");
const resultCount  = document.getElementById("result-count");

const filterByTipe = (list, tipe) =>
  tipe ? list.filter((p) => p.tipe === tipe) : list;

const filterByStatus = (list, status) =>
  status ? list.filter((p) => p.status === status) : list;

const searchByLokasi = (list, keyword) => {
  const q = keyword.trim().toLowerCase();
  return q ? list.filter((p) => p.lokasi.toLowerCase().includes(q)) : list;
};

const applyFilters = () => {
  let hasil = propertiesData;
  hasil = filterByTipe(hasil, tipeSelect.value);
  hasil = filterByStatus(hasil, statusSelect.value);
  hasil = searchByLokasi(hasil, searchInput.value);

  renderProperties(hasil);
  resultCount.textContent = `${hasil.length} dari ${propertiesData.length} properti`;
};

searchInput.addEventListener("input", applyFilters);
tipeSelect.addEventListener("change", applyFilters);
statusSelect.addEventListener("change", applyFilters);
filterForm.addEventListener("submit", (e) => e.preventDefault()); // cegah reload saat tekan Enter

resetBtn.addEventListener("click", () => {
  filterForm.reset();
  applyFilters();
});

const installmentForm = document.getElementById("installment-form");
const installmentPrice = document.getElementById("installment-price");
const installmentMonths = document.getElementById("installment-months");
const installmentError = document.getElementById("installment-error");
const installmentResult = document.getElementById("installment-result");
const installmentAmount = document.getElementById("installment-amount");
const installmentSummary = document.getElementById("installment-summary");

const formatFullRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

installmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number(installmentPrice.value);
  const months = Number(installmentMonths.value);

  if (!Number.isFinite(price) || !Number.isFinite(months) || price <= 0 || months <= 0) {
    installmentError.textContent = "Masukkan harga properti dan jumlah bulan yang lebih dari 0.";
    installmentError.classList.remove("hidden");
    installmentResult.classList.add("hidden");
    return;
  }

  const monthlyInstallment = price / months;
  installmentError.classList.add("hidden");
  installmentAmount.textContent = formatFullRupiah(monthlyInstallment);
  installmentSummary.textContent = `${formatFullRupiah(price)} dibagi ${months.toLocaleString("id-ID")} bulan.`;
  installmentResult.classList.remove("hidden");
});

// Tampilkan semua saat halaman dimuat
applyFilters();


const form = document.getElementById("schedule-form");

// Ambil semua input
const nameInput = document.getElementById("installment-name");
const emailInput = document.getElementById("installement-email");
const phoneInput = document.getElementById("installement-no");
const dateInput = document.getElementById("schedule-date");

// Ambil tempat pesan error
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const dateError = document.getElementById("date-error");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function (event) {
  // Cegah form dikirim sebelum validasi selesai
  event.preventDefault();

  // Kosongkan pesan dari percobaan sebelumnya
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  dateError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // 1. Validasi nama
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Nama tidak boleh kosong.";
    valid = false;
  }

  // 2. Validasi email
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Email tidak boleh kosong.";
    valid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Email harus mengandung karakter @.";
    valid = false;
  }

  // 3. Validasi nomor telepon
  const phone = phoneInput.value.trim();

  if (phone === "") {
    phoneError.textContent = "Nomor telepon tidak boleh kosong.";
    valid = false;
  } else if (!/^[0-9]+$/.test(phone)) {
    phoneError.textContent =
      "Nomor telepon hanya boleh berisi angka.";
    valid = false;
  }

  // 4. Validasi tanggal kunjungan
  if (dateInput.value === "") {
    dateError.textContent = "Tanggal kunjungan wajib dipilih.";
    valid = false;
  }

  // 5. Jika semua input valid
  if (valid) {
    successMessage.textContent =
      "Form berhasil divalidasi! Terima kasih.";

    form.reset();
  }
});
