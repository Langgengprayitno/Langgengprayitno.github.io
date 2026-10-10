import React from 'react';

const About = () => {
  return (
    // Menggunakan bg-slate-800 agar warnanya sedikit beda dengan Hero (bg-slate-900), memberi batas visual yang bagus
    <section id="tentang" className="py-20 bg-slate-800 text-slate-200 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Kolom Kiri: Paragraf Tentang Saya */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-teal-400 mb-6 relative inline-block">
              Tentang Saya
              {/* Garis bawah dekoratif */}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500 rounded"></span>
            </h2>
            
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed text-justify md:text-left">
              <p>
                Halo! Saya <span className="text-white font-semibold">Langgeng Prayitno</span>, seorang lulusan Sistem Informasi yang berdedikasi dalam membangun aplikasi web yang efisien, aman, dan skalabel. Fokus utama saya berada di ekosistem <span className="text-teal-300">Fullstack dan Backend Development</span>.
              </p>
              <p>
                Saya memiliki rekam jejak dalam merancang sistem dari tahap awal—mulai dari analisis kebutuhan bisnis, perancangan arsitektur basis data relasional, hingga implementasi antarmuka yang ramah pengguna. Pengalaman saya dalam mendigitalisasi proses manajemen di instansi pemerintahan telah mengasah kepekaan saya terhadap penyelesaian masalah (<em>problem-solving</em>) di dunia nyata.
              </p>
              <p>
                Sebagai seorang pembelajar yang adaptif dan proaktif, saya selalu antusias untuk mengadopsi teknologi baru dan praktik terbaik (<em>best practices</em>) dalam industri perangkat lunak. Saya sangat siap untuk membawa dedikasi saya, berkolaborasi dalam tim profesional, dan menghasilkan produk digital yang berdampak positif.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Kartu Nilai Profesional (Soft Skills) */}
          <div className="md:w-1/3 w-full">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-xl hover:border-teal-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Nilai Profesional</h3>
              
              <ul className="space-y-5">
                {/* Item 1 */}
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold">Problem Solver</h4>
                    <p className="text-sm text-slate-400 mt-1">Mampu membedah masalah kompleks menjadi solusi teknis yang terstruktur.</p>
                  </div>
                </li>
                
                {/* Item 2 */}
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold">Pembelajar Cepat</h4>
                    <p className="text-sm text-slate-400 mt-1">Sangat adaptif dalam mempelajari framework dan bahasa pemrograman baru.</p>
                  </div>
                </li>
                
                {/* Item 3 */}
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold">Komunikatif & Kolaboratif</h4>
                    <p className="text-sm text-slate-400 mt-1">Terbiasa berkomunikasi aktif dengan tim untuk memastikan tujuan proyek tercapai.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;