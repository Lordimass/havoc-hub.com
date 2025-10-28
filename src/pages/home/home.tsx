import { TRANSPARENT_PRIMARY_LOGO } from "../../lib/consts";
import "./home.css"
import Page from "../../components/page/page";


export default function Home() {
    return (<Page className="content-page">
            <div className="content-box">
                <div id="home-page-logo">
                    <img
                        src={TRANSPARENT_PRIMARY_LOGO}
                        alt={`
                        A logo in a bubbly font which reads 'Havoc'. There are horns on the H, and the c flows into
                        an imp tail which curls over the top of the logo. The whole word has a cartoony fiery red
                        background
                        `}
                    />
                </div>
                <h1>Hi!</h1>
                <p className="center">
                    We are a group of friends who host a yearly 24hr Charity Livestream to raise money for the
                    areas of the world and groups of people who need it the most. We hope to make a difference in
                    the world, even if only a little bit.
                </p><br/>
                <p className="center">
                    The last stream was on 1st February 2025, and the next one isn't until February 2026, so it's quiet
                    here for now…
                </p><br/>
                <p className="center">
                    While you wait for next year's stream, check out the archive of previous events or go to the
                    members page to see the team's social media pages.
                </p>
            </div>
    </Page>);
}