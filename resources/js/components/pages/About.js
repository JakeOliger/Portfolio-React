import React from "react";
import Resume from "../snippets/Resume.js";

export default class About extends React.Component {
    componentDidMount() {
        document.title = "About | JakeOliger.com";
    }

    render() {
        return (
            <div>
                <div id="content-container">
                    <section id="content">
                        <h2>About Me</h2>
                        <div className="page-banner rappel"><p>Jake rappelling after a climb in El Potrero Chico, Mexico</p></div>
                        <Resume />
                        <h3>Short History</h3>
                        <p>I'm a child of the Midwest, born and raised in central Indiana. I attended a Catholic elementary school before moving into the Carmel Clay school system where I attended Carmel Middle and Carmel High School. During part of high school, I worked at Carmel Clay Public Library sorting and shelving library materials. In the summer between my Junior and Senior year, I interned at Plow Digital in downtown Indianapolis. I completed my first year of college at Indiana University&mdash;Purdue University Indianapolis while working at Plow Digital as a contractor. The following year, I transferred to Indiana University Bloomington where I currently study and reside.</p>
                        <h3>Internship in Bulgaria</h3>
                        <p>During the summer of 2018, I had the great fortune to do an internship in Sofia, Bulgaria, for a company called Software Group. While in Bulgaria, I further sharpened my skills while experiencing their great country and culture. Immediately following my time in Bulgaria, I was able to do a quick tour of some major European cities: Amsterdam, Berlin, Rome, Paris, and Bruges. It was a summer I will never forget.</p>
                        <h3>Camp Tecumseh</h3>
                        <p>The summer of 2019 was a very challenging and fun one &mdash; I worked at Camp Tecumseh YMCA as an overnight camp counselor for 14 and 15 year old boys. It was a 'round-the-clock job that required strong interpersonal skills, adaptability, and discipline. It was an emotionally draining and extraordinarily fulfilling summer that gave me memories and friendships I will cherish for the rest of my days.</p>
                        <h3>Recent Interests</h3>
                        <p>I can be a bit eclectic when it comes to my free time activities, but I generally divide it between programming, guitar, climbing, reading, and photography. As I develop this website further, I hope to find ways of sharing these passions with you.</p>
                        <p>My intellectual interests have lately been veering into cognitive science, linguistics, and philosophy. My reading list contains a lot of texbooks, Jon Meacham, Fyodor Dostoevsky, Isaac Asimov, and St. Thomas Aquinas &mdash; in other words, it's all over the place. I'm in a bit of an early 20th century kick right now. My favorite recently read books are...</p>
                        <ul>
                            <li>Andrew Robert's <span className="italic">Churchill: Walking With Destiny</span> because I wanted to learn about this man I'd heard so much about but knew so little. The book paints him in an unrealistically positive light, but it's chock full of fasinating facts and stories.</li>
                            <li>C.S. Lewis's <span className="italic">The Problem of Pain</span> is about why there is evil and pain in a world created good by God. A very compelling read. Heavy stuff.</li>
                            <li>Barbara Tuchman's <span className="italic">The Guns of August</span> is a brilliant and horrifying retelling of the outbreak of World War I and how we blundered our way into it.</li>
                            <li>Robert Caro's <span className="italic">The Path to Power</span> is the beginning of a cursed series. You try explaining to people how a few thousand page series about Lyndon B. Johnson is so darn compelling. It's impossible. But it is!</li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}