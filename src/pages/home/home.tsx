import { TRANSPARENT_PRIMARY_LOGO } from "../../lib/consts";
import "./home.css"


export default function Home() {
    return (
        <div className="content home-content">
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
            </div>
        </div>
    );
}