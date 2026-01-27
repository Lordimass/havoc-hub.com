import {MERMAIDS_IMAGE, TRANSPARENT_PRIMARY_LOGO, TRANSPARENT_SECONDARY_LOGO} from "../../lib/consts";
import "./home.css"
import Page from "../../components/page/page";
import {Leaderboard} from "../../components/podium/podium";
import StreamEmbed from "../../components/streamEmbed/streamEmbed.tsx";
import CharityInformation, {
    MermaidsCharityInformation
} from "../../components/charityInformation/charityInformation.tsx";

/** Whether the next stream is soon or not, changes some of the content of the page */
const STREAM_SOON = true;

export default function Home() {
    return (<Page className="content-page" id="home-page">
        <div className="content-box" id="home-page-introduction">
            <div id="home-page-logo">
                <img
                    src={TRANSPARENT_SECONDARY_LOGO}
                    alt={`
                        A logo in a bubbly font which reads 'Havoc'. There are horns on the H, and the c flows into
                        an imp tail which curls over the top of the logo. The whole word has a cartoony fiery red
                        background. Text underneath reads "formerly Reformation"
                        `}
                />
            </div>
            <h1>Hi!</h1>
            {STREAM_SOON
                ? <StreamSoonText/>
                : <MidYearText/>
            }
        </div>
        <StreamEmbed/>
        <Leaderboard/>
        <MermaidsCharityInformation/>
    </Page>);
}

export function StreamSoonText() {
    return (<>
        <p>
            We are a group of friends who host a yearly 24hr Charity Livestream to raise money for the
            areas of the world and groups of people who need it the most. We hope to make a difference in
            the world, even if only a little bit.
        </p><br/>
        <p>
            The 7th Livestream will be on <b>21st February</b>! This year we're all getting together to raise money
            for <a href="https://mermaidsuk.org.uk/">Mermaids</a> (Not the fish people). Mermaids has been supporting
            trans, non-binary and gender-diverse children, young people and their families since 1995, and with so many
            people in our community being some variation of these things, we want to do our part to help Mermaids out!
        </p><br/>
        <p>
            While you wait, check out the archive of previous events or go to the members page to see everyone who's
            taking part.
        </p>
    </>)
}

export function MidYearText() {
    return (<>
        <p>
            We are a group of friends who host a yearly 24hr Charity Livestream to raise money for the
            areas of the world and groups of people who need it the most. We hope to make a difference in
            the world, even if only a little bit.
        </p><br/>
        <p>
            The last stream was on 1st February 2025, and the next one isn't until February 2026, so it's quiet
            here for now…
        </p><br/>
        <p>
            While you wait for next year's stream, check out the archive of previous events or go to the
            members page to see the team's social media pages.
        </p>
    </>)
}