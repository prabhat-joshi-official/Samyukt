import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Flow } from './components/Flow';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme to root html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="app-layout">
          <Header theme={theme} toggleTheme={toggleTheme} />
          
          <main>
            <Hero theme={theme} />
            <Flow />
            <Features />
            <Services />
            <Pricing />
            <FAQ />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
