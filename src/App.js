import React from 'react';
import './index.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/mainsections/MainPage";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Footer from "./components/layout/Footer";
import Error404 from "./components/Error404";

function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/privacy" element={<Datenschutz />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}


export default App;
