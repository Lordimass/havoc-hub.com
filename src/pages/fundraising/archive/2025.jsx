import { TitleBox, DonationLog, VODs } from "./archiveCommon"
import { archiveData } from "./archiveData"
import Header from "../../../assets/components/header"
import Footer from "../../../assets/components/footer"
import "./css/2025.css"
import "../../../assets/js/donation-quants"
import { Leaderboard2025 } from "../../../assets/components/podium"

export default function Year2025() {
    const year = 2025
    return (<> <Header /> <div className="content">
    
    <TitleBox year={archiveData[year]}/>
    <VODs year={year}/>

    <div className="stream-main-box-container">
        <div className="main-box" id="stream-main-box">
            <div className="stream-embed-container">
                <div id="stream-embed"></div>
            </div>
            <div id="info-tab-button" className="info-tab-button"><div><p>Info</p></div></div>
            <div id="chat-tab-button" className="chat-tab-button"><div><p>Chat</p></div></div>
            <div id="info-tab" className="info-tab">
                <div className="info-tab-text">
                    <h1 id="title-1">24HR STREAM</h1>
                    <div className="title-2-container"><h1>2025</h1></div>
                    <p>
                        Welcome to the 6th stream in our series of annual charity livestreams!
                        <br/><br/>
                        We invite you to join us on the 1st of February from 6am GMT to raise
                        money for <b>Stonewall</b>, a charity which is very close to all of us as a team.

                        Check out our members page to find out about everyone who makes up our group,
                        or use the buttons below for more.
                    </p>
                </div>
                <div className="info-tab-buttons">
                    <a href="#stonewall-box"><button className="more-button">Find Out More</button></a>
                    <a href="https://tiltify.com/+reformation-fundraising/reformation-fundraising-2025" target="_blank"><button className="donate-button">Donate</button></a>
                </div>
            </div>
            <div id="chat-tab" className="chat-tab">
                <iframe src="https://www.twitch.tv/embed/lordimass/chat?parent=reformationfundraising.com"
                    height="100%"
                    width="100%"/>
            </div>
        </div>
    
        <div className="main-box" id="schedule-main-box">
        <div className="schedule-container">
            <img src="https://cdn.reformationfundraising.com/rffcom/Schedule.png" width="100%"/>
        </div>

        <div className="schedule-info-container">
            <div className="schedule-info">
                <h1>Events</h1>
                <i>Start times are estimated, they may be slightly different!</i>
                <p>
                    <br/>
                    At <b>5:40am</b> we will begin the <b>20 minute countdown</b> to the beginning of the event, during this time you can find which streamer you want to watch from the members page and get ready to watch.
                    <br/><br/>
                    The stream begins at <b>6:00am</b> with the launch of a <b>brand new Minecraft server</b>, this year with a <i>special twist</i>. This is just the launch and we'll play on it throughout the server, so don't worry if you can't catch the launch, plus, there's always the VOD!
                    <br/><br/>
                    At <b>12pm</b> CosmosFreckles is DMing a <b>D&D One-shot</b>, you can join in with this too by influencing our decisions through Twitch chat.
                    <br/><br/>
                    At <b>5pm</b> we will begin the <b>party games</b>, this is usually the most popular time for our streams because everyone can join in and play games such as Jackbox and Crab Game. Tune in at any point during this time to come play with us. But be warned, this segment is not appropriate for children!
                    <br/><br/>
                    At <b>8:30pm</b> we will be hosting a <b>Tetris (<a href="https://tetr.io">tetr.io</a>) tournament!</b> If you want to join in, just let us know in chat and we'll put you on the roster.
                    <br/><br/>
                    At <b>2am</b> we'll be playing <b>low effort games</b> to pass the time and keep us awake, this part of the stream is the hardest bit because we'll all be tired, and silly games are good for keeping the energy up.
                    <br/><br/>
                    The stream ends at <b>6am</b>. We'll recap everything that happened during the stream and meet back up in one voice channel to say our thanks to everyone who donated. And thanks to you for watching!</p>
            </div>
        </div>
        </div>

        <Leaderboard2025 />

    </div>



    <script src="https://player.twitch.tv/js/embed/v1.js"></script>

    <DonationLog year={year}/>

    </div> <Footer /> </>)
}