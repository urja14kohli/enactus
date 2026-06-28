import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
