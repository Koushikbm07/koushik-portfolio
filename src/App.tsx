
import { useScrollReveal } from './utils/animations';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // Initialize scroll animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-primary/30 selection:text-white pb-0">
      <Navigation />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
