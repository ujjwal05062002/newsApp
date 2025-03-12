import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}  />
        </Routes>
        <Footer />
        </BrowserRouter>
      </>
    );
  }
}
