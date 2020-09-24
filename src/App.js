import React from 'react';
import Navbar from './components/nav-layout/Navbar'
import { BrowserRouter as Router ,Route,Redirect } from 'react-router-dom'
import Home from './components/body-layout/Home'
import About from './components/body-layout/About'

import NewBlog from './components/body-layout/NewBlog';
import Register from './components/nav-layout/RegisterPage';
import Login from './components/nav-layout/LoginPage'; 
import Footer from './components/footer-layout/footer'

import './App.css'

function App() {
  return (
    <div className="App">
    
      <Router>
         <Navbar />
         <Route exact path="/">  <Redirect to="/blogs" /></Route>
        <Route exact path='/blogs' component={ Home } />
      
        <Route exact path='/blogs/about' component={ About } />
        <Route exact path='/blogs/create' component={ NewBlog } />
        <Route exact path='/blogs/signin' component={ Register } />
        <Route exact path='/blogs/login' component={ Login } />
        <Route exact path='/blogs/logout' >  <Redirect to="/blogs" /> </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
