import React from 'react';

const Skills = () => {
  // Data keahlian disesuaikan dengan CV kamu
  const skillCategories = [
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "CodeIgniter 4", "Python (dasar)", "REST API (dasar)"]
    },
    {
      title: "Frontend",
      skills: ["JavaScript", "React JS", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Database",
      skills: ["MySQL", "Perancangan skema", "Normalisasi"]
    },
    {
      title: "Alat & Konsep",
      skills: ["Git/GitHub", "Analisis kebutuhan", "ERP (dasar)", "Data Mining (dasar)"]
    }
  ];

  return (
    // bg-slate-200 untuk light mode, bg-slate-800 untuk dark mode agar kontras section ini terlihat jelas
    <section id="keahlian" className="py-20 bg-slate-300 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Section seperti di gambar: Garis Teal + Teks */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-1 bg-teal-500 rounded"></div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            Keahlian
          </h2>
        </div>
        
        {/* Grid Responsive: 1 kolom (HP 360px), 2 kolom (Tablet), 4 kolom (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              // tabIndex="0" agar kartu bisa diakses dengan tombol Tab di keyboard
              tabIndex="0"
              className="bg-slate-600 dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-500 dark:border-slate-600 hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
            >
              {/* Judul Kategori */}
              <h3 className="text-xl font-semibold text-teal-400 mb-6">
                {category.title}
              </h3>
              
              {/* Kumpulan Badge/Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-slate-500 dark:bg-slate-800 text-white text-sm font-medium px-3 py-1.5 rounded hover:bg-slate-400 dark:hover:bg-slate-900 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;