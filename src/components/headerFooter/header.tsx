import "./header.css"
import {TRANSPARENT_PRIMARY_LOGO} from "../../lib/consts";

export default function Header() {
    return (
        <div className="header">
            <a className="logo" href="/">
                {/* TODO: Use logo with no swirly effect, and use square "H" logo on mobile*/}
                <img src={TRANSPARENT_PRIMARY_LOGO} alt="logo" />
            </a>
  
            
            <div className="nav-container"><div className="nav" id="archive" onClick={goToArchive}>
                <p>Archive</p>
                <div className="dropdown">
                    <a href="/fundraising/archive/2020" id="s2020" className="year">2020</a>
                    <a href="/fundraising/archive/2021" id="s2021" className="year">2021</a>
                    <a href="/fundraising/archive/2022" id="s2022" className="year">2022</a>
                    <a href="/fundraising/archive/2023" id="s2023" className="year">2023</a>
                    <a href="/fundraising/archive/2024" id="s2024" className="year">2024</a>
                    <a href="/fundraising/archive/2025" id="s2025" className="year">2025</a>
                </div>
            </div>
            
            <div className="nav" id="members">
                <p><a href="/fundraising/members">Members</a></p>
            </div></div>
        </div>
    );
  }

function goToArchive() {
    /** 
     * Only redirect if on a narrow enough screen, this isn't necessary on wider screens as there
     * is the dropdown which can be used instead.
    **/
    if (window.innerWidth < 1100) {
        window.location.href = "/fundraising/archive";
    }
}