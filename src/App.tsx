import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';

function App() {
  return (
    <main className="min-h-screen bg-[#080d19]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;