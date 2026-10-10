import React from 'react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "SIM KGB: Sistem Informasi Kenaikan Gaji Berkala",
      role: "Pengembang Sistem (Magang)",
      problem: "Data kenaikan gaji berkala dikelola manual sehingga proses input dan pelaporan memakan banyak waktu.",
      solution: "Membangun aplikasi web untuk mendigitalkan dan menstrukturkan input data pegawai, kenaikan gaji, serta pelaporan.",
      tech: ["CodeIgniter 4", "MySQL", "PHP"],
      github: "https://github.com/Langgengprayitno",
      demo: "" 
    },
    {
      id: 2,
      title: "NexaDash Starter Kit",
      role: "Frontend Developer",
      problem: "Developer sering menghabiskan banyak waktu untuk menyusun layout dan komponen dashboard admin dari nol pada setiap proyek baru.",
      solution: "Membangun template dashboard admin yang responsif, modern, dan siap pakai untuk mempercepat proses pembuatan UI/UX proyek web.",
      tech: ["React JS", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com/Langgengprayitno", 
      demo: "https://nexadash-starter-kit.vercel.app/"
    },
    {
      id: 3,
      title: "Proyek Berikutnya: Laravel REST API + React",
      role: "Fullstack Developer",
      problem: "Tahap perencanaan dan riset kebutuhan sistem.",
      solution: "Akan mengimplementasikan sistem backend yang tangguh dengan Laravel dan antarmuka modern interaktif menggunakan React JS.",
      tech: ["Laravel", "React JS", "REST API", "MySQL"],
      github: "https://github.com/Langgengprayitno",
      demo: ""
    }
  ];

  return (
    // PERBAIKAN: Ubah id="projects" menjadi id="proyek" di sini
    <section id="proyek" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
          Proyek & Portofolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              className={`border p-6 rounded-xl transition-all duration-300 flex flex-col ${
                project.id === 3 
                  ? 'bg-transparent border-gray-600 border-dashed opacity-80' 
                  : 'bg-gray-800 border-gray-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">Peran: {project.role}</p>
              
              <div className="flex-grow space-y-3 mb-6">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-bold block">Masalah:</span>
                  <p className="text-sm">{project.problem}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-bold block">Solusi:</span>
                  <p className="text-sm">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Area Tombol Links */}
              <div className="mt-auto flex flex-col gap-2">
                {/* Tombol Live Demo */}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Lihat Live Demo
                  </a>
                )}

                {/* Tombol GitHub */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full font-medium py-2 rounded transition-colors duration-200 ${
                    project.id === 3
                      ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {project.id === 3 ? 'Segera Hadir' : 'Lihat Kode di GitHub'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;