import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Root;