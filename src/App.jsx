import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/pages' element={ <Home /> } />
            <Route path='/pages' element={ <About /> } />
            <Route path='/pages' element={ <Projects /> } />
        </Routes>
    </Router>
  );
}

export default App
