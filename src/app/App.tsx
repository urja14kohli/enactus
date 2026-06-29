import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
}

export default App;
