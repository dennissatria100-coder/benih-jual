// Data Produk (bisa langsung digunakan tanpa Google Spreadsheet)
const PRODUCTS_DATA = [
    { nama: 'Benih Padi IR64', kategori: 'Padi', harga: 45000, deskripsi: 'Benih padi IR64 kualitas premium tahan hama dan penyakit', stok: '200', satuan: 'kg' },
    { nama: 'Benih Padi Ciherang', kategori: 'Padi', harga: 48000, deskripsi: 'Padi ciherang hasil tinggi cocok untuk sawah irigasi', stok: '180', satuan: 'kg' },
    { nama: 'Benih Padi Hibrida Mapan', kategori: 'Padi', harga: 95000, deskripsi: 'Padi hibrida unggul hasil panen melimpah', stok: '120', satuan: 'kg' },
    { nama: 'Benih Jagung Pioneer 21', kategori: 'Jagung', harga: 85000, deskripsi: 'Jagung hibrida hasil tinggi tahan kering', stok: '75', satuan: 'kg' },
    { nama: 'Benih Jagung Manis Bonanza', kategori: 'Jagung', harga: 65000, deskripsi: 'Jagung manis super lezat untuk konsumsi segar', stok: '90', satuan: 'kg' },
    { nama: 'Benih Jagung Pulut', kategori: 'Jagung', harga: 55000, deskripsi: 'Jagung pulut berkualitas untuk berbagai olahan', stok: '100', satuan: 'kg' },
    { nama: 'Benih Cabai Rawit Super', kategori: 'Cabai', harga: 75000, deskripsi: 'Cabai rawit super pedas tahan hama', stok: '40', satuan: 'pack' },
    { nama: 'Benih Cabai Keriting Hijau', kategori: 'Cabai', harga: 65000, deskripsi: 'Cabai keriting produktif tahan penyakit layu', stok: '50', satuan: 'pack' },
    { nama: 'Benih Cabai Merah Besar', kategori: 'Cabai', harga: 70000, deskripsi: 'Cabai merah besar cocok untuk industri', stok: '45', satuan: 'pack' },
    { nama: 'Benih Tomat Cherry', kategori: 'Sayuran', harga: 55000, deskripsi: 'Tomat cherry manis ukuran mini', stok: '60', satuan: 'pack' },
    { nama: 'Benih Tomat Gondol', kategori: 'Sayuran', harga: 48000, deskripsi: 'Tomat gondol hasil tinggi tahan pecah', stok: '70', satuan: 'pack' },
    { nama: 'Benih Sawi Hijau', kategori: 'Sayuran', harga: 25000, deskripsi: 'Sawi hijau cepat panen 30-35 hari', stok: '150', satuan: 'pack' },
    { nama: 'Benih Kangkung Darat', kategori: 'Sayuran', harga: 22000, deskripsi: 'Kangkung darat tumbuh cepat dan subur', stok: '180', satuan: 'pack' },
    { nama: 'Benih Bayam Merah', kategori: 'Sayuran', harga: 28000, deskripsi: 'Bayam merah kaya nutrisi dan antioksidan', stok: '140', satuan: 'pack' },
    { nama: 'Benih Terong Ungu', kategori: 'Sayuran', harga: 42000, deskripsi: 'Terong ungu panjang hasil melimpah', stok: '85', satuan: 'pack' },
    { nama: 'Benih Timun Hibrida', kategori: 'Sayuran', harga: 58000, deskripsi: 'Timun hibrida renyah dan produktif', stok: '95', satuan: 'pack' },
    { nama: 'Benih Buncis Perancis', kategori: 'Sayuran', harga: 52000, deskripsi: 'Buncis perancis panjang dan lembut', stok: '75', satuan: 'pack' },
    { nama: 'Benih Kacang Panjang', kategori: 'Sayuran', harga: 38000, deskripsi: 'Kacang panjang tahan hama hasil tinggi', stok: '110', satuan: 'pack' },
    { nama: 'Benih Wortel Chantenay', kategori: 'Sayuran', harga: 62000, deskripsi: 'Wortel chantenay manis dan renyah', stok: '65', satuan: 'pack' },
    { nama: 'Benih Bawang Merah Bima', kategori: 'Bawang', harga: 125000, deskripsi: 'Bawang merah bima brebes kualitas super', stok: '50', satuan: 'kg' },
    { nama: 'Benih Bawang Putih Lumbu Hijau', kategori: 'Bawang', harga: 145000, deskripsi: 'Bawang putih lumbu hijau aroma kuat', stok: '40', satuan: 'kg' },
    { nama: 'Benih Kedelai Grobogan', kategori: 'Kacang-kacangan', harga: 35000, deskripsi: 'Kedelai grobogan hasil tinggi protein tinggi', stok: '200', satuan: 'kg' },
    { nama: 'Benih Kacang Tanah Kelinci', kategori: 'Kacang-kacangan', harga: 42000, deskripsi: 'Kacang tanah kelinci polong besar', stok: '150', satuan: 'kg' },
    { nama: 'Benih Kacang Hijau Vima', kategori: 'Kacang-kacangan', harga: 38000, deskripsi: 'Kacang hijau vima cepat panen 55 hari', stok: '180', satuan: 'kg' },
    { nama: 'Benih Melon Golden', kategori: 'Buah', harga: 95000, deskripsi: 'Melon golden manis daging tebal', stok: '35', satuan: 'pack' },
    { nama: 'Benih Semangka Kuning', kategori: 'Buah', harga: 88000, deskripsi: 'Semangka kuning tanpa biji super manis', stok: '40', satuan: 'pack' },
    { nama: 'Benih Strawberry Alpine', kategori: 'Buah', harga: 125000, deskripsi: 'Strawberry alpine tahan panas cocok tropis', stok: '25', satuan: 'pack' },
    { nama: 'Benih Paprika Merah', kategori: 'Sayuran', harga: 98000, deskripsi: 'Paprika merah manis kaya vitamin C', stok: '30', satuan: 'pack' },
    { nama: 'Benih Paprika Kuning', kategori: 'Sayuran', harga: 98000, deskripsi: 'Paprika kuning segar untuk salad', stok: '30', satuan: 'pack' },
    { nama: 'Benih Selada Keriting', kategori: 'Sayuran', harga: 45000, deskripsi: 'Selada keriting segar untuk salad', stok: '80', satuan: 'pack' },
    { nama: 'Benih Pak Choy', kategori: 'Sayuran', harga: 32000, deskripsi: 'Pak choy lembut cepat panen', stok: '120', satuan: 'pack' },
    { nama: 'Benih Brokoli Hijau', kategori: 'Sayuran', harga: 78000, deskripsi: 'Brokoli hijau kaya nutrisi dan serat', stok: '55', satuan: 'pack' },
    { nama: 'Benih Kembang Kol', kategori: 'Sayuran', harga: 72000, deskripsi: 'Kembang kol putih bersih berkualitas', stok: '60', satuan: 'pack' },
    { nama: 'Benih Labu Siam', kategori: 'Sayuran', harga: 35000, deskripsi: 'Labu siam merambat produktif tinggi', stok: '90', satuan: 'pack' },
    { nama: 'Benih Pare Hijau', kategori: 'Sayuran', harga: 42000, deskripsi: 'Pare hijau pahit khasiat tinggi', stok: '85', satuan: 'pack' }
];

// Konfigurasi
const CONFIG = {
    // Nomor WhatsApp untuk checkout (format: 628123456789)
    whatsappNumber: '6282231017559',
    
    // URL Google Apps Script Web App (untuk load produk dan simpan pesanan)
    spreadsheetUrl: 'https://script.google.com/macros/s/AKfycbyDD-vSWo74Q4-Hya7-8toIzmH8SvT2SznFZ7-IpZmmaEyQbreUWjRtTB5sHhRg6Pu9/exec',
    
    // Set true untuk menyimpan pesanan ke spreadsheet
    saveToSpreadsheet: true
};

let products = [];
let cart = [];
let categories = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
    loadCart();
});

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('refreshBtn').addEventListener('click', loadProducts);
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutForm);
    document.getElementById('closeCheckout').addEventListener('click', closeCheckoutForm);
    document.getElementById('checkoutForm').addEventListener('submit', submitOrder);
}

// Load Products
async function loadProducts() {
    const loading = document.getElementById('loading');
    const productsGrid = document.getElementById('productsGrid');

    loading.classList.remove('hidden');
    productsGrid.innerHTML = '';

    try {
        // Coba load dari Google Spreadsheet jika ada URL
        if (CONFIG.spreadsheetUrl) {
            try {
                const response = await fetch(CONFIG.spreadsheetUrl);
                const data = await response.json();
                
                if (data && Array.isArray(data) && data.length > 0) {
                    products = data;
                } else {
                    throw new Error('Data tidak valid');
                }
            } catch (error) {
                console.log('Menggunakan data lokal karena:', error.message);
                products = PRODUCTS_DATA;
            }
        } else {
            products = PRODUCTS_DATA;
        }

        // Extract categories
        categories.clear();
        products.forEach(product => {
            if (product.kategori) categories.add(product.kategori);
        });

        updateCategoryFilter();
        displayProducts(products);

    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback ke data lokal
        products = PRODUCTS_DATA;
        categories.clear();
        products.forEach(product => {
            if (product.kategori) categories.add(product.kategori);
        });
        updateCategoryFilter();
        displayProducts(products);
    } finally {
        loading.classList.add('hidden');
    }
}

// Update Category Filter
function updateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    const currentValue = categoryFilter.value;

    categoryFilter.innerHTML = '<option value="">Semua Kategori</option>';

    Array.from(categories).sort().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    categoryFilter.value = currentValue;
}

// Display Products
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '';
        noProducts.classList.remove('hidden');
        return;
    }

    noProducts.classList.add('hidden');

    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div class="h-48 overflow-hidden relative flex items-center justify-center" style="background:${getCardBg(product.kategori)}">
                ${getSeedPacketSVG(product.nama, product.kategori)}
            </div>
            <div class="p-4">
                <div class="mb-2">
                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">${product.kategori || 'Umum'}</span>
                </div>
                <h3 class="text-lg font-bold mb-2">${product.nama}</h3>
                <p class="text-gray-600 text-sm mb-3">${product.deskripsi || 'Benih berkualitas tinggi'}</p>
                <div class="flex items-center justify-between mb-3">
                    <span class="text-2xl font-bold text-green-600">Rp ${formatPrice(product.harga)}</span>
                    <span class="text-sm text-gray-500">${product.satuan || 'pack'}</span>
                </div>
                <div class="text-sm text-gray-600 mb-3">
                    <i class="fas fa-box mr-1"></i>
                    Stok: ${product.stok || 'Tersedia'}
                </div>
                <button onclick="addToCart('${escapeHtml(product.nama)}')" 
                    class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    <i class="fas fa-cart-plus mr-2"></i>Tambah ke Keranjang
                </button>
            </div>
        </div>
    `).join('');
}

// Filter Products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = products.filter(product => {
        const matchSearch = product.nama.toLowerCase().includes(searchTerm) ||
            (product.deskripsi && product.deskripsi.toLowerCase().includes(searchTerm));
        const matchCategory = !category || product.kategori === category;

        return matchSearch && matchCategory;
    });

    displayProducts(filtered);
}

// Cart Functions
function addToCart(productName) {
    const product = products.find(p => p.nama === productName);
    if (!product) return;

    const existingItem = cart.find(item => item.nama === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification('Produk ditambahkan ke keranjang');
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.nama !== productName);
    saveCart();
    updateCartCount();
    displayCart();
}

function updateQuantity(productName, change) {
    const item = cart.find(item => item.nama === productName);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productName);
    } else {
        saveCart();
        displayCart();
    }
}

function openCart() {
    displayCart();
    document.getElementById('cartModal').classList.remove('hidden');
}

function closeCart() {
    document.getElementById('cartModal').classList.add('hidden');
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">Keranjang belanja kosong</p>
            </div>
        `;
        cartTotal.textContent = 'Rp 0';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.harga * item.quantity), 0);

    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between border-b pb-4 mb-4">
            <div class="flex-1">
                <h4 class="font-bold">${item.nama}</h4>
                <p class="text-sm text-gray-600">Rp ${formatPrice(item.harga)} / ${item.satuan || 'pack'}</p>
            </div>
            <div class="flex items-center gap-3">
                <button onclick="updateQuantity('${escapeHtml(item.nama)}', -1)" 
                    class="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span class="font-bold w-8 text-center">${item.quantity}</span>
                <button onclick="updateQuantity('${escapeHtml(item.nama)}', 1)" 
                    class="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">+</button>
                <button onclick="removeFromCart('${escapeHtml(item.nama)}')" 
                    class="ml-2 text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    cartTotal.textContent = `Rp ${formatPrice(total)}`;
}

function openCheckoutForm() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.harga * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = `Rp ${formatPrice(total)}`;
    
    document.getElementById('cartModal').classList.add('hidden');
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutForm() {
    document.getElementById('checkoutModal').classList.add('hidden');
}

async function submitOrder(e) {
    e.preventDefault();
    
    const nama = document.getElementById('customerName').value;
    const noHp = document.getElementById('customerPhone').value;
    const alamat = document.getElementById('customerAddress').value;
    
    if (!nama || !noHp || !alamat) {
        alert('Mohon lengkapi semua data');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.harga * item.quantity), 0);
    
    // Simpan ke Google Spreadsheet jika diaktifkan
    if (CONFIG.saveToSpreadsheet && CONFIG.spreadsheetUrl) {
        try {
            showNotification('Menyimpan pesanan...');
            
            const orderData = {
                action: 'saveOrder',
                nama: nama,
                noHp: noHp,
                alamat: alamat,
                items: cart,
                total: total
            };
            
            const response = await fetch(CONFIG.spreadsheetUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });
            
            showNotification('Pesanan tersimpan!');
        } catch (error) {
            console.error('Error saving order:', error);
        }
    }
    
    // Kirim ke WhatsApp
    let message = '*Pesanan Benih Pertanian*%0A%0A';
    message += `*Nama:* ${nama}%0A`;
    message += `*No HP:* ${noHp}%0A`;
    message += `*Alamat:* ${alamat}%0A%0A`;
    message += `*Detail Pesanan:*%0A`;
    
    cart.forEach(item => {
        message += `- ${item.nama}%0A`;
        message += `  ${item.quantity} ${item.satuan || 'pack'} x Rp ${formatPrice(item.harga)}%0A`;
        message += `  Subtotal: Rp ${formatPrice(item.harga * item.quantity)}%0A%0A`;
    });
    
    message += `*Total: Rp ${formatPrice(total)}*`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart dan close modal
    cart = [];
    saveCart();
    updateCartCount();
    
    document.getElementById('checkoutModal').classList.add('hidden');
    document.getElementById('checkoutForm').reset();
    
    showNotification('Pesanan dikirim! Terima kasih.');
}

// Helper Functions
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function escapeHtml(text) {
    return text.replace(/'/g, "\\'");
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}


// Background warna per kategori
function getCardBg(kategori) {
    const map = {
        'Padi':            'linear-gradient(135deg,#fef9c3,#fde68a)',
        'Jagung':          'linear-gradient(135deg,#fef3c7,#fcd34d)',
        'Cabai':           'linear-gradient(135deg,#fee2e2,#fca5a5)',
        'Sayuran':         'linear-gradient(135deg,#dcfce7,#86efac)',
        'Bawang':          'linear-gradient(135deg,#ede9fe,#c4b5fd)',
        'Kacang-kacangan': 'linear-gradient(135deg,#fef3c7,#fbbf24)',
        'Buah':            'linear-gradient(135deg,#fce7f3,#f9a8d4)',
    };
    return map[kategori] || 'linear-gradient(135deg,#d1fae5,#6ee7b7)';
}

// Kemasan benih SVG per produk
function getSeedPacketSVG(nama, kategori) {
    const n = nama.toLowerCase();
    if (n.includes('padi ir64'))           return packetPadiIR64();
    if (n.includes('padi ciherang'))       return packetPadiCiherang();
    if (n.includes('padi hibrida'))        return packetPadiHibrida();
    if (n.includes('jagung pioneer'))      return packetJagungPioneer();
    if (n.includes('jagung manis bonanza'))return packetJagungBonanza();
    if (n.includes('jagung pulut'))        return packetJagungPulut();
    if (n.includes('cabai rawit'))         return packetCabaiRawit();
    if (n.includes('cabai keriting'))      return packetCabaiKeriting();
    if (n.includes('cabai merah'))         return packetCabaiMerah();
    if (n.includes('tomat cherry'))        return packetTomatCherry();
    if (n.includes('tomat gondol'))        return packetTomatGondol();
    if (n.includes('sawi'))                return packetSawi();
    if (n.includes('kangkung'))            return packetKangkung();
    if (n.includes('bayam'))               return packetBayam();
    if (n.includes('terong'))              return packetTerong();
    if (n.includes('timun'))               return packetTimun();
    if (n.includes('buncis'))              return packetBuncis();
    if (n.includes('kacang panjang'))      return packetKacangPanjang();
    if (n.includes('wortel'))              return packetWortel();
    if (n.includes('bawang merah'))        return packetBawangMerah();
    if (n.includes('bawang putih'))        return packetBawangPutih();
    if (n.includes('kedelai'))             return packetKedelai();
    if (n.includes('kacang tanah'))        return packetKacangTanah();
    if (n.includes('kacang hijau'))        return packetKacangHijau();
    if (n.includes('melon'))               return packetMelon();
    if (n.includes('semangka'))            return packetSemangka();
    if (n.includes('strawberry'))          return packetStrawberry();
    if (n.includes('paprika merah'))       return packetPaprikaMerah();
    if (n.includes('paprika kuning'))      return packetPaprikaKuning();
    if (n.includes('selada'))              return packetSelada();
    if (n.includes('pak choy'))            return packetPakChoy();
    if (n.includes('brokoli'))             return packetBrokoli();
    if (n.includes('kembang kol'))         return packetKembangKol();
    if (n.includes('labu'))                return packetLabu();
    if (n.includes('pare'))                return packetPare();
    return packetDefault(nama, kategori);
}

// Helper: buat kemasan benih generik dengan warna & ilustrasi tanaman
function makePacket(bgTop, bgBot, labelColor, labelText, subText, plantSVG) {
    return `<svg viewBox="0 0 160 200" width="130" height="162" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pg${labelText.replace(/\s/g,'')}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBot}"/>
        </linearGradient>
      </defs>
      <!-- Kemasan -->
      <rect x="8" y="4" width="144" height="192" rx="10" fill="url(#pg${labelText.replace(/\s/g,'')})" stroke="#00000022" stroke-width="1"/>
      <!-- Lipatan atas -->
      <rect x="8" y="4" width="144" height="28" rx="10" fill="${labelColor}"/>
      <rect x="8" y="22" width="144" height="10" fill="${labelColor}"/>
      <!-- Teks merek -->
      <text x="80" y="22" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="white">${labelText}</text>
      <!-- Kotak gambar -->
      <rect x="18" y="38" width="124" height="100" rx="6" fill="white" opacity="0.85"/>
      <!-- Ilustrasi tanaman -->
      <g transform="translate(18,38)">${plantSVG}</g>
      <!-- Teks nama produk -->
      <rect x="8" y="144" width="144" height="52" rx="0" fill="${labelColor}" opacity="0.15"/>
      <text x="80" y="162" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" font-weight="bold" fill="#1a1a1a">${subText}</text>
      <text x="80" y="176" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#444">Benih Unggul Bersertifikat</text>
      <!-- Lipatan bawah -->
      <rect x="8" y="178" width="144" height="18" rx="10" fill="${labelColor}" opacity="0.5"/>
      <text x="80" y="190" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="white">www.tokobenih.id</text>
      <!-- Kilap kemasan -->
      <rect x="12" y="8" width="18" height="180" rx="4" fill="white" opacity="0.08"/>
    </svg>`;
}

// ===== PADI =====
function packetPadiIR64() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="20" stroke="#92400e" stroke-width="2.5"/>
      <path d="M62 70 Q45 58 38 42" stroke="#16a34a" stroke-width="2" fill="none"/>
      <path d="M62 55 Q78 43 84 28" stroke="#16a34a" stroke-width="2" fill="none"/>
      <g fill="#ca8a04">
        <ellipse cx="58" cy="22" rx="4" ry="7" transform="rotate(-15,58,22)"/>
        <ellipse cx="65" cy="20" rx="4" ry="7" transform="rotate(8,65,20)"/>
        <ellipse cx="54" cy="30" rx="4" ry="7" transform="rotate(-20,54,30)"/>
        <ellipse cx="70" cy="28" rx="4" ry="7" transform="rotate(12,70,28)"/>
        <ellipse cx="50" cy="40" rx="4" ry="7" transform="rotate(-25,50,40)"/>
        <ellipse cx="74" cy="38" rx="4" ry="7" transform="rotate(18,74,38)"/>
      </g>
      <ellipse cx="62" cy="97" rx="22" ry="5" fill="#92400e" opacity="0.25"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','IR64 UNGGUL','Benih Padi IR64', plant);
}

function packetPadiCiherang() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="20" stroke="#92400e" stroke-width="2.5"/>
      <path d="M62 72 Q44 60 36 44" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M62 58 Q80 46 86 30" stroke="#22c55e" stroke-width="2" fill="none"/>
      <g fill="#a16207">
        <ellipse cx="57" cy="22" rx="4" ry="7" transform="rotate(-12,57,22)"/>
        <ellipse cx="66" cy="20" rx="4" ry="7" transform="rotate(6,66,20)"/>
        <ellipse cx="53" cy="31" rx="4" ry="7" transform="rotate(-18,53,31)"/>
        <ellipse cx="71" cy="29" rx="4" ry="7" transform="rotate(10,71,29)"/>
        <ellipse cx="49" cy="41" rx="4" ry="7" transform="rotate(-22,49,41)"/>
        <ellipse cx="75" cy="39" rx="4" ry="7" transform="rotate(16,75,39)"/>
      </g>
      <ellipse cx="62" cy="97" rx="22" ry="5" fill="#92400e" opacity="0.25"/>`;
    return makePacket('#166534','#bbf7d0','#166534','CIHERANG','Benih Padi Ciherang', plant);
}

function packetPadiHibrida() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="18" stroke="#78350f" stroke-width="3"/>
      <path d="M62 68 Q42 55 34 38" stroke="#15803d" stroke-width="2.5" fill="none"/>
      <path d="M62 52 Q82 39 90 22" stroke="#15803d" stroke-width="2.5" fill="none"/>
      <g fill="#d97706">
        <ellipse cx="56" cy="20" rx="5" ry="8" transform="rotate(-14,56,20)"/>
        <ellipse cx="67" cy="18" rx="5" ry="8" transform="rotate(7,67,18)"/>
        <ellipse cx="51" cy="30" rx="5" ry="8" transform="rotate(-20,51,30)"/>
        <ellipse cx="73" cy="28" rx="5" ry="8" transform="rotate(13,73,28)"/>
        <ellipse cx="46" cy="42" rx="5" ry="8" transform="rotate(-26,46,42)"/>
        <ellipse cx="78" cy="40" rx="5" ry="8" transform="rotate(19,78,40)"/>
      </g>
      <ellipse cx="62" cy="97" rx="24" ry="5" fill="#78350f" opacity="0.25"/>`;
    return makePacket('#065f46','#a7f3d0','#065f46','HIBRIDA','Benih Padi Hibrida', plant);
}

// ===== JAGUNG =====
function packetJagungBonanza() {
    const plant = `
      <rect x="58" y="55" width="8" height="42" rx="3" fill="#15803d"/>
      <path d="M62 80 Q38 68 30 50" stroke="#22c55e" stroke-width="3" fill="none"/>
      <path d="M62 65 Q88 53 96 35" stroke="#22c55e" stroke-width="3" fill="none"/>
      <!-- Tongkol jagung manis kuning cerah -->
      <rect x="46" y="18" width="32" height="52" rx="16" fill="#fbbf24"/>
      <rect x="46" y="18" width="32" height="52" rx="16" fill="none" stroke="#d97706" stroke-width="1"/>
      <g fill="#f59e0b">
        <circle cx="54" cy="26" r="3.5"/><circle cx="62" cy="26" r="3.5"/><circle cx="70" cy="26" r="3.5"/>
        <circle cx="54" cy="34" r="3.5"/><circle cx="62" cy="34" r="3.5"/><circle cx="70" cy="34" r="3.5"/>
        <circle cx="54" cy="42" r="3.5"/><circle cx="62" cy="42" r="3.5"/><circle cx="70" cy="42" r="3.5"/>
        <circle cx="54" cy="50" r="3.5"/><circle cx="62" cy="50" r="3.5"/><circle cx="70" cy="50" r="3.5"/>
        <circle cx="54" cy="58" r="3.5"/><circle cx="62" cy="58" r="3.5"/><circle cx="70" cy="58" r="3.5"/>
      </g>
      <!-- Rambut jagung -->
      <g stroke="#b45309" stroke-width="1.2">
        <line x1="56" y1="18" x2="50" y2="6"/><line x1="62" y1="18" x2="62" y2="4"/><line x1="68" y1="18" x2="74" y2="6"/>
      </g>`;
    return makePacket('#d97706','#fef9c3','#d97706','BONANZA','Jagung Manis Bonanza', plant);
}

function packetJagungPioneer() {
    const plant = `
      <rect x="58" y="55" width="8" height="42" rx="3" fill="#15803d"/>
      <path d="M62 78 Q40 66 32 48" stroke="#16a34a" stroke-width="3" fill="none"/>
      <path d="M62 63 Q86 51 94 33" stroke="#16a34a" stroke-width="3" fill="none"/>
      <rect x="47" y="16" width="30" height="54" rx="15" fill="#fbbf24"/>
      <g fill="#f59e0b">
        <circle cx="55" cy="25" r="3"/><circle cx="62" cy="25" r="3"/><circle cx="69" cy="25" r="3"/>
        <circle cx="55" cy="33" r="3"/><circle cx="62" cy="33" r="3"/><circle cx="69" cy="33" r="3"/>
        <circle cx="55" cy="41" r="3"/><circle cx="62" cy="41" r="3"/><circle cx="69" cy="41" r="3"/>
        <circle cx="55" cy="49" r="3"/><circle cx="62" cy="49" r="3"/><circle cx="69" cy="49" r="3"/>
        <circle cx="55" cy="57" r="3"/><circle cx="62" cy="57" r="3"/><circle cx="69" cy="57" r="3"/>
      </g>
      <g stroke="#92400e" stroke-width="1.2">
        <line x1="56" y1="16" x2="50" y2="5"/><line x1="62" y1="16" x2="62" y2="3"/><line x1="68" y1="16" x2="74" y2="5"/>
      </g>`;
    return makePacket('#b45309','#fef3c7','#b45309','PIONEER 21','Jagung Pioneer 21', plant);
}

function packetJagungPulut() {
    const plant = `
      <rect x="58" y="55" width="8" height="42" rx="3" fill="#15803d"/>
      <path d="M62 78 Q40 66 32 48" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <rect x="48" y="16" width="28" height="52" rx="14" fill="#e5e7eb"/>
      <g fill="#d1d5db">
        <circle cx="55" cy="25" r="3"/><circle cx="62" cy="25" r="3"/><circle cx="69" cy="25" r="3"/>
        <circle cx="55" cy="33" r="3"/><circle cx="62" cy="33" r="3"/><circle cx="69" cy="33" r="3"/>
        <circle cx="55" cy="41" r="3"/><circle cx="62" cy="41" r="3"/><circle cx="69" cy="41" r="3"/>
        <circle cx="55" cy="49" r="3"/><circle cx="62" cy="49" r="3"/><circle cx="69" cy="49" r="3"/>
        <circle cx="55" cy="57" r="3"/><circle cx="62" cy="57" r="3"/><circle cx="69" cy="57" r="3"/>
      </g>`;
    return makePacket('#6b7280','#f3f4f6','#6b7280','PULUT','Jagung Pulut', plant);
}

// ===== CABAI =====
function packetCabaiRawit() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="30" stroke="#15803d" stroke-width="2"/>
      <path d="M62 60 Q44 50 40 35" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 48 Q80 38 84 23" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 32 Q52 22 54 10 Q60 18 62 24Z" fill="#dc2626"/>
      <path d="M62 32 Q72 22 70 10 Q64 18 62 24Z" fill="#dc2626"/>
      <path d="M55 40 Q48 30 50 18 Q56 26 58 32Z" fill="#ef4444"/>
      <path d="M69 40 Q76 30 74 18 Q68 26 66 32Z" fill="#ef4444"/>`;
    return makePacket('#dc2626','#fee2e2','#dc2626','RAWIT SUPER','Cabai Rawit Super', plant);
}

function packetCabaiKeriting() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="28" stroke="#15803d" stroke-width="2"/>
      <path d="M62 55 Q44 48 38 32" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 40 Q80 33 86 18" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 30 Q52 18 56 6 Q62 16 62 22Z" fill="#16a34a"/>
      <path d="M62 30 Q72 18 68 6 Q62 16 62 22Z" fill="#16a34a"/>
      <path d="M50 45 Q42 32 46 20 Q52 30 54 38Z" fill="#22c55e"/>
      <path d="M74 45 Q82 32 78 20 Q72 30 70 38Z" fill="#22c55e"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','KERITING','Cabai Keriting Hijau', plant);
}

function packetCabaiMerah() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="28" stroke="#15803d" stroke-width="2"/>
      <path d="M62 55 Q44 48 38 32" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 30 Q50 16 54 4 Q62 14 62 22Z" fill="#ef4444"/>
      <path d="M62 30 Q74 16 70 4 Q62 14 62 22Z" fill="#ef4444"/>
      <path d="M48 48 Q38 34 42 20 Q50 32 52 42Z" fill="#dc2626"/>
      <path d="M76 48 Q86 34 82 20 Q74 32 72 42Z" fill="#dc2626"/>`;
    return makePacket('#b91c1c','#fee2e2','#b91c1c','MERAH BESAR','Cabai Merah Besar', plant);
}

// ===== TOMAT =====
function packetTomatCherry() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="30" stroke="#15803d" stroke-width="2"/>
      <path d="M62 60 Q44 50 38 34" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 45 Q80 35 86 20" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <circle cx="50" cy="22" r="10" fill="#ef4444"/>
      <circle cx="74" cy="18" r="10" fill="#ef4444"/>
      <circle cx="62" cy="12" r="10" fill="#dc2626"/>
      <circle cx="44" cy="12" r="7" fill="#ef4444"/>
      <circle cx="80" cy="10" r="7" fill="#dc2626"/>
      <circle cx="46" cy="22" r="4" fill="#fca5a5" opacity="0.5"/>
      <circle cx="70" cy="18" r="4" fill="#fca5a5" opacity="0.5"/>`;
    return makePacket('#dc2626','#fee2e2','#dc2626','CHERRY','Tomat Cherry', plant);
}

function packetTomatGondol() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="30" stroke="#15803d" stroke-width="2"/>
      <path d="M62 60 Q44 50 38 34" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <circle cx="62" cy="22" r="20" fill="#ef4444"/>
      <circle cx="55" cy="15" r="8" fill="#fca5a5" opacity="0.4"/>
      <path d="M50 6 Q62 0 74 6 Q68 2 62 1 Q56 2 50 6Z" fill="#16a34a"/>
      <line x1="62" y1="1" x2="62" y2="-5" stroke="#15803d" stroke-width="2"/>`;
    return makePacket('#b91c1c','#fee2e2','#b91c1c','GONDOL','Tomat Gondol', plant);
}

// ===== SAYURAN HIJAU =====
function packetSawi() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="55" stroke="#15803d" stroke-width="2"/>
      <path d="M62 70 Q38 58 30 38 Q48 50 62 60Z" fill="#22c55e"/>
      <path d="M62 70 Q86 58 94 38 Q76 50 62 60Z" fill="#22c55e"/>
      <path d="M62 55 Q42 42 36 22 Q54 36 62 48Z" fill="#4ade80"/>
      <path d="M62 55 Q82 42 88 22 Q70 36 62 48Z" fill="#4ade80"/>
      <path d="M62 42 Q50 28 52 10 Q62 24 62 36Z" fill="#86efac"/>
      <path d="M62 42 Q74 28 72 10 Q62 24 62 36Z" fill="#86efac"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','SAWI HIJAU','Sawi Hijau', plant);
}

function packetKangkung() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="50" stroke="#15803d" stroke-width="2"/>
      <path d="M62 72 Q40 60 34 40 Q52 52 62 64Z" fill="#16a34a"/>
      <path d="M62 72 Q84 60 90 40 Q72 52 62 64Z" fill="#16a34a"/>
      <path d="M62 55 Q44 42 40 22 Q56 36 62 48Z" fill="#22c55e"/>
      <path d="M62 55 Q80 42 84 22 Q68 36 62 48Z" fill="#22c55e"/>
      <path d="M62 40 Q52 26 54 8 Q62 22 62 34Z" fill="#4ade80"/>
      <path d="M62 40 Q72 26 70 8 Q62 22 62 34Z" fill="#4ade80"/>`;
    return makePacket('#166534','#bbf7d0','#166534','KANGKUNG','Kangkung Darat', plant);
}

function packetBayam() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="50" stroke="#15803d" stroke-width="2"/>
      <path d="M62 72 Q40 60 34 40 Q52 52 62 64Z" fill="#dc2626"/>
      <path d="M62 72 Q84 60 90 40 Q72 52 62 64Z" fill="#dc2626"/>
      <path d="M62 55 Q44 42 40 22 Q56 36 62 48Z" fill="#ef4444"/>
      <path d="M62 55 Q80 42 84 22 Q68 36 62 48Z" fill="#ef4444"/>
      <path d="M62 40 Q52 26 54 8 Q62 22 62 34Z" fill="#fca5a5"/>
      <path d="M62 40 Q72 26 70 8 Q62 22 62 34Z" fill="#fca5a5"/>`;
    return makePacket('#b91c1c','#fee2e2','#b91c1c','BAYAM MERAH','Bayam Merah', plant);
}

function packetTerong() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="28" stroke="#15803d" stroke-width="2"/>
      <path d="M62 55 Q44 48 38 32" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M48 30 Q44 16 50 4 Q56 14 58 24Z" fill="#7c3aed"/>
      <path d="M76 30 Q80 16 74 4 Q68 14 66 24Z" fill="#7c3aed"/>
      <path d="M62 28 Q50 14 54 2 Q62 12 62 20Z" fill="#6d28d9"/>
      <path d="M62 28 Q74 14 70 2 Q62 12 62 20Z" fill="#6d28d9"/>
      <path d="M44 28" stroke="#a78bfa" stroke-width="2" fill="none"/>`;
    return makePacket('#6d28d9','#ede9fe','#6d28d9','TERONG UNGU','Terong Ungu', plant);
}

function packetTimun() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="28" stroke="#15803d" stroke-width="2"/>
      <path d="M62 55 Q44 48 38 32" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M48 28 Q42 14 48 2 Q56 12 56 22Z" fill="#4ade80"/>
      <path d="M76 28 Q82 14 76 2 Q68 12 68 22Z" fill="#4ade80"/>
      <path d="M62 26 Q52 12 56 0 Q62 10 62 18Z" fill="#22c55e"/>
      <path d="M62 26 Q72 12 68 0 Q62 10 62 18Z" fill="#22c55e"/>
      <g fill="#16a34a"><circle cx="46" cy="18" r="2"/><circle cx="78" cy="16" r="2"/><circle cx="62" cy="10" r="2"/></g>`;
    return makePacket('#15803d','#dcfce7','#15803d','TIMUN HIBRIDA','Timun Hibrida', plant);
}

function packetBuncis() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="40" stroke="#15803d" stroke-width="2"/>
      <path d="M62 70 Q44 58 38 40 Q52 50 62 62Z" fill="#22c55e"/>
      <path d="M62 70 Q80 58 86 40 Q72 50 62 62Z" fill="#22c55e"/>
      <path d="M44 30 Q36 18 42 6 Q50 16 50 24Z" fill="#4ade80"/>
      <path d="M80 30 Q88 18 82 6 Q74 16 74 24Z" fill="#4ade80"/>
      <path d="M62 28 Q54 16 58 4 Q62 14 62 22Z" fill="#86efac"/>`;
    return makePacket('#166534','#bbf7d0','#166534','BUNCIS','Buncis Perancis', plant);
}

function packetKacangPanjang() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="40" stroke="#15803d" stroke-width="2"/>
      <path d="M62 70 Q44 58 38 40 Q52 50 62 62Z" fill="#22c55e"/>
      <path d="M62 70 Q80 58 86 40 Q72 50 62 62Z" fill="#22c55e"/>
      <path d="M40 8 Q50 20 55 35 Q58 20 56 8Z" fill="#4ade80"/>
      <path d="M84 8 Q74 20 69 35 Q66 20 68 8Z" fill="#4ade80"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','KACANG PANJANG','Kacang Panjang', plant);
}

function packetWortel() {
    const plant = `
      <path d="M62 95 Q58 70 56 50 Q58 35 62 20" stroke="#15803d" stroke-width="2" fill="none"/>
      <path d="M62 20 Q48 10 44 0" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 20 Q76 10 80 0" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 20 Q54 8 56 -2" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M62 20 Q70 8 68 -2" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M54 22 Q50 50 54 72 Q58 88 62 92 Q66 88 70 72 Q74 50 70 22Z" fill="#f97316"/>
      <line x1="59" y1="35" x2="58" y2="65" stroke="#ea580c" stroke-width="1.2" opacity="0.5"/>
      <line x1="65" y1="35" x2="66" y2="65" stroke="#ea580c" stroke-width="1.2" opacity="0.5"/>`;
    return makePacket('#ea580c','#ffedd5','#ea580c','WORTEL','Wortel Chantenay', plant);
}

function packetBawangMerah() {
    const plant = `
      <path d="M56 55 Q50 35 52 10" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <path d="M62 53 Q62 33 62 8" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <path d="M68 55 Q74 35 72 10" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <ellipse cx="62" cy="72" rx="28" ry="28" fill="#e879a0"/>
      <ellipse cx="62" cy="72" rx="20" ry="20" fill="#f0abca"/>
      <ellipse cx="62" cy="72" rx="12" ry="12" fill="#fce7f3"/>
      <g stroke="#92400e" stroke-width="1.2" fill="none">
        <path d="M46 92 Q42 100 38 104"/><path d="M54 95 Q52 103 50 107"/>
        <path d="M62 96 Q62 104 62 108"/><path d="M70 95 Q72 103 74 107"/>
        <path d="M78 92 Q82 100 86 104"/>
      </g>`;
    return makePacket('#be185d','#fce7f3','#be185d','BAWANG MERAH','Bawang Merah Bima', plant);
}

function packetBawangPutih() {
    const plant = `
      <path d="M56 55 Q50 35 52 10" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <path d="M62 53 Q62 33 62 8" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <path d="M68 55 Q74 35 72 10" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <ellipse cx="62" cy="72" rx="28" ry="28" fill="#e5e7eb"/>
      <ellipse cx="62" cy="72" rx="20" ry="20" fill="#f3f4f6"/>
      <ellipse cx="62" cy="72" rx="12" ry="12" fill="#ffffff"/>
      <g stroke="#92400e" stroke-width="1.2" fill="none">
        <path d="M46 92 Q42 100 38 104"/><path d="M54 95 Q52 103 50 107"/>
        <path d="M62 96 Q62 104 62 108"/><path d="M70 95 Q72 103 74 107"/>
        <path d="M78 92 Q82 100 86 104"/>
      </g>`;
    return makePacket('#6b7280','#f9fafb','#6b7280','BAWANG PUTIH','Bawang Putih Lumbu', plant);
}

function packetKedelai() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="40" stroke="#15803d" stroke-width="2"/>
      <path d="M62 70 Q44 58 38 40 Q52 50 62 62Z" fill="#22c55e"/>
      <path d="M62 70 Q80 58 86 40 Q72 50 62 62Z" fill="#22c55e"/>
      <path d="M62 50 Q44 38 40 20 Q54 32 62 44Z" fill="#4ade80"/>
      <path d="M62 50 Q80 38 84 20 Q70 32 62 44Z" fill="#4ade80"/>
      <ellipse cx="50" cy="18" rx="8" ry="6" fill="#fbbf24"/>
      <ellipse cx="74" cy="14" rx="8" ry="6" fill="#fbbf24"/>
      <ellipse cx="62" cy="10" rx="8" ry="6" fill="#f59e0b"/>`;
    return makePacket('#a16207','#fef9c3','#a16207','KEDELAI','Kedelai Grobogan', plant);
}

function packetKacangTanah() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="50" stroke="#15803d" stroke-width="2"/>
      <path d="M62 72 Q44 60 38 42 Q52 52 62 64Z" fill="#22c55e"/>
      <path d="M62 72 Q80 60 86 42 Q72 52 62 64Z" fill="#22c55e"/>
      <path d="M44 40 Q36 28 42 16 Q50 26 50 36Z" fill="#a3e635"/>
      <circle cx="40" cy="22" r="6" fill="#84cc16"/>
      <circle cx="50" cy="18" r="6" fill="#84cc16"/>
      <path d="M74 40 Q82 28 76 16 Q68 26 68 36Z" fill="#a3e635"/>
      <circle cx="78" cy="22" r="6" fill="#84cc16"/>
      <circle cx="68" cy="18" r="6" fill="#84cc16"/>`;
    return makePacket('#92400e','#fef3c7','#92400e','KACANG TANAH','Kacang Tanah Kelinci', plant);
}

function packetKacangHijau() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="50" stroke="#15803d" stroke-width="2"/>
      <path d="M62 72 Q44 60 38 42 Q52 52 62 64Z" fill="#22c55e"/>
      <path d="M62 72 Q80 60 86 42 Q72 52 62 64Z" fill="#22c55e"/>
      <path d="M44 38 Q36 26 42 14 Q50 24 50 34Z" fill="#4ade80"/>
      <circle cx="40" cy="20" r="5" fill="#16a34a"/>
      <circle cx="50" cy="16" r="5" fill="#16a34a"/>
      <path d="M74 38 Q82 26 76 14 Q68 24 68 34Z" fill="#4ade80"/>
      <circle cx="78" cy="20" r="5" fill="#16a34a"/>
      <circle cx="68" cy="16" r="5" fill="#16a34a"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','KACANG HIJAU','Kacang Hijau Vima', plant);
}

function packetMelon() {
    const plant = `
      <circle cx="62" cy="55" r="40" fill="#4ade80"/>
      <path d="M62 15 Q82 35 82 55 Q82 75 62 95" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M62 15 Q42 35 42 55 Q42 75 62 95" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M22 55 Q42 35 62 35 Q82 35 102 55" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M22 55 Q42 75 62 75 Q82 75 102 55" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <circle cx="48" cy="40" r="10" fill="#86efac" opacity="0.5"/>
      <line x1="62" y1="15" x2="62" y2="5" stroke="#15803d" stroke-width="2.5"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','MELON GOLDEN','Melon Golden', plant);
}

function packetSemangka() {
    const plant = `
      <circle cx="62" cy="58" r="36" fill="#22c55e"/>
      <circle cx="62" cy="58" r="30" fill="#16a34a"/>
      <g stroke="#15803d" stroke-width="2" fill="none">
        <line x1="62" y1="22" x2="62" y2="94"/>
        <line x1="26" y1="58" x2="98" y2="58"/>
        <line x1="36" y1="32" x2="88" y2="84"/>
        <line x1="88" y1="32" x2="36" y2="84"/>
      </g>
      <circle cx="62" cy="58" r="22" fill="#ef4444"/>
      <g fill="#1a1a1a">
        <ellipse cx="52" cy="52" rx="3" ry="4" transform="rotate(-10,52,52)"/>
        <ellipse cx="62" cy="48" rx="3" ry="4"/>
        <ellipse cx="72" cy="52" rx="3" ry="4" transform="rotate(10,72,52)"/>
        <ellipse cx="56" cy="64" rx="3" ry="4" transform="rotate(-5,56,64)"/>
        <ellipse cx="68" cy="64" rx="3" ry="4" transform="rotate(5,68,64)"/>
      </g>`;
    return makePacket('#15803d','#dcfce7','#15803d','SEMANGKA','Semangka Kuning', plant);
}

function packetStrawberry() {
    const plant = `
      <path d="M62 8 Q48 12 44 20" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 8 Q62 4 62 0" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 8 Q76 12 80 20" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 8 Q52 14 50 22" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M62 8 Q72 14 74 22" stroke="#16a34a" stroke-width="1.5" fill="none"/>
      <path d="M36 24 Q32 52 42 72 Q52 90 62 94 Q72 90 82 72 Q92 52 88 24 Q76 14 62 10 Q48 14 36 24Z" fill="#ef4444"/>
      <g fill="#fca5a5">
        <ellipse cx="50" cy="38" rx="2.5" ry="3.5" transform="rotate(-10,50,38)"/>
        <ellipse cx="62" cy="34" rx="2.5" ry="3.5"/>
        <ellipse cx="74" cy="38" rx="2.5" ry="3.5" transform="rotate(10,74,38)"/>
        <ellipse cx="46" cy="54" rx="2.5" ry="3.5"/>
        <ellipse cx="60" cy="50" rx="2.5" ry="3.5"/>
        <ellipse cx="74" cy="54" rx="2.5" ry="3.5"/>
        <ellipse cx="50" cy="70" rx="2.5" ry="3.5"/>
        <ellipse cx="62" cy="68" rx="2.5" ry="3.5"/>
        <ellipse cx="74" cy="70" rx="2.5" ry="3.5"/>
      </g>`;
    return makePacket('#dc2626','#fee2e2','#dc2626','STRAWBERRY','Strawberry Alpine', plant);
}

function packetPaprikaMerah() {
    const plant = `
      <line x1="62" y1="10" x2="62" y2="0" stroke="#15803d" stroke-width="2.5"/>
      <path d="M62 10 Q76 4 80 -4" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M50 16 Q62 10 74 16 Q68 12 62 10 Q56 12 50 16Z" fill="#16a34a"/>
      <path d="M62 12 Q40 16 34 38 Q30 58 38 76 Q46 92 62 96 Q78 92 86 76 Q94 58 90 38 Q84 16 62 12Z" fill="#ef4444"/>
      <path d="M62 16 Q62 50 62 94" stroke="#dc2626" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M48 20 Q44 52 46 84" stroke="#dc2626" stroke-width="1.2" fill="none" opacity="0.3"/>
      <path d="M76 20 Q80 52 78 84" stroke="#dc2626" stroke-width="1.2" fill="none" opacity="0.3"/>
      <path d="M38 32 Q35 52 37 68" stroke="#fca5a5" stroke-width="2" fill="none" opacity="0.5"/>`;
    return makePacket('#dc2626','#fee2e2','#dc2626','PAPRIKA MERAH','Paprika Merah', plant);
}

function packetPaprikaKuning() {
    const plant = `
      <line x1="62" y1="10" x2="62" y2="0" stroke="#15803d" stroke-width="2.5"/>
      <path d="M50 16 Q62 10 74 16 Q68 12 62 10 Q56 12 50 16Z" fill="#16a34a"/>
      <path d="M62 12 Q40 16 34 38 Q30 58 38 76 Q46 92 62 96 Q78 92 86 76 Q94 58 90 38 Q84 16 62 12Z" fill="#fbbf24"/>
      <path d="M62 16 Q62 50 62 94" stroke="#d97706" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M48 20 Q44 52 46 84" stroke="#d97706" stroke-width="1.2" fill="none" opacity="0.3"/>
      <path d="M76 20 Q80 52 78 84" stroke="#d97706" stroke-width="1.2" fill="none" opacity="0.3"/>
      <path d="M38 32 Q35 52 37 68" stroke="#fde68a" stroke-width="2" fill="none" opacity="0.5"/>`;
    return makePacket('#d97706','#fef9c3','#d97706','PAPRIKA KUNING','Paprika Kuning', plant);
}

function packetSelada() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="55" stroke="#15803d" stroke-width="2"/>
      <path d="M62 72 Q38 58 30 36 Q50 50 62 64Z" fill="#22c55e"/>
      <path d="M62 72 Q86 58 94 36 Q74 50 62 64Z" fill="#22c55e"/>
      <path d="M62 56 Q40 42 34 20 Q54 36 62 50Z" fill="#4ade80"/>
      <path d="M62 56 Q84 42 90 20 Q70 36 62 50Z" fill="#4ade80"/>
      <path d="M62 42 Q48 26 50 8 Q62 22 62 36Z" fill="#86efac"/>
      <path d="M62 42 Q76 26 74 8 Q62 22 62 36Z" fill="#86efac"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','SELADA','Selada Keriting', plant);
}

function packetPakChoy() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="55" stroke="#15803d" stroke-width="2.5"/>
      <path d="M62 75 Q40 62 34 42 Q52 54 62 68Z" fill="#22c55e"/>
      <path d="M62 75 Q84 62 90 42 Q72 54 62 68Z" fill="#22c55e"/>
      <path d="M62 58 Q42 44 38 24 Q56 38 62 52Z" fill="#4ade80"/>
      <path d="M62 58 Q82 44 86 24 Q68 38 62 52Z" fill="#4ade80"/>
      <path d="M62 44 Q50 28 52 10 Q62 24 62 38Z" fill="#86efac"/>
      <path d="M62 44 Q74 28 72 10 Q62 24 62 38Z" fill="#86efac"/>`;
    return makePacket('#166534','#bbf7d0','#166534','PAK CHOY','Pak Choy', plant);
}

function packetBrokoli() {
    const plant = `
      <rect x="56" y="65" width="12" height="32" rx="5" fill="#15803d"/>
      <circle cx="62" cy="52" r="32" fill="#16a34a"/>
      <circle cx="46" cy="40" r="16" fill="#22c55e"/>
      <circle cx="62" cy="34" r="18" fill="#22c55e"/>
      <circle cx="78" cy="40" r="16" fill="#22c55e"/>
      <circle cx="40" cy="54" r="14" fill="#22c55e"/>
      <circle cx="84" cy="54" r="14" fill="#22c55e"/>
      <circle cx="50" cy="30" r="12" fill="#4ade80"/>
      <circle cx="74" cy="30" r="12" fill="#4ade80"/>
      <circle cx="62" cy="26" r="12" fill="#4ade80"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','BROKOLI','Brokoli Hijau', plant);
}

function packetKembangKol() {
    const plant = `
      <rect x="56" y="65" width="12" height="32" rx="5" fill="#15803d"/>
      <circle cx="62" cy="52" r="32" fill="#e5e7eb"/>
      <circle cx="46" cy="40" r="16" fill="#f3f4f6"/>
      <circle cx="62" cy="34" r="18" fill="#f3f4f6"/>
      <circle cx="78" cy="40" r="16" fill="#f3f4f6"/>
      <circle cx="40" cy="54" r="14" fill="#f3f4f6"/>
      <circle cx="84" cy="54" r="14" fill="#f3f4f6"/>
      <circle cx="50" cy="30" r="12" fill="#ffffff"/>
      <circle cx="74" cy="30" r="12" fill="#ffffff"/>
      <circle cx="62" cy="26" r="12" fill="#ffffff"/>`;
    return makePacket('#6b7280','#f9fafb','#6b7280','KEMBANG KOL','Kembang Kol', plant);
}

function packetLabu() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="50" stroke="#15803d" stroke-width="2"/>
      <path d="M62 70 Q44 58 38 40 Q52 50 62 62Z" fill="#22c55e"/>
      <path d="M62 70 Q80 58 86 40 Q72 50 62 62Z" fill="#22c55e"/>
      <circle cx="62" cy="30" r="22" fill="#86efac"/>
      <circle cx="62" cy="30" r="14" fill="#4ade80"/>
      <line x1="62" y1="8" x2="62" y2="0" stroke="#15803d" stroke-width="2.5"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','LABU SIAM','Labu Siam', plant);
}

function packetPare() {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="28" stroke="#15803d" stroke-width="2"/>
      <path d="M62 55 Q44 48 38 32" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M62 40 Q80 33 86 18" stroke="#16a34a" stroke-width="1.8" fill="none"/>
      <path d="M48 28 Q42 14 48 2 Q56 12 56 22Z" fill="#4ade80"/>
      <path d="M76 28 Q82 14 76 2 Q68 12 68 22Z" fill="#4ade80"/>
      <path d="M62 26 Q52 12 56 0 Q62 10 62 18Z" fill="#22c55e"/>
      <path d="M62 26 Q72 12 68 0 Q62 10 62 18Z" fill="#22c55e"/>
      <g fill="#16a34a">
        <circle cx="46" cy="16" r="2.5"/><circle cx="78" cy="14" r="2.5"/>
        <circle cx="62" cy="8" r="2.5"/><circle cx="54" cy="6" r="2"/><circle cx="70" cy="6" r="2"/>
      </g>`;
    return makePacket('#166534','#bbf7d0','#166534','PARE HIJAU','Pare Hijau', plant);
}

function packetDefault(nama, kategori) {
    const plant = `
      <line x1="62" y1="95" x2="62" y2="30" stroke="#15803d" stroke-width="2.5"/>
      <path d="M62 70 Q40 58 34 38 Q52 50 62 62Z" fill="#22c55e"/>
      <path d="M62 70 Q84 58 90 38 Q72 50 62 62Z" fill="#22c55e"/>
      <path d="M62 50 Q42 38 38 18 Q56 32 62 44Z" fill="#4ade80"/>
      <path d="M62 50 Q82 38 86 18 Q68 32 62 44Z" fill="#4ade80"/>
      <circle cx="62" cy="22" r="14" fill="#fbbf24"/>
      <circle cx="62" cy="22" r="8" fill="#f59e0b"/>`;
    return makePacket('#15803d','#dcfce7','#15803d','BENIH','Benih Pertanian', plant);
}
