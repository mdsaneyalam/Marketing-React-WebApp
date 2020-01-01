import React from 'react';

const header = () => {
    return(
        <header id="header">
            <div class="container-fluid">

            <div id="logo" class="pull-left">
                <h1><a href="#intro" class="scrollto">compilia</a></h1>
                
                <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>
            </div>

            <nav id="nav-menu-container">
                <ul class="nav-menu">
                <li class="menu-active"><a href="#intro">Home</a></li> 
                <li><a href="#training">Training</a></li>
                <li><a href="#team">Team</a></li>
                <li class="menu-has-children"><a href="">About</a>
                    <ul>
                    <li><a href="#">Process</a></li>
                    <li><a href="#about">Heritage</a></li>
                    <li><a href="#">Company</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default header;