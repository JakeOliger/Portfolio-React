import React from "react";
import Resume from "../snippets/Resume.js";

export default class Projects extends React.Component {
    componentDidMount() {
        document.title = "Projects | JakeOliger.com";
    }
    
    render() {
        return (
            <section id="content">
                <h2>Projects</h2>
                <div className="page-banner chapel"><p>Jake playing guitar for a morning chapel at Camp Tecumseh</p></div>
                <Resume />
                <p>This is a brief description of some of the major projects I've worked on in my programming career. Smaller projects are not presently listed, but I may make a separate page for those in the future. My recent interests have led me offline, but I hope to integrate these new interests with my Computer Science background, so stay tuned for new additions to this page.</p>
                <h3>JakeOliger.com <span> &mdash; (2019-2022)</span></h3>
                <p className="indented">This website, created in its current relative form in early 2019, was re-vamped in early 2020. Originally, it was built using a PHP framework known as Laravel. When I began the most recent update, I decided to migrate the website to a CMS known as October as a learning exercise. After I learned that OctoberCMS went paid, I re-ported the site back to plain Laravel in late 2021. Eventually I may actually try to make something on this site complicated enough that it actually warrants using a framework. There is also <a href="https://github.com/JakeOliger/Portfolio">a GitHub repository for this website</a> as of December 2021.</p>
                <p className="indented">In February 2022, I practiced using React and re-created my website using that framework. That project can be found right here! You are currently viewing it. Thank you. The GitHub repository for that project can be found <a href="https://github.com/JakeOliger/Portfolio-React">here</a>.</p>
                <h3>Lonely Laser <span> &mdash; (2021)</span></h3>
                <p className="indented"><img className="project-thumb" src="/images/lonely-laser.jpg" alt="Lonely Laser (Unity)" title="Lonely Laser (Unity)" />This is my midterm (and final) project for C292 Game Programming at Indiana University. I call it <a href="https://joliger.itch.io/lonely-laser">Lonely Laser</a> It is something of a clone of another game called <a href="https://mrkos.itch.io/burnout">Burnout</a>. Both are playable at those hyperlinks online at Itch.IO. Lonely Laser can also be found <a href="https://github.com/JakeOliger/c292-midterm">here on my GitHub</a>.</p>
                <p className="indented">I created the game using Unity, and also using assets from KenneyNL and NASA (links and attribution on GitHub). The sound effects were made by yours truly.</p>
                <p className="indented">It is played by clicking and dragging to "slingshot" the player across space. The aim is to hit enemies. While moving, you are invincible. While stationary, you are completely vulnerable. If you don't hit anything in a given "sling", you explode and lose!</p>
                <h3>"What Makes A Patch Distinct?": An Attempt <span> &mdash; (2021)</span></h3>
                <p className="indented"><img className="project-thumb" src="/images/whatmakesapatchdistinct.jpg" alt="The Shepherd output from the project" title="The Shepherd output from the project" />My final project for B457 Computer Vision at Indiana University was to implement an academic paper in the field of Computer Vision. I chose <a href="https://ieeexplore.ieee.org/document/6618995">"What Makes a Patch Distinct"</a> by Margolin et. al.</p>
                <p className="indented">This project can be found <a href="https://github.com/JakeOliger/What-Makes-A-Patch-Distinct">Here on GitHub</a> and I've re-hosted <a href="/dl/WMAPD - An Attempt - Jake Oliger.pdf">the paper I presented describing the project</a>.</p>
                <p className="indented">The goal of the paper was to find an efficient algorithm for detecting image salience; in other words, to determine what part of the image is visually "interesting" and do it quickly. Margolin et. al. use a concept called SLIC (simple linear iterative clustering) superpixels to focus on and compartmentalize the most color and pattern variant parts of the image. From there, they pull another few tricks to analyze the image, which I describe in detail in the paper. My implementation is not a perfect replication of their project due to time limitations which stifled my ability to fully research and understand their methods, but it is a fairly faithful representation of their findings and turned out better than I had originally expected.</p>
                <h3>Pong for iOS <span> &mdash; (2021)</span></h3>
                <p className="indented">This was my final project for C323 iOS Development at Indiana University. This was a group project between me and one other individual, who contributed primarily some of the layout for the settings page. It was originally created, tracked, and hosted <a href="https://github.iu.edu/C323-Summer2021/Team-10">here on IU GitHub</a>, which for access and control reasons I've re-hosted <a href="https://github.com/JakeOliger/Pong-for-iOS">here on my personal GitHub account</a>.</p>
                <p className="indented">The project was created using Swift in Xcode. I do not own a Mac or iPhone, so I had to use a Mac remotely provided by Indiana University. It has as features a local leaderboard, settings to change difficulty and aesthetics, as well as a fully functional Pong game, all split between tabs. Unfortunately, since I don't have access to a Mac, I am currently unable to screengrab examples from the application. If anyone has a Mac and Xcode and would like to screengrab the app for me, that would be much appreciated!</p>
                <h3>Software Group <span> &mdash; (2018)</span></h3>
                <p className="indented"><img className="project-thumb" src="/images/chess.png" alt="Chess (ReactJS)" title="Chess (ReactJS)" />While at Software Group, to make myself useful, I learned various methods and frameworks by doing small projects, sometimes at the direction of supervisors and sometimes on my own volition, but always under supervision. These are the projects I can share here. <span className="italic">I must emphasize that these are unpolished learning exercises.</span></p>
                <ul className="indented">
                    <li><a href="https://github.com/JakeOliger/Chess">Chess</a> (ReactJS)</li>
                    <li><a href="https://github.com/JakeOliger/TicTacToe-React">Tic-Tac-Toe</a> (ReactJS)</li>
                    <li><a href="https://github.com/JakeOliger/SimpleAndroidCalculator">Basic Calculator</a> (Android)</li>
                </ul>
                <h3>Plow Digital: Women's Health Trivia <span>&mdash; (2016-17)</span></h3>
                <p className="indented"><img className="project-thumb" src="/images/howwhenwhi.jpg" alt="How, When, WHI (PhaserIO)" title="How, When, WHI (PhaserIO)" />I was the primary front-end developer of the <a href="http://www.howwhenwhi.com/">Women's Health Initiative website trivia game</a>. A backend system was developed concurrently, with my consulation to ensure a neat fit with the fontend app, by a senior software engineer at Plow Digital.</p>
                <h3>Plow Digital: Build-A-Bear Adventures <span>&mdash; (2016)</span></h3>
                <p className="indented">Under the direction of the Director of Software Engineering at Plow Digital, I assisted in testing and development of the <a href="http://play.buildabear.com/play/content/build-a-bear-adventures.html">Build-A-Bear Adventures</a> digital board game.</p>
                <h3>Early, Smaller Work at Plow Digital <span>&mdash; (2015-16)</span></h3>
                <p className="indented">Prior to the above larger projects, I...</p>
                <ul className="indented">
                    <li>individually developed, under the supervision of a senior web developer at Plow Digital, an Application Programming Interface (API) for use by an iPad app that was being developed simultaneously to handle information processed by sales reps at trade shows.</li>
                    <li>created a WordPress plugin to interact with the same database used by the above API for the trade show rep website.</li>
                    <li>adapted a legacy website with hundreds of pages to meet a long list of necessary changes in the interim before a newer site was rolled out.</li>
                    <li>helped test applications and document bugs for fixing by the lead developers on those projects.</li>
                </ul>
                <h3>Issues 2016 <span> &mdash; (2016)</span></h3>
                <p className="indented"><img className="project-thumb" src="/images/issues2016.jpg" alt="Issues 2016" title="Issues 2016" />Issues 2016 was a quick 'n' dirty personal project from during the 2016 election primaries in which I toyed around with, primarily, creating a quiz to anonymize campaign statements made by candidates in an attempt to neutrally determine who an individual aligns most closely with on policy. This is a flawed project with an imperfect &mdash; and incomplete &mdash; execution. The main issue is probably how easy it is to tell who said what just based on the unique voice each candidate has, which shines through even in a text format. Some of them were also just sloppily anonymized, if anonymized at all. There were a lot of quotes to go through and my focus was admittedly more on getting the functionality working than having it look professional. Another issue is the quiz is quite long, so it took some convincing just to get people to try it out, haha.</p>
                <h3>GlobalOffensiveBot <span>&mdash; (2014-15)</span></h3>
                <p className="indented">This is a harder project to show off because its use-case is very specific and behind-the-scenes, but it is one of the larger projects I have ever worked on in terms of scale of the work. Despite the fact that I left the project years ago, it is still undergoing active development and is still used regularly by its primary target users: the moderators of reddit's Counter-Strike: Global Offensive community. It can be found on my old GitHub account: <a href="https://github.com/Jpon9/GlobalOffensiveBot-Web">webpanel project</a>, <a href="https://github.com/Jpon9/GlobalOffensiveBot">bot project</a>.</p>
                <p className="indented">The project, put quickly, is a combination of a Python bot and a webpanel running on a virtual private Linux server to aid in the running of that 600,000+ user community. The major features that I developed for it are as follows, broken down into two sections: the webpanel and the bot.</p>
                <h4 className="indented">Webpanel</h4>
                <ul className="indented">
                    <li>A user system with varying permissions levels to restrict access to sensitive material to the appropriate moderators.</li>
                    <li>A Mongo database to contain a variety of datasets such as mod votes on candidate applications and a variety of other datasets detailed in the bot section.</li>
                    <li>Forms with which bot settings could be changed on-the-fly.</li>
                    <li>Voting pages in which moderators could vote on new mod candidates and leave comments on each candidate. The votes and comments were not visible until a vote was cast.</li>
                    <li>A page on which the above candidates were automatically pared down and given another vote round, a sort of phase-two in the application process.</li>
                    <li>The bulk of the webpanel code is PHP. Laravel is the framework used. Google Charts were used to display certain statistics.</li>
                </ul>
                <h4 className="indented">Bot</h4>
                <ul className="indented">
                    <li>The bot is written in Python.</li>
                    <li>A regular collection of activity made in the community by users and actions, indexed in the Mongo database for archival and perusal by the moderators to aid in mod duties.</li>
                    <li>Dynamic updating of a listing of popular livestreams, a calendar of community events, a list of upcoming competitions, and a count of how many people were using our Teamspeak, IRC, and Discord servers, bolstering their popularity by showing when they are active.</li>
                    <li>It's probably prudent to mention that for each of the services listed in the above bullet point, a different API had to be used and implemented in the bot &mdash; to gather livestreams alone, four separate APIs were used.</li>
                </ul>
                <h3>SteamToolbox <span>&mdash; (2013-14)</span></h3>
                <p className="indented"><img className="project-thumb" src="/images/steamtoolbox.jpg" alt="SteamToolbox.com" title="SteamToolbox.com" />This was my first large web project. SteamToolbox is a website for displaying various statistics about your Steam profile, such as which games you play the most, who your oldest friends are, what the opportunity cost of the time spent playing games is, statistics specific to a few games, etc. It was pretty popular among my friends, but I never really made an effort to spread it wider than that. I wish I had. There are other sites like it, but I think mine had potential to be one of the best, with a little refining and promotion.</p>
                <p className="indented">The main functionality of this site is written in PHP and Javascript. The primary challenge was processing all the data from the Steam API in an efficient manner, storing things that could be stored and fetching things that couldn't be.</p>
                <h3>MCBasewars <span>&mdash; (2013)</span></h3>
                <p className="indented">This is an old plugin built for a Minecraft server system called Bukkit, which is what most people used at the time. My plugin replicated a Garry's Mod game mode called Basewars, where individuals set up bases wherein they would "print" in-game money and hoard it, using their money to invest in other schemes to create more money, allthewhile fending off marauders or marauding themselves. This project was built, as all Minecraft mods are, in Java. At the time it was one of the larger code sets I had ever created, being over 6,000 lines of code, if I remember correctly. Unfortunately, I've since lost the code. This was before I knew how to use things like Git or Subversion.</p>
                <p className="indented">This is a project I kind of built, <a href="https://dev.bukkit.org/projects/mcbasewars">published</a>, and forgot about. Over 250 server maintainers downloaded it and a comment was left in 2016 from someone making a suggestion, so it seems as though some people used it and enjoyed it.</p>
                <h3>Previous Work</h3>
                <p className="indented">I've been programming since around 2008 or 2009, but the projects from back then hardly demonstrate present ability <span className="italic">(nor can I find half of them because I didn't consistently use version control or host them)</span>, so they are not included here.</p>
            </section>
        );
    }
}