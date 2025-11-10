import "./podium.css"
import {PODIUM_SVG} from "../../lib/consts";
import {useGetTopDonors, useGetTotalDonations} from "../../lib/supabase.ts";


export function Leaderboard() {
    const topDonors = useGetTopDonors();
    const totalDonations = useGetTotalDonations();

    return (
        <div className="podium-main-box">
            <div className="podium-container">
                <div className="podium-text-container">
                    <div className="podium-text">
                        <p>{topDonors[1].name}</p>
                        <p>£{topDonors[1].total_donation.toFixed(0)}</p>
                    </div>
                    <div className="podium-text">
                        <p>{topDonors[0].name}</p>
                        <p>£{topDonors[0].total_donation.toFixed(0)}</p>
                    </div>
                    <div className="podium-text">
                        <p>{topDonors[2].name}</p>
                        <p>£{topDonors[2].total_donation.toFixed(0)}</p>
                    </div>
                </div>
                <Podium/>
            </div>

            <div className="podium-blurb">
                  <h1>A Special Thank You ❤️</h1>
                  <p>Over the last 6 years thanks to your support we have raised a breath-taking</p>
                  <h1 id="total-raised">£{totalDonations.toFixed(0)}</h1>
                  <p>These are our top 10 supporters over the years, and from all of us, thank you!</p>
                  <table id="leaderboard"><tbody>{
                      topDonors.map((d, i) => <tr key={i}>
                          <td>{d.name}</td><td>£{d.total_donation.toFixed(0)}</td>
                      </tr>)
                  }
                  </tbody></table>
            </div>
        </div>
    );
}

function Podium() {
    return (
        <img src={PODIUM_SVG}/>
    )
}