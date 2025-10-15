import { TRANSPARENT_PRIMARY_LOGO } from "../../lib/consts";
import "./home.css"


export default function Home() {
    return (
        <div className="content home-content">
            <div className="content-box">
                <div id="home-page-logo"><img src={TRANSPARENT_PRIMARY_LOGO}/></div>
                <h1>Under Construction!</h1>
            </div>
        </div>
    );
}