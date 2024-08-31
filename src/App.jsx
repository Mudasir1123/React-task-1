import React from 'react';
import Header from './header.jsx';
import ProfileCard from './profileCard.jsx';
import Footer from './footet.jsx';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <ProfileCard />
            <Footer />
        </div>
    );
};

export default App;
