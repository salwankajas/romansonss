import React, { Component } from 'react';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import ServicesPage from './Pages/ServicesPage';
import TestimonialPage from './Pages/TestimonialPage';
import BlogPage from './Pages/BlogPage';
import ContactUsPage from './Pages/ContactUsPage';
import GalleryPage from './Pages/GalleryPage';
import Login from './Pages/loginPage'
import Signup from './Pages/SignupPage';
import ExplorePage from './Pages/ExplorePage';

const App =()=> {
    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/testimonial' element={<TestimonialPage/>}/>
          <Route path='/blog'  element={<BlogPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
        </Routes>
      </>
    );
  }

export default App;
