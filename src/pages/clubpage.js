import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Aboutus from '@/components/aboutus';
import Courseoff from '@/components/coursesoff';
import Projects from '@/components/projects';

const HomePage = () => {
  return (
    <div>
      <Navbar/>

      <Aboutus/>
      
      <Courseoff/>

      <Projects/>

      <Footer/>
    </div>

  );
};

export default HomePage;