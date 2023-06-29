import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";




function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
        </Router>
    );
}


export default App;
