import Linkedin from "../assets/Linkedin";
import Curtains from "./Curtains";

const Portfolio = () => {
    return (
        <>
            <Curtains/>
            <div className="portfolioShow">
                <div className="title">
                    <h1>Norik's<br/>Portfolio</h1>
                    <div className="projector"></div>
                </div>
                <div className="aboutme">
                    <div className="paragraph">
                        <p>Full-stack software developer<br/>Energised by Boolean UK's 6-month coding boot camp.<br/>Proficient in <b>JavaScript</b>, <b>Node.js</b>, <b>React.js</b> and <b>CSS</b>, transforming user requirements into stellar software.<br/>Table Tennis doubles competition winner known as the "Sultan of Ping."<br/>Actor, worked with Netflix, Sky and lead role in<br/> "Shakespeare's Mobile"</p>
                        <p></p>
                    </div>
                </div>
                <div className="portfolioStage" >
                    <div className="shopFront">
                        <h3>Uomo</h3>
                        <a href="https://uomo-shopfront.vercel.app" target="_blank" rel="noreferrer">
                            <button className="shopFrontCard card"></button>
                        </a>
                        <p>A full stack website built using <b>React.js</b>, <b>CSS</b> and with <b>Node.js</b>, <b>Express.js</b> and <b>MongoDB</b>. This is a project built and developed in around 6 weeks by 5 software developers and myself. Also mobile responsive. </p>
                    </div>
                    <div className="spotifyReplica">
                        <h3>Spotify Replica</h3>
                        <a href="https://noriks-spotify-replica.vercel.app" target="_blank" rel="noreferrer">
                            <button className="spotifyReplicaCard card"></button>
                        </a>
                        <p>A replica of Spotify I built using <b>HTML</b>, <b>CSS</b> and <b>Javascript</b> where my main focus was on <b>Javascript</b> to achieve the background colour change and blending header.</p>
                    </div>
                    <div className="solarSystem">
                        <h3>Solar System</h3>
                        <a href="https://noriks-solarsystem.vercel.app" target="_blank" rel="noreferrer">
                            <button className="solarSystemCard card"></button>
                        </a>
                        <p>Using <b>React</b> and <b>CSS</b> I aimed to create a solar system registration form focusing on using animations.</p>
                    </div>
                    <div className="poker">
                        <h3>Five card poker</h3>
                        <p>To be added...</p>
                    </div>
                </div>
            </div>
                <div className="footer">
                    Copyright©
                </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/norik-vardanyan/" target="_blank" rel="noreferrer">
                    <Linkedin/>
                </a>
            </div>
        </>
    )
}

export default Portfolio;