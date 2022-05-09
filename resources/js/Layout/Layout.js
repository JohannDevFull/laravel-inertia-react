import './layout.css';
import React, { useState } from 'react';
import NavigationBottom from './Components/NavigationBottom.js';
import NavigationMenuTop from './Components/NavigationMenuTop.js';
import Footer from './Components/Footer.js';

function Layout({children}) {

    return (
        
        <div class="cover-container d-flex w-100 h-100  mx-auto flex-column">
            
            <NavigationMenuTop/>

            <NavigationBottom/>

            <main class="container">
                {children}
            </main>

            <Footer/>
             
        </div>
    );
}

export default Layout;