import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="drawer-container">
                <div id="drawer-top-bar">
                    <div id="close-drawer">
                        <svg version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                        </svg>
                    </div>
                </div>
                <div id="drawer-content">
                    <nav id="drawer-nav">
                        <NavLink activeClassName="active" to="/">Home</NavLink>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                        <NavLink activeClassName="active" to="/projects">Projects</NavLink>
                        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                     </nav>
                </div>
            </div>
        );
    }
}