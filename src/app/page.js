"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const cars = [
  {
    name: "BYD Atto 1",
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
    status: "bestseller",
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

const galleryImages = [
  {
    src: "/assets/byd-m6.jpg",
    alt: "BYD M6",
    title: "BYD M6"
  },
  {
    src: "/assets/byd-seal.jpg", 
    alt: "BYD Seal",
    title: "BYD Seal"
  },
  {
    src: "/assets/byd-sealion.jpg",
    alt: "BYD Sealion",
    title: "BYD Sealion"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-[#161616] shadow-md fixed w-full top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/byd-logo.webp"
                alt="BYD Logo"
                width={60}
                height={30}
                className="h-8 w-auto"
              />
              <div className="border-l border-gray-600 pl-4">
                <div className="text-lg font-bold text-white">BYD Jakarta Timur</div>
                <div className="text-xs text-gray-300">Kalimalang</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white font-medium transition-colors">Home</a>
              <a href="#produk" className="text-gray-300 hover:text-white font-medium transition-colors">Produk</a>
              <a href="#kontak" className="text-gray-300 hover:text-white font-medium transition-colors">Kontak</a>
              <a href="https://wa.me/6285215675525" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors font-medium">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                BYD Jakarta Timur
                <span className="block text-gray-600">Kalimalang</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Official Website Marketing Dealer BYD Jakarta Timur - Kalimalang. 
                Pilih Mobil impianmu Bersama Kami dengan promo menarik dan jaminan harga paling murah.
              </p>
              
              {/* Sales Consultant Card */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">RP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-black">Rintan Putri</h3>
                    <p className="text-gray-600 font-medium">Sales Executive</p>
                    <p className="text-gray-500 text-sm">+62 852-1567-5525</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="https://wa.me/6285215675525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium text-sm flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.488"/>
                    </svg>
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center font-medium text-sm flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="truncate">Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@byd.rintan?_t=ZS-8y4vPyQnvS3&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center font-medium text-sm flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <span className="truncate">TikTok</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Mobil Listrik No. 1 Di Dunia</h3>
                <p className="text-gray-300 mb-6">
                  Teknologi terdepan dengan jaminan kualitas global. 
                  Rasakan pengalaman berkendara yang revolusioner.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">7+</div>
                    <div className="text-sm text-gray-300">Model Tersedia</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-300">Customer Support</div>
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
            <h2 className="text-4xl font-bold text-black mb-4">Pricelist BYD Arista Kalimalang Jakarta Timur</h2>
            <p className="text-xl text-gray-600">Pilihan lengkap kendaraan listrik dengan teknologi terdepan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200">
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
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                    {car.range}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-black mb-1">{car.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{car.variant}</p>
                  <p className="text-xl font-bold text-black mb-4">{car.price}</p>
                  
                  <a
                    href={generateWhatsAppLink(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium text-sm flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.488"/>
                    </svg>
                    <span>Konsultasi Sekarang</span>
                  </a>
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
            <h2 className="text-4xl font-bold text-black mb-4">Kunjungi Showroom Kami</h2>
            <p className="text-xl text-gray-600">BYD Arista Kalimalang - Jakarta Timur</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Jam Operasional</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Minggu</span>
                    <span className="font-medium">00:01 - 23:59 WIB</span>
                  </div>
                  <div className="text-black font-medium flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>BUKA</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Informasi Kontak</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.488"/>
                    </svg>
                    <span className="text-white">WhatsApp: +62 852-1567-5525</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-white">Instagram: @bydarista.rintan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.24 3.24 0 01-1.55 0 3.28 3.28 0 01-2.84-3.78V2H4.13v5.73a3.87 3.87 0 01-3.14 3.78 3.24 3.24 0 01-1.55 0 3.28 3.28 0 01-2.84-3.78V2H-2.08v.44a4.83 4.83 0 01-3.77 4.25z"/>
                    </svg>
                    <span className="text-white">TikTok: @byd.rintan</span>
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
                <h3 className="text-xl font-bold text-black mb-2">BYD Arista Kalimalang</h3>
                <p className="text-gray-600 mb-4">
                  Showroom modern dengan layanan profesional untuk pengalaman test drive terbaik
                </p>
                <a
                  href="https://wa.me/6285215675525?text=Halo%20Rintan%2C%20saya%20ingin%20berkunjung%20ke%20showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-gray-700 font-medium space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Jadwalkan Kunjungan</span>
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
            <h2 className="text-4xl font-bold text-black mb-4">Gallery Serah Terima</h2>
            <p className="text-xl text-gray-600">Dokumentasi serah terima kendaraan antara pihak Dealer dan Pelanggan</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-[40rem] overflow-hidden">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'translate-x-0' : 
                      index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-200">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-black">Customer Satisfaction</h3>
                <p className="text-gray-600">Kepuasan pelanggan adalah prioritas utama kami</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-200">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-black">Professional Service</h3>
                <p className="text-gray-600">Layanan profesional dari konsultasi hingga after sales</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-200">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-black">Best Price Guarantee</h3>
                <p className="text-gray-600">Jaminan harga terbaik untuk setiap pembelian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Beralih ke Kendaraan Listrik?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi Rintan Putri sekarang untuk konsultasi personal dan dapatkan penawaran terbaik untuk kendaraan impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285215675525?text=Halo%20Rintan%2C%20saya%20ingin%20konsultasi%20tentang%20BYD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.488"/>
              </svg>
              <span>Konsultasi via WhatsApp</span>
            </a>
            <a
              href="tel:+6285215675525"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-colors font-bold text-lg flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Telepon Langsung</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">BYD Jakarta Timur</div>
              <p className="text-gray-300 mb-4">
                Dealer resmi BYD Jakarta Timur - Kalimalang. Solusi kendaraan listrik terpercaya dengan layanan terbaik.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/bydarista.rintan?igsh=ZHVsdmV2bXJpNzBl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
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
                   className="text-gray-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.488"/>
                  </svg>
                  <span>WhatsApp: +62 852-1567-5525</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Arista Kalimalang, Jakarta Timur</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Buka 24/7</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Sales Consultant</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="font-bold text-white">Rintan Putri</div>
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
