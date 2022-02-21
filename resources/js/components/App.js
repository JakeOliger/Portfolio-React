import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

let rootElement = document.getElementById('app-root');
if (rootElement)
    ReactDOM.render((<App />), rootElement);