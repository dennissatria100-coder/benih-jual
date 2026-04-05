# Panduan Setup Website Toko Benih Pertanian

## Fitur Lengkap

✅ Katalog produk dengan 35 jenis benih
✅ Pencarian dan filter kategori
✅ Keranjang belanja
✅ Form data pelanggan (Nama, HP, Alamat)
✅ **Pesanan otomatis tersimpan di Google Spreadsheet**
✅ Checkout via WhatsApp
✅ Responsive mobile-friendly

---

## Setup Google Spreadsheet untuk Menyimpan Pesanan

### Langkah 1: Buat Google Spreadsheet

1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru
3. Buat 2 sheet:

**Sheet 1: "Produk"** (opsional, untuk load data produk dari spreadsheet)

| nama | kategori | harga | deskripsi | stok | satuan |
|------|----------|-------|-----------|------|--------|
| Benih Padi IR64 | Padi | 45000 | Benih padi IR64 kualitas premium | 200 | kg |
| Benih Jagung Pioneer | Jagung | 85000 | Jagung hibrida hasil tinggi | 75 | kg |

**Sheet 2: "Pesanan"** (akan otomatis terisi saat ada pesanan)

Biarkan kosong, akan otomatis dibuat header saat pesanan pertama masuk.

---

### Langkah 2: Buat Google Apps Script

1. Di Google Spreadsheet, klik menu **Extensions** → **Apps Script**
2. Hapus kode default yang ada
3. Copy paste kode dari file `google-apps-script.js` ke editor
4. Klik **Save** (icon disket) atau Ctrl+S
5. Beri nama project: "Toko Benih API"

---

### Langkah 3: Deploy sebagai Web App

1. Klik tombol **Deploy** (pojok kanan atas) → **New deployment**
2. Klik icon ⚙️ (gear) di samping "Select type"
3. Pilih **Web app**
4. Isi form deployment:
   - **Description**: Toko Benih API v1
   - **Execute as**: Me (email Anda)
   - **Who has access**: **Anyone** ← PENTING!
5. Klik **Deploy**
6. Akan muncul dialog "Authorize access":
   - Klik **Review Permissions**
   - Pilih akun Google Anda
   - Klik **Advanced** → **Go to [Project Name] (unsafe)**
   - Klik **Allow**
7. **Copy Web app URL** yang diberikan
   - Format: `https://script.google.com/macros/s/AKfycby.../exec`

---

### Langkah 4: Update Konfigurasi Website

Edit file `script.js`, cari bagian CONFIG dan update:

```javascript
const CONFIG = {
    // Ganti dengan nomor WhatsApp Anda (format: 628123456789)
    whatsappNumber: '6282231017559',
    
    // Paste Web app URL dari Langkah 3
    spreadsheetUrl: 'https://script.google.com/macros/s/AKfycby.../exec',
    
    // Set true untuk menyimpan pesanan ke spreadsheet
    saveToSpreadsheet: true
};
```

---

### Langkah 5: Test Website

1. Buka file `index.html` di browser
2. Tambahkan produk ke keranjang
3. Klik icon keranjang
4. Klik "Checkout via WhatsApp"
5. Isi form:
   - Nama Lengkap
   - No HP/WhatsApp
   - Alamat Lengkap
6. Klik "Kirim Pesanan"

**Hasil:**
- Pesanan akan tersimpan di Sheet "Pesanan" di Google Spreadsheet
- Pesanan juga dikirim ke WhatsApp Anda
- Keranjang otomatis dikosongkan

---

## Cara Kerja Sistem

### Flow Pesanan:

```
Customer mengisi form
    ↓
Data dikirim ke Google Apps Script
    ↓
Script menyimpan ke Sheet "Pesanan"
    ↓
Data juga dikirim ke WhatsApp
    ↓
Selesai!
```

### Data yang Tersimpan di Spreadsheet:

| Tanggal | Waktu | Nama | No HP | Alamat | Detail Pesanan | Total | Status |
|---------|-------|------|-------|--------|----------------|-------|--------|
| 05/03/2026 | 14:30:25 | John Doe | 08123456789 | Jl. Merdeka No. 1 | Benih Padi IR64 (2 kg)... | 90000 | Baru |

---

## Troubleshooting

### Pesanan tidak tersimpan di Spreadsheet?

1. **Cek URL Apps Script sudah benar?**
   - Pastikan URL di `CONFIG.spreadsheetUrl` sama dengan Web app URL
   - URL harus diakhiri dengan `/exec`

2. **Cek permission Apps Script**
   - Buka Apps Script → Deploy → Manage deployments
   - Pastikan "Who has access" = **Anyone**

3. **Cek Console Browser**
   - Tekan F12 di browser
   - Lihat tab Console untuk error
   - Jika ada CORS error, itu normal (mode: 'no-cors')

4. **Test Apps Script langsung**
   - Buka URL Apps Script di browser
   - Tambahkan `?action=getProducts` di akhir URL
   - Seharusnya menampilkan data JSON

### WhatsApp tidak terbuka?

1. Pastikan nomor WhatsApp di CONFIG benar
2. Format: 628123456789 (tanpa +, -, atau spasi)
3. Nomor harus aktif WhatsApp

### Data produk tidak muncul?

Website sudah include 35 produk dummy di dalam kode, jadi akan langsung jalan tanpa Google Spreadsheet.

---

## Mode Operasi

Website ini bisa berjalan dalam 2 mode:

### Mode 1: Standalone (Tanpa Google Spreadsheet)
- Data produk sudah ada di dalam kode (35 produk)
- Pesanan hanya dikirim via WhatsApp
- Tidak perlu setup Google Spreadsheet
- Set `saveToSpreadsheet: false`

### Mode 2: Full Integration (Dengan Google Spreadsheet)
- Data produk bisa diload dari Spreadsheet
- Pesanan tersimpan di Spreadsheet + WhatsApp
- Perlu setup Google Apps Script
- Set `saveToSpreadsheet: true`

---

## Update Data Produk

### Cara 1: Edit Langsung di Code

Edit array `PRODUCTS_DATA` di file `script.js`:

```javascript
const PRODUCTS_DATA = [
    { 
        nama: 'Benih Baru', 
        kategori: 'Sayuran', 
        harga: 50000, 
        deskripsi: 'Deskripsi produk', 
        stok: '100', 
        satuan: 'pack' 
    },
    // tambah produk lainnya...
];
```

### Cara 2: Update di Google Spreadsheet

1. Edit Sheet "Produk" di Google Spreadsheet
2. Klik tombol "Refresh Data" di website
3. Data akan otomatis terupdate

---

## Keamanan

- Google Apps Script berjalan dengan akses "Anyone" untuk menerima data dari website
- Data pesanan hanya bisa dilihat oleh pemilik Spreadsheet
- Tidak ada data sensitif yang disimpan di browser (kecuali keranjang belanja)
- Nomor WhatsApp customer tidak disimpan di Spreadsheet (opsional)

---

## Support

Jika ada pertanyaan atau masalah, cek:
1. Console browser (F12) untuk error
2. Execution log di Apps Script
3. Sheet "Pesanan" untuk memastikan data masuk

Selamat menggunakan! 🌱
