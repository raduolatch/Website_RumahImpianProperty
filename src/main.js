import './style.css'

// Data Master: Dummy Database Properti (Dibuat oleh Anggota 2)
const propertiesData = [
    { id: 1, foto: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", nama: "Mansion Indah Kemang", tipe: "Rumah", lokasi: "Jakarta Selatan", harga: 5500000000, kamar: 5, status: "Dijual" },
    { id: 2, foto: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", nama: "Apartemen Sudirman Suites", tipe: "Apartemen", lokasi: "Jakarta Pusat", harga: 150000000, kamar: 2, status: "Disewakan" },
    { id: 3, foto: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", nama: "Cluster Asri BSD", tipe: "Rumah", lokasi: "Tangerang Selatan", harga: 2500000000, kamar: 3, status: "Dijual" },
    { id: 4, foto: "https://images.unsplash.com/photo-1502672260266-1c1de2d966ce?auto=format&fit=crop&w=800&q=80", nama: "Loft Studio Senopati", tipe: "Apartemen", lokasi: "Jakarta Selatan", harga: 120000000, kamar: 1, status: "Disewakan" },
    { id: 5, foto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", nama: "Minimalist House Depok", tipe: "Rumah", lokasi: "Depok", harga: 850000000, kamar: 2, status: "Dijual" },
    { id: 6, foto: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", nama: "Villa Tropis Canggu", tipe: "Rumah", lokasi: "Bali", harga: 350000000, kamar: 4, status: "Disewakan" },
    { id: 7, foto: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", nama: "Green Pramuka City", tipe: "Apartemen", lokasi: "Jakarta Pusat", harga: 750000000, kamar: 2, status: "Dijual" },
    { id: 8, foto: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80", nama: "Townhouse Cibubur", tipe: "Rumah", lokasi: "Jakarta Timur", harga: 65000000, kamar: 3, status: "Disewakan" },
    { id: 9, foto: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80", nama: "Penthouse Thamrin", tipe: "Apartemen", lokasi: "Jakarta Pusat", harga: 12000000000, kamar: 4, status: "Dijual" },
    { id: 10, foto: "https://images.unsplash.com/photo-1600041161228-519e6dd27bac?auto=format&fit=crop&w=800&q=80", nama: "Rumah Klasik Menteng", tipe: "Rumah", lokasi: "Jakarta Pusat", harga: 45000000000, kamar: 6, status: "Dijual" },
    { id: 11, foto: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80", nama: "Apartemen Margonda", tipe: "Apartemen", lokasi: "Depok", harga: 45000000, kamar: 1, status: "Disewakan" },
    { id: 12, foto: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", nama: "Kavling Modern Bekasi", tipe: "Rumah", lokasi: "Bekasi", harga: 1200000000, kamar: 3, status: "Dijual" }
];

// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
