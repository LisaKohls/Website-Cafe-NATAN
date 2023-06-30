import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Footer from "./components/Footer";


function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/privacy" element={<Datenschutz />} />
            </Routes>
            <Footer />
        </Router>
    );
}


export default App;
