import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Aboutus from '@/components/aboutus';
import Courseoff from '@/components/coursesoff';
import Projects from '@/components/projects';
import Team from '@/components/team';
const HomePage = () => {
  return (
    <div>
      <Navbar/>

      <Aboutus/>
      
      <Courseoff/>

      <Projects/>

      <Team/>

      <Footer/>
    </div>

  );
};

export default HomePage;