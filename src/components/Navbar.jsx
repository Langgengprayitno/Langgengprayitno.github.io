import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo dengan Focus State */}
        <a 
          href="#beranda" 
          className="text-2xl font-bold text-teal-600 dark:text-teal-400 tracking-wider rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          LANGGENG PRAYITNO<span className="text-slate-900 dark:text-white">.</span>
        </a>

        {/* Menu Navigasi */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {['beranda', 'tentang', 'keahlian', 'proyek', 'pengalaman'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className="hover:text-teal-600 dark:hover:text-teal-400 capitalize rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-slate-900 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Kontak */}
        <a 
          href="#kontak" 
          className="hidden md:flex px-6 py-2.5 bg-teal-500 hover:bg-teal-600 dark:hover:bg-teal-400 text-white dark:text-slate-900 text-sm font-bold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          Kontak
        </a>

        {/* Ikon Hamburger untuk HP (Lebar < 768px) */}
        <button 
          className="md:hidden text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          aria-label="Buka menu navigasi"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;