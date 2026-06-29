import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
