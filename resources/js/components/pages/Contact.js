import React from "react";
import Resume from "../snippets/Resume.js";

export default class Contact extends React.Component {
    componentDidMount() {
        document.title = "Contact | JakeOliger.com";
    }

    render() {
        return (
            <section id="content">
                <h2>I'd love to hear from you</h2>
                <div className="page-banner vratsa-4"><p>Photo I took of a ridge near Vratsa, Bulgaria</p></div>
                <Resume />
                <p>You can reach me at <a href="mailto:jakeoliger@gmail.com">jakeoliger@gmail.com</a>. I will get back to you, if appropriate, as soon as I'm able.</p>
                <p>Alternatively, you can find me on <a href="https://linkedin.com/in/jake-oliger/">LinkedIn</a>.</p>
            </section>
        );
    }
}