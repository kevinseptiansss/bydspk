import Image from "next/image";

const cars = [
  {
    name: "BYD Seagull",
    price: "Rp 218,000,000",
    image: "/assets/byd-seagull-218000000-bestseller.webp",
    status: "bestseller"
  },
  {
    name: "BYD Dolphin", 
    price: "Rp 369,000,000",
    image: "/assets/byd-dolphin-369000000-bestseller.webp",
    status: "bestseller"
  },
  {
    name: "BYD M6",
    price: "Rp 383,000,000", 
    image: "/assets/byd-m6-383000000-bestseller.webp",
    status: "bestseller"
  },
  {
    name: "BYD Atto Facelift",
    price: "Rp 390,000,000",
    image: "/assets/byd-attofacelift-390000000.webp",
    status: "available"
  },
  {
    name: "BYD Seal Facelift 2025",
    price: "Rp 576,000,000",
    image: "/assets/byd-sealfacelift2025-576000000-bestseller.webp", 
    status: "bestseller"
  },
  {
    name: "BYD Sealion 7",
    price: "Rp 629,000,000",
    image: "/assets/byd-sealion7-629000000-bestseller.webp",
    status: "bestseller" 
  },
  {
    name: "BYD Denza D9",
    price: "Rp 950,000,000",
    image: "/assets/byd-denzad9-950000000-bestseller.webp",
    status: "bestseller"
  }
];

export default function Home() {
  const generateWhatsAppLink = (carName) => {
    const message = `Halo Rintan, saya tertarik dengan ${carName}. Bisakah kita diskusikan lebih lanjut?`;
    return `https://wa.me/6285215675525?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">BYD Showroom</div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-gray-600 transition-colors">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-gray-600 transition-colors">
                TikTok
              </a>
              <a href="https://wa.me/6285215675525" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience the Future of <span className="text-gray-600">Electric</span> Driving
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover BYD&apos;s innovative electric vehicles with cutting-edge technology, 
            exceptional performance, and sustainable design.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block border">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RP</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Rintan Putri</h3>
                <p className="text-gray-600">Your BYD Sales Consultant</p>
                <p className="text-sm text-gray-500">+62 852-1567-5525</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Electric Vehicle Collection</h2>
            <p className="text-gray-600 text-lg">Choose from our range of innovative electric vehicles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {car.status === "bestseller" && (
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bestseller
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-4">{car.price}</p>
                  
                  <div className="space-y-3">
                    <a
                      href={generateWhatsAppLink(car.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors block text-center font-medium"
                    >
                      Konsultasi via WhatsApp
                    </a>
                    
                    <div className="flex space-x-2">
                      <a
                        href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-center text-sm"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-center text-sm"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Consultant Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">RP</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Meet Your Sales Consultant</h2>
            <h3 className="text-2xl font-semibold mb-2">Rintan Putri</h3>
            <p className="text-gray-600 mb-6">
              Experienced BYD sales consultant ready to help you find the perfect electric vehicle 
              that matches your lifestyle and needs.
            </p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <a
                href="https://wa.me/6285215675525"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                📱 WhatsApp: +62 852-1567-5525
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                📸 Follow on Instagram
              </a>
              <a
                href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                🎵 Follow on TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Visit Our Showroom</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/byd-location-arista-kalimalang.webp"
              alt="BYD Showroom Location - Arista Kalimalang"
              width={1200}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">BYD Arista Kalimalang</h3>
              <p className="text-gray-600">Experience our vehicles firsthand at our modern showroom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Go Electric?</h3>
            <p className="text-gray-300 mb-6">Contact Rintan Putri for personalized consultation and exclusive deals</p>
            <a
              href="https://wa.me/6285215675525?text=Halo%20Rintan%2C%20saya%20ingin%20konsultasi%20tentang%20BYD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block"
            >
              Start Your Electric Journey
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-center space-x-8 mb-4">
              <a href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                TikTok
              </a>
              <a href="https://wa.me/6285215675525" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
            <p className="text-gray-400">© 2025 BYD Showroom - Rintan Putri. Your trusted electric vehicle consultant.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
