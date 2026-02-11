import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './views/components/Layout';
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
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;