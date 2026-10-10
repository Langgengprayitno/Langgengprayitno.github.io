import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    // PERUBAHAN: Tambahkan bg-slate-50 text-slate-800 (Light Mode) dan dark:bg-slate-900 dark:text-slate-200 (Dark Mode)
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-teal-500/30 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Kita akan perbarui komponen di bawah ini pada tahap selanjutnya */}
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

// trigger deploy ulang