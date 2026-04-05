# Website Toko Benih Pertanian

Website e-commerce sederhana untuk menjual benih pertanian dengan data yang tersimpan di Google Spreadsheet.

## Fitur

- 🌱 Tampilan katalog produk yang menarik
- 🔍 Pencarian dan filter berdasarkan kategori
- 🛒 Keranjang belanja dengan local storage
- 📝 Form data pelanggan (nama, HP, alamat)
- 📊 Pesanan otomatis tersimpan di Google Spreadsheet
- 💬 Checkout via WhatsApp
- 📱 Responsive design (mobile-friendly)
- 🔄 Refresh data real-time dari Google Spreadsheet

## Setup Google Spreadsheet

### 1. Buat Spreadsheet

Buat Google Spreadsheet dengan kolom berikut:

| nama | kategori | harga | deskripsi | stok | satuan |
|------|----------|-------|-----------|------|--------|
| Benih Padi Hibrida | Padi | 50000 | Benih padi unggul tahan hama | 100 | kg |
| Benih Jagung Manis | Jagung | 35000 | Jagung manis berkualitas | 50 | kg |
| Benih Cabai Rawit | Cabai | 75000 | Cabai rawit super pedas | 30 | pack |

### 2. Publish Spreadsheet sebagai CSV

1. Buka Google Spreadsheet Anda
2. Klik **File** → **Share** → **Publish to web**
3. Pilih sheet yang ingin dipublish
4. Pilih format **Comma-separated values (.csv)**
5. Klik **Publish**
6. Copy URL yang diberikan

### 3. Konfigurasi Website

Edit file `script.js` dan ganti konfigurasi berikut:

```javascript
const CONFIG = {
    // Paste URL CSV dari langkah 2
    spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1FdAUtyA4Dh-y-ohJ7Re-v0To_bmjI52REahTJIwRdtY/edit?usp=sharing',
    
    // Nomor WhatsApp untuk menerima pesanan (format: 628123456789)
    whatsappNumber: '6282231017559'
};
```

## Cara Menjalankan

### Opsi 1: Buka Langsung di Browser
1. Double-click file `index.html`
2. Website akan terbuka di browser

### Opsi 2: Menggunakan Live Server (Recommended)
1. Install extension Live Server di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

### Opsi 3: Menggunakan Python Server
```bash
# Python 3
python -m http.server 8000

# Buka browser ke http://localhost:8000
```

## Format Data Spreadsheet

### Kolom Wajib:
- **nama**: Nama produk (wajib)
- **harga**: Harga dalam rupiah (wajib, angka saja)

### Kolom Opsional:
- **kategori**: Kategori produk (contoh: Padi, Jagung, Cabai)
- **deskripsi**: Deskripsi singkat produk
- **stok**: Jumlah stok tersedia
- **satuan**: Satuan produk (kg, pack, bungkus, dll)

### Contoh Data:

```
nama,kategori,harga,deskripsi,stok,satuan
Benih Padi IR64,Padi,45000,Benih padi IR64 kualitas premium,200,kg
Benih Jagung Pioneer,Jagung,85000,Jagung hibrida hasil tinggi,75,kg
Benih Cabai Keriting,Cabai,65000,Cabai keriting tahan penyakit,40,pack
Benih Tomat Cherry,Sayuran,55000,Tomat cherry manis,60,pack
Benih Sawi Hijau,Sayuran,25000,Sawi hijau cepat panen,150,pack
```

## Customisasi

### Mengubah Warna Tema
Edit di `index.html`, ganti class Tailwind:
- `bg-green-600` → warna lain (blue, red, purple, dll)
- `text-green-600` → sesuaikan dengan warna tema

### Menambah Informasi Kontak
Edit bagian footer di `index.html`

### Mengubah Icon
Website menggunakan Font Awesome. Ganti class icon sesuai kebutuhan:
- `fa-seedling` → icon lainnya dari Font Awesome

## Troubleshooting

### Data tidak muncul?
1. Pastikan spreadsheet sudah dipublish sebagai CSV
2. Cek URL di `CONFIG.spreadsheetUrl` sudah benar
3. Buka Console browser (F12) untuk melihat error
4. Pastikan spreadsheet bisa diakses publik

### Checkout WhatsApp tidak berfungsi?
1. Pastikan nomor WhatsApp di `CONFIG.whatsappNumber` benar
2. Format nomor: 628123456789 (tanpa +, -, atau spasi)

## Teknologi yang Digunakan

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome Icons
- Google Spreadsheet sebagai database

## Lisensi

Free to use untuk keperluan pribadi dan komersial.
