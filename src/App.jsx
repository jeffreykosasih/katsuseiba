import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banners/Banner';
import Banner2 from './components/Banners/Banner2';
import Banner3 from './components/Banners/Banner3';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-[#eae4d5] w-full overflow-x-hidden'>
      {/* Navigation */}
      <header className='sticky top-0 z-40 bg-[#eae4d5]/95 backdrop-blur-sm border-b border-stone-200/20'>
        <Navbar />
      </header>

      {/* Main content */}
      <main className='w-full overflow-x-hidden'>
        {/* Hero Section */}
        <section
          id='home'
          className='w-full min-h-screen flex items-center py-4 sm:py-8 md:py-12'
        >
          <div className='w-full'>
            <Hero />
          </div>
        </section>

        {/* Menu Section */}
        <section id='menu' className='w-full responsive-py bg-[#eae4d5]'>
          <Menus />
        </section>

        {/* About Section */}
        <section
          id='about'
          className='w-full responsive-py bg-gradient-to-b from-[#eae4d5] to-stone-100'
        >
          <Banner />
        </section>

        {/* Locations Section */}
        <section id='locations' className='w-full responsive-py bg-stone-100'>
          <Banner2 />
        </section>

        {/* Reservations Section */}
        <section
          id='reservations'
          className='w-full responsive-py bg-gradient-to-b from-stone-100 to-[#eae4d5]'
        >
          <Banner3 />
        </section>
      </main>

      {/* Footer */}
      <footer className='w-full'>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
