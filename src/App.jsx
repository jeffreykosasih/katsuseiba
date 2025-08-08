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
    <div className='min-h-screen bg-[#eae4d5]'>
      <Navbar />
      <main className='overflow-x-hidden'>
        <section id='home'>
          <Hero />
        </section>
        <section id='menu'>
          <Menus />
        </section>
        <section id='locations'>
          <Banner />
          <Banner2 />
          <Banner3 />
        </section>
        <section id='reservations'>
          <Footer />
        </section>
      </main>
    </div>
  );
};
export default App;
