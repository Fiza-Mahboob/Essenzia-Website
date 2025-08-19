import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext.jsx';
import { AppProvider } from './context/AppContext';
import App from './App';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppProvider>

    </ThemeProvider>
  </React.StrictMode>
);
