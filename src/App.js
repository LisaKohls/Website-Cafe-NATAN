import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyPage from "./pages/PrivacyPage";
import Footer from "./components/layout/Footer";
import Error404Page from "./pages/Error404Page";
import Header from "./components/layout/Header";

function App() {

    return (
        <Router>
            <Header/>
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
