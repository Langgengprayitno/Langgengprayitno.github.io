import React, { useState } from 'react';

const Navbar = () => {
  // State untuk mengontrol buka/tutup menu HP
  const [isOpen, setIsOpen] = useState(false);

  // Daftar menu agar lebih rapi
  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#beranda" className="text-2xl font-bold text-teal-600 dark:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1">
              Langgeng Prayitno.
            </a>
          </div>

          {/* Desktop Menu (Sembunyi di HP, Tampil di Tablet/Desktop) */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-2 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Tombol Hamburger Menu (Hanya Tampil di HP) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} // Aksi untuk mengubah state buka/tutup
              className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  // Ikon Silang (X) jika menu sedang terbuka
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Ikon Garis 3 jika menu tertutup
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Muncul ke bawah di HP) */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)} // Otomatis tutup menu saat link diklik
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;