import React from 'react';
import profilImg from '../assets/aku1.png'; 

const Hero = () => {
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center min-h-screen overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Kolom Kiri: Teks */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
            Saya membangun aplikasi web dari <span className="text-teal-600 dark:text-teal-400">tabel database</span> sampai <span className="text-teal-600 dark:text-teal-400">tampilan layar.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
            Halo, saya <span className="text-slate-900 dark:text-white font-semibold">Langgeng Prayitno</span>. Lulusan Sistem Informasi yang antusias membangun solusi digital sebagai Web Developer (Fullstack/Backend).
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="/CV_Langgeng_Prayitno_ATS.pdf" 
              download
              className="px-6 py-3 bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white dark:text-slate-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Unduh CV
            </a>
            <a 
              href="https://github.com/Langgengprayitno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-700 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Style Cutout & Elemen Abstrak */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-64 sm:w-72 md:w-96 flex justify-center items-end group">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-teal-200/50 dark:bg-teal-500/20 -rotate-12 rounded-[3rem] blur-xl transition-all duration-500 group-hover:bg-teal-300/50 dark:group-hover:bg-teal-500/30"></div>
            
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto text-teal-500/30 dark:text-teal-600/60 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-6" 
              viewBox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.3,-40.5C85.5,-25.8,91.8,-10.3,90.3,4.6C88.7,19.5,79.4,33.9,69.5,47.1C59.6,60.3,49.2,72.2,35.5,78.5C21.8,84.7,4.8,85.2,-10.5,81.1C-25.7,76.9,-39.1,68,-51.2,56.7C-63.3,45.4,-74,31.7,-79.8,15.6C-85.5,-0.6,-86.2,-19.1,-79.5,-34.5C-72.7,-50,-58.5,-62.4,-43.3,-68.9C-28.1,-75.4,-11.9,-75.9,2.8,-80.1C17.5,-84.3,32.4,-83.4,45.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
            </svg>

            <img 
              src={profilImg} 
              alt="Langgeng Prayitno" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-xl dark:drop-shadow-[0_10px_20px_rgba(20,184,166,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;