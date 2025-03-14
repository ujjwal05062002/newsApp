import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      language : "hi"
    }
  }
  changeLanguage = (data)  => {
    this.setState({language:data})
}
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar changeLanguage={this.changeLanguage} />
        <Routes>
            <Route path='/' element={<Home language={this.state.language} q="All" />}  />
            <Route path='/All' element={<Home language={this.state.language} q="All" />}  />
            <Route path='/Politics' element={<Home language={this.state.language} q="Politics" />}  />
            <Route path='/Science' element={<Home language={this.state.language} q="Science" />}  />
            <Route path='/Technology' element={<Home language={this.state.language} q="Technology" />}  />
            <Route path='/Education' element={<Home language={this.state.language} q="Education" />}  />
            <Route path='/Crime' element={<Home language={this.state.language} q="Crime" />}  />
            <Route path='/Sports' element={<Home language={this.state.language} q="Sports" />}  />
            <Route path='/Cricket' element={<Home language={this.state.language} q="Cricket" />}  />
            <Route path='/Entertainment' element={<Home language={this.state.language} q="Entertainment" />}  />
            <Route path='/Jokes' element={<Home language={this.state.language} q="Jokes" />}  />
        </Routes>
        <Footer />
        </BrowserRouter>
      </>
    );
  }
}
