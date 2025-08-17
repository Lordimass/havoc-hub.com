import Header from '../../assets/components/header.jsx'
import Footer from '../../assets/components/footer.jsx'
import {Leaderboard} from "../../assets/components/podium.jsx"

import "./home.css"

export default function Home() {
    return (
        <>
        <Header /> <div className="content" style={{backgroundImage: "url('https://cdn.reformationfundraising.com/rffcom/collage2.jpg')"}}>
        <div className='homeTitle'><h1>HAVOC FUNDRAISING</h1></div>

        <div id="intro-box">
            <p>Hi! We are a group of friends who host a yearly 24hr Charity Livestream to raise money for the areas of the world and groups of people who need it the most. We hope to make a difference in the world, even if only a little bit.</p>
            <p>The last stream was on 1st February 2025, and the next one isn’t until February 2026, so it’s quiet here for now…</p>
            <p>While you wait for next year’s stream, check out the archive of previous events or go to the members page to see the team’s social media pages.
            </p>
        </div>

        <Leaderboard />

        </div><Footer /> 
        </>
    );
};
