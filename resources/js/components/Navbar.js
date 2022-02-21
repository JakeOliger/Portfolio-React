import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="nav-container">
                <div id="open-drawer">
                    <svg version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                    </svg>
                </div>
                <div id="inner-nav-container">
                    <a href="/" id="name-logo">Jake&nbsp;Oliger</a>
                    <nav id="long-nav">
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