import "../css/header.css"

export default function Header() {
    return (
        <div className="header">
            <a className="logo" href="/fundraising">
                <img src="https://cdn.reformationfundraising.com/rffcom/logosmol.png"/>
                <h1>HAVOC FUNDRAISING</h1>
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