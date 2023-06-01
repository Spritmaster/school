import React from 'react'
import Header from './components/Header';
import "./Website.css"
import SchoolSymbol from './components/SchoolSymbol';
import Selects from './components/Selects';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
    <Header></Header>
    <SchoolSymbol></SchoolSymbol>
    <Selects></Selects>

    <Home></Home>

    </div>
  )
}

export default App