import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "work", // Untuk membedakan ikon/warna jika diperlukan
      title: "Pengembang Sistem Informasi (Magang)",
      place: "Kemantren Tegalrejo, Yogyakarta",
      date: "2025",
      points: [
        "Membangun Sistem Informasi Manajemen Kenaikan Gaji Berkala (SIM KGB) berbasis web menggunakan CodeIgniter 4 dan MySQL.",
        "Menganalisis kebutuhan sistem bersama pihak instansi untuk memastikan fitur sesuai proses bisnis.",
        "Merancang struktur basis data (skema tabel dan relasi) untuk mendukung pengelolaan data.",
        "Mengembangkan fitur aplikasi dan antarmuka pengguna (UI) untuk efisiensi input dan pelaporan data."
      ]
    },
    {
      id: 2,
      type: "education",
      title: "S1 Sistem Informasi",
      place: "Universitas Respati Yogyakarta",
      date: "2022 - 2026",
      points: []
    },
    {
      id: 3,
      type: "education",
      title: "SMA Negeri 1 Ngawen",
      place: "Ngawen",
      date: "2019 - 2022",
      points: []
    }
  ];

  return (
    // id="pengalaman" digunakan agar link dari Navbar (<a href="#pengalaman">) bisa berfungsi
    <section id="pengalaman" className="py-20 bg-gray-900 text-gray-200 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">
          Pengalaman & Pendidikan
        </h2>
        
        {/* Container untuk Timeline */}
        <div className="relative border-l-2 border-gray-700 ml-3 md:ml-6">
          {experiences.map((item) => (
            <div key={item.id} className="mb-10 ml-8 relative group">
              {/* Titik Timeline */}
              <span className="absolute -left-[41px] flex items-center justify-center w-4 h-4 bg-teal-500 rounded-full ring-4 ring-gray-900 group-hover:bg-teal-400 group-hover:scale-110 transition-all duration-300"></span>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl group-hover:border-teal-500/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-teal-400 font-medium mt-1">{item.place}</p>
                  </div>
                  <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                
                {/* Menampilkan list peluru (bullet points) jika datanya ada */}
                {item.points.length > 0 && (
                  <ul className="mt-4 list-disc list-outside ml-4 text-sm text-gray-400 space-y-2">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;