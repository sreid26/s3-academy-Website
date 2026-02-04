import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { About } from './views/About';
import { Basketball } from './views/Basketball';
import { Admissions } from './views/Admissions';
import { Faculty } from './views/Faculty';
import { Contact } from './views/Contact';
import { Academics } from './views/Academics';
import { Alumni } from './views/Alumni';
import { Donate } from './views/Donate';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');

  // Scroll to top on page change for better UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home onNavigate={setActivePage} />;
      case 'about': return <About />;
      case 'academics': return <Academics />;
      case 'basketball': return <Basketball />;
      case 'admissions': return <Admissions />;
      case 'faculty': return <Faculty />;
      case 'alumni': return <Alumni />;
      case 'donate': return <Donate />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={(id) => setActivePage(id)}>
      {renderPage()}
    </Layout>
  );
};

export default App;