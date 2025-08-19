 import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Toast from './Toast'; // 👈 Import Toast
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
 const Layout = () => {
  console.log("Layout Rendered");
  return (
    <>
          <Toaster position="top-right" reverseOrder={false} />

      <Navbar />
      <main className="min-h-screen  bg-gray-100">
        <Outlet />
      </main>
      <Footer />
      <Toast/>
    </>
  )
}
export default Layout