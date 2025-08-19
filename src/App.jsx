import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes'
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import AOS from 'aos';




function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return <AppRoutes />
}

export default App
