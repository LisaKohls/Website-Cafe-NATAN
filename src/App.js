import React from 'react';
import './index.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/pages/MainPage";
import ImpressumPage from "./components/pages/ImpressumPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import Footer from "./components/layout/Footer";
import Error404Page from "./components/pages/Error404Page";

function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/impressum" element={<ImpressumPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="*" element={<Error404Page />} />
            </Routes>
            <Footer />
        </Router>
    );
}


export default App;
