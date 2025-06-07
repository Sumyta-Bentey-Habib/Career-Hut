import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import ProfileCard from '../components/ProfileCard';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
          <Banner></Banner>
          
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default HomeLayout;