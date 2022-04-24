import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// import './css/style.scss';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        <Outlet />
        {/*  Page content */}

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
}
