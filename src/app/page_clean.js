import Image from "next/image";

const cars = [
  {
    name: "BYD Seagull",
    price: "Rp 218,000,000",
    image: "/assets/byd-seagull-218000000-bestseller.webp",
    status: "indent",
    range: "305 KM",
    variant: "Electric City Car"
  },
  {
    name: "BYD Dolphin", 
    price: "Rp 369,000,000",
    image: "/assets/byd-dolphin-369000000-bestseller.webp",
    status: "bestseller",
    range: "410 KM",
    variant: "Dynamic"
  },
  {
    name: "BYD M6",
    price: "Rp 383,000,000", 
    image: "/assets/byd-m6-383000000-bestseller.webp",
    status: "bestseller",
    range: "420 KM",
    variant: "Standard 7 Seat"
  },
  {
    name: "BYD Atto 3 Facelift",
    price: "Rp 390,000,000",
    image: "/assets/byd-attofacelift-390000000.webp",
    status: "available",
    range: "410 KM",
    variant: "Advanced"
  },
  {
    name: "BYD Seal Facelift 2025",
    price: "Rp 576,000,000",
    image: "/assets/byd-sealfacelift2025-576000000-bestseller.webp", 
    status: "bestseller",
    range: "580 KM",
    variant: "Performance AWD"
  },
  {
    name: "BYD Sealion 7",
    price: "Rp 629,000,000",
    image: "/assets/byd-sealion7-629000000-bestseller.webp",
    status: "bestseller",
    range: "567 KM",
    variant: "Premium"
  },
  {
    name: "BYD Denza D9",
    price: "Rp 950,000,000",
    image: "/assets/byd-denzad9-950000000-bestseller.webp",
    status: "bestseller",
    range: "600 KM",
    variant: "Luxury MPV"
  }
];

export default function Home() {
  const generateWhatsAppLink = (carName) => {
    const message = `Halo Rintan, saya tertarik dengan ${carName}. Bisakah kita diskusikan lebih lanjut?`;
    return `https://wa.me/6285215675525?text=${encodeURIComponent(message)}`;
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'bestseller':
        return 'bg-red-500 text-white';
      case 'indent':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-green-500 text-white';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'bestseller':
        return 'Best Seller';
      case 'indent':
        return 'Indent';
      default:
        return 'Available';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">BYD</div>
              <div className="ml-2 text-sm text-gray-600">Jakarta Timur - Kalimalang</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#produk" className="text-gray-700 hover:text-blue-600 font-medium">Produk</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 font-medium">Kontak</a>
              <a href="https://wa.me/6285215675525" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors font-medium">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                BYD Jakarta Timur
                <span className="block text-blue-600">Kalimalang</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Official Website Marketing Dealer BYD Jakarta Timur - Kalimalang. 
                Pilih Mobil impianmu Bersama Kami dengan promo menarik dan jaminan harga paling murah.
              </p>
              
              {/* Sales Consultant Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">RP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Rintan Putri</h3>
                    <p className="text-blue-600 font-medium">Sales Executive</p>
                    <p className="text-gray-600 text-sm">+62 852-1567-5525</p>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  <a
                    href="https://wa.me/6285215675525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-center font-medium text-sm"
                  >
                    📱 WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors text-center font-medium text-sm"
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium text-sm"
                  >
                    🎵 TikTok
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Mobil Listrik No. 1 Di Dunia</h3>
                <p className="text-blue-100 mb-6">
                  Teknologi terdepan dengan jaminan kualitas global. 
                  Rasakan pengalaman berkendara yang revolusioner.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">7+</div>
                    <div className="text-sm text-blue-100">Model Tersedia</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="produk" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricelist BYD Arista Kalimalang Jakarta Timur</h2>
            <p className="text-xl text-gray-600">Pilihan lengkap kendaraan listrik dengan teknologi terdepan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(car.status)}`}>
                    {getStatusText(car.status)}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {car.range}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{car.variant}</p>
                  <p className="text-xl font-bold text-blue-600 mb-4">{car.price}</p>
                  
                  <div className="space-y-2">
                    <a
                      href={generateWhatsAppLink(car.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors block text-center font-medium text-sm"
                    >
                      💬 Konsultasi Sekarang
                    </a>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                      📋 Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Showroom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kunjungi Showroom Kami</h2>
            <p className="text-xl text-gray-600">BYD Arista Kalimalang - Jakarta Timur</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jam Operasional</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Minggu</span>
                    <span className="font-medium">00:01 - 23:59 WIB</span>
                  </div>
                  <div className="text-green-600 font-medium">🟢 BUKA</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi Kontak</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">📱</span>
                    <span className="text-gray-600">WhatsApp: +62 852-1567-5525</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-600">📸</span>
                    <span className="text-gray-600">Instagram: @bydarista.rintan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-black">🎵</span>
                    <span className="text-gray-600">TikTok: @byd.rintan</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/byd-location-arista-kalimalang.webp"
                alt="BYD Showroom Location - Arista Kalimalang"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BYD Arista Kalimalang</h3>
                <p className="text-gray-600 mb-4">
                  Showroom modern dengan layanan profesional untuk pengalaman test drive terbaik
                </p>
                <a
                  href="https://wa.me/6285215675525?text=Halo%20Rintan%2C%20saya%20ingin%20berkunjung%20ke%20showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  📍 Jadwalkan Kunjungan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery Serah Terima</h2>
            <p className="text-xl text-gray-600">Dokumentasi serah terima kendaraan antara pihak Dealer dan Pelanggan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Kepuasan pelanggan adalah prioritas utama kami</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Professional Service</h3>
              <p className="text-gray-600">Layanan profesional dari konsultasi hingga after sales</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Jaminan harga terbaik untuk setiap pembelian</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Beralih ke Kendaraan Listrik?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi Rintan Putri sekarang untuk konsultasi personal dan dapatkan penawaran terbaik untuk kendaraan impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285215675525?text=Halo%20Rintan%2C%20saya%20ingin%20konsultasi%20tentang%20BYD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-colors font-bold text-lg"
            >
              💬 Konsultasi via WhatsApp
            </a>
            <a
              href="tel:+6285215675525"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg"
            >
              📞 Telepon Langsung
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">BYD Jakarta Timur</div>
              <p className="text-gray-300 mb-4">
                Dealer resmi BYD Jakarta Timur - Kalimalang. Solusi kendaraan listrik terpercaya dengan layanan terbaik.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-pink-400 transition-colors">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  TikTok
                </a>
                <a href="https://wa.me/6285215675525" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-green-400 transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 text-gray-300">
                <p>📱 WhatsApp: +62 852-1567-5525</p>
                <p>📧 Email: info@bydjakarta.com</p>
                <p>📍 Arista Kalimalang, Jakarta Timur</p>
                <p>🕒 Buka 24/7</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Sales Consultant</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="font-bold text-blue-400">Rintan Putri</div>
                <div className="text-sm text-gray-300">Sales Executive</div>
                <div className="text-sm text-gray-400 mt-2">
                  Siap membantu Anda menemukan kendaraan listrik yang tepat
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BYD Jakarta Timur - Rintan Putri. Your trusted electric vehicle consultant.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
