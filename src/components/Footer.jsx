import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Langgeng Prayitno. Semua hak dilindungi.</p>
        <p className="mt-2 md:mt-0">Dibuat dengan React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;