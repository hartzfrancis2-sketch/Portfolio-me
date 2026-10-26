import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import Footer from './component/Footer';

function App() {
  return (
    <main className="min-h-screen bg-[#080d19]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;