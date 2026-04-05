// Google Apps Script untuk Toko Benih Pertanian
// Deploy sebagai Web App dengan akses "Anyone"

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getProducts') {
    return getProducts();
  }
  
  return ContentService.createTextOutput('Invalid action');
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    if (action === 'saveOrder') {
      return saveOrder(data);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Invalid action'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Ambil data produk dari sheet "Produk"
function getProducts() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Produk');
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Sheet Produk tidak ditemukan'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const products = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const product = {};
    
    headers.forEach((header, index) => {
      product[header.toLowerCase()] = row[index];
    });
    
    products.push(product);
  }
  
  return ContentService.createTextOutput(JSON.stringify(products))
    .setMimeType(ContentService.MimeType.JSON);
}

// Simpan pesanan ke sheet "Pesanan"
function saveOrder(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Pesanan');
  
  // Buat sheet Pesanan jika belum ada
  if (!sheet) {
    sheet = ss.insertSheet('Pesanan');
    sheet.appendRow(['Tanggal', 'Waktu', 'Nama', 'No HP', 'Alamat', 'Detail Pesanan', 'Total', 'Status']);
  }
  
  const now = new Date();
  const tanggal = Utilities.formatDate(now, 'Asia/Jakarta', 'dd/MM/yyyy');
  const waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  
  // Format detail pesanan
  let detailPesanan = '';
  data.items.forEach(item => {
    detailPesanan += `${item.nama} (${item.quantity} ${item.satuan}) - Rp ${formatNumber(item.harga * item.quantity)}\n`;
  });
  
  sheet.appendRow([
    tanggal,
    waktu,
    data.nama || '-',
    data.noHp || '-',
    data.alamat || '-',
    detailPesanan,
    data.total,
    'Baru'
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Pesanan berhasil disimpan'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Helper function untuk format angka
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
