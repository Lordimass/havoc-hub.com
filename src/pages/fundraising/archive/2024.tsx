import { TitleBox, DonationLog, VODs } from "./archiveCommon"
import { archiveData } from "./archiveData"
import Header from "../../../assets/components/header"
import Footer from "../../../assets/components/footer"
import "./css/2024.css"

export default function Year2024() {
    const year = "2024"
    return (<> <Header /> <div className="content">
    
    <TitleBox year={archiveData[year]}/>
    <VODs year={year}/>

    <div className="stream-embed-container">
    <img src="https://cdn.reformationfundraising.com/rffcom/2024/twitch-embed-screen-capture.jpeg" />
        <div className="stream-embed-side-info">
        <h1 id="title-1">24HR STREAM</h1>
            <div className="title-2-container"><h1 id="title-2">2024</h1></div>
            <div className="p-container">
                <p>
                    Welcome to the 5th stream in our series of annual charity livestreams,
                    and this year we're going <b>BIG!</b>
                    Join us on the 11th of February from 6am onward :D
                    <br/><br/>
                    We're raising money for both <b>Teach Me Happy</b> and <b>Doctors Without Borders</b>
                    with a 50/50 split.
                    <br/><br/>
                    Read our updates page for the latest information about the stream.
                    <br/><br/>
                    Donate, or find out more about this year's charities
                    by clicking one of the buttons below:
                </p>
            </div>
            <a href="https://www.gofundme.com/f/24hr-stream-2024-reformation-fundraising" target="_blank"><button className="donate-button">DONATE</button></a>
            <a target="_blank"><button className="more-button">FIND OUT MORE</button></a>
        </div>
    </div>

    <div className="headline-events">
        <h1 style={{textAlign: "center", fontSize: "6vw"}}>Headline Events</h1>
        <div className="events-split">
            <img src="https://cdn.reformationfundraising.com/rffcom/2024/Schedule.svg" className="schedule" style={{height: "100%"}}/>
            <div className="schedule-text">
            <p>
                <i>These are just the headline events for the stream, in between each of these we'll be playing other games too! All times are in GMT+0, starting from 11th February 2024</i>
                <br/><br/>
                At <b>5:40am</b> we will begin the <b>20 minute countdown</b> to the beginning of the event, during this time you can find which streamer you want to watch from the <a href="/fundraising/members">members page</a> and get ready to watch.
                <br/><br/>
                The stream begins at <b>6:00am</b> with the launch of a brand new Minecraft server. This is just the launch and we'll play on it throughout the server, so don't worry if you can't catch the launch, plus, there's always the VOD!
                <br/><br/>
                At <b>10am</b> we're hosting a <b>Chess Tournament</b>, this is your first chance to join in with the stream! If you want to join in, just join before the start of the event and we'll include you in the line-up
                <br/><br/>
                At <b>12pm Edweird</b> is DMing a <b>D&D One-shot Campaign</b>, you can join in with this too by influencing our decisions through Twitch chat.
                <br/><br/>
                At <b>3pm</b> we have a <b>guest segment with Noah</b>! Noah is Lordimass' brother who goes to TMH and will help to show where the money is going towards, find out more about Noah's story <a style={{cursor: "not-allowed"}}>here</a>.
                <br/><br/>
                At <b>6pm</b> we will begin the <b>party games</b>, this is usually the most popular time for our streams because everyone can join in and play games such as <b>Jackbox</b> and <b>Crab Game</b>. Tune in at any point during this time to come play with us.
                <br/><br/>
                At <b>10pm</b> we have organised the second tournament of the day, this time it's <b>Tetris</b>! Similarly to Chess, if you want to join in, just let us know in chat and we'll put you on the roster.
                <br/><br/>
                At <b>2am</b> we'll be playing games such as <b>Roblox</b> just to pass the time, this part of the stream is the hardest bit because we'll all be tired, and silly games are good for keeping the energy up.
                <br/><br/>
                The <b>stream ends</b> at 6am, we'll recap everything that happened during the stream and meet back up in one voice channel to say our thanks to everyone who donated. Thanks for watching!
            </p>
            </div>
        </div>
    </div>

    <div className="charity-info">
        <div className="charity-text">
            <div className="title-container">
                <h1>TEACH ME HAPPY</h1>
                <img src="https://cdn.reformationfundraising.com/rffcom/2024/TMH-No-Text.jpeg"/>
            </div>
            <p>
                <b>Teach Me Happy</b> is an alternate provision school which provides resources for children with neurodivergence and those that struggle in mainstream education.
                One of these children is my brother, Noah, who is pictured on the right.
                <br/><br/>
                Noah is diagnosed with Autism and ADHD and has tried to fit in to 5 different schools between the ages of 4 and 10,
                but the only place that worked for him was Teach Me Happy.
                I'd like to raise some money to help support the school that helped my brother learn and have fun.
                You can find out more about Noah specifically <a style={{cursor: "not-allowed"}}>here</a>.
            </p>
            <div className="charity-buttons">
                <a href="https://www.teachmehappy.co.uk/" target="_blank"><button>LEARN MORE</button></a>
                <a href="https://www.gofundme.com/f/24hr-stream-2024-reformation-fundraising" target="_blank"><button>DONATE</button></a>
            </div>
        </div>
        <img src="https://cdn.reformationfundraising.com/rffcom/2024/noah.jpg" id="curved-tmh-image"/>
    </div>

    <div className="charity-info">
        <div className="charity-text">
            <div className="title-container">
                <h1>DOCTORS WITHOUT BORDERS</h1>
                <img src="https://cdn.reformationfundraising.com/rffcom/2024/msf-logo.jpg"/>
            </div>
            <p>
                Last year we raised money to help out in Ukraine to support them and end the war.
                Unfortunately that's not the case, and the war is still ongoing.
                Due to this, 50% of the donations will go to Doctors Without Borders/Medicines San Frontieres (MSF).
                This charity provides medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare.
                <br/><br/>
                The Gaza-Israel war is another major conflict that MSF is helping to lessen the effects of. 


            </p>
            <div className="charity-buttons">
                <a href="https://msf.org" target="_blank"><button>LEARN MORE</button></a>
                <a href="https://www.gofundme.com/f/24hr-stream-2024-reformation-fundraising" target="_blank"><button>DONATE</button></a>
            </div>
        </div>
        <img src="https://cdn.reformationfundraising.com/rffcom/2024/msf.jpg" id="curved-tmh-image"/>
    </div>

    <DonationLog year={year}/>

    </div> <Footer /> </>)
}