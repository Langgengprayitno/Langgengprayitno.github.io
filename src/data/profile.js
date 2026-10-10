// Lokasi: src/data/profile.js

export const PROFILE_DATA = {
  name: "Langgeng Prayitno",
  role: "Web Developer (Fullstack/Backend)",
  tagline: "Saya membangun aplikasi web dari tabel database sampai tampilan layar.",
  about: [
    "Saya lulusan S1 Sistem Informasi, Universitas Respati Yogyakarta. Saya terbiasa mengerjakan sistem dari awal: menggali kebutuhan, merancang database, lalu membuat tampilan yang dipakai pengguna.",
    "Pengalaman utama saya adalah membangun aplikasi untuk instansi pemerintah daerah selama magang di Kemantren Tegalrejo, Yogyakarta. Saya cepat belajar dan terbuka mencoba bahasa atau framework baru sesuai kebutuhan tim."
  ],
  contacts: {
    email: "lnggngprytn@gmail.com",
    github: "https://github.com/Langgengprayitno",
    whatsapp: "https://wa.me/6281317440825",
    cv: "/CV_Langgeng_Prayitno_ATS.pdf" // Nanti file CV taruh di folder 'public'
  },
  skills: [
    { category: "Backend", items: ["PHP", "Laravel", "CodeIgniter 4", "Python (dasar)", "REST API (dasar)"] },
    { category: "Frontend", items: ["JavaScript", "React JS", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
    { category: "Database", items: ["MySQL", "Perancangan skema", "Normalisasi"] },
    { category: "Alat & Konsep", items: ["Git/GitHub", "Analisis kebutuhan", "ERP (dasar)", "Data Mining (dasar)"] }
  ],
  projects: [
    {
      id: 1,
      title: "SIM KGB: Sistem Informasi Kenaikan Gaji Berkala",
      meta: "Magang di Kemantren Tegalrejo, Yogyakarta, 2024. Dikembangkan lanjut sebagai skripsi.",
      description: "Aplikasi web untuk mendigitalkan pengelolaan kenaikan gaji berkala pegawai, yang sebelumnya dikerjakan manual.",
      details: {
        Masalah: "Data kenaikan gaji berkala dikelola manual sehingga input dan pelaporan memakan waktu.",
        Solusi: "Sistem berbasis web dengan input data pegawai dan kenaikan gaji yang terstruktur, serta pelaporan.",
        Peran: "Analisis kebutuhan bersama instansi, perancangan database, pengembangan fitur dan antarmuka."
      },
      technologies: ["CodeIgniter 4", "MySQL"],
      link: "https://github.com/Langgengprayitno" // Nanti bisa diganti link repo spesifik
    },
    {
      id: 2,
      title: "Laravel REST API + React",
      meta: "Proyek berikutnya",
      description: "Sedang direncanakan. Bagian ini akan diisi setelah proyek selesai.",
      details: {},
      technologies: ["Laravel", "React JS", "Tailwind CSS"],
      link: "#"
    }
  ],
  experience: [
    {
      title: "Pengembang Sistem Informasi (Magang)",
      meta: "Kemantren Tegalrejo, Yogyakarta, 2024",
      points: [
        "Membangun SIM KGB dengan CodeIgniter 4 dan MySQL.",
        "Menganalisis kebutuhan sistem bersama pihak instansi.",
        "Merancang tabel dan relasi database.",
        "Mengembangkan fitur dan antarmuka untuk input dan pelaporan data."
      ]
    }
  ],
  education: [
    {
      title: "S1 Sistem Informasi",
      meta: "Universitas Respati Yogyakarta, 2022 sampai 2026"
    },
    {
      title: "SMA Negeri 1 Ngawen",
      meta: "2019 sampai 2022"
    }
  ]
};