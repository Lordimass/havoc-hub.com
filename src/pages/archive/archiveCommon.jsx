import "./css/archive.css"
import { archiveData } from "./archiveData"

export function TitleBox({year}) {
    let textColor = "white"
    if (year["blackText"]) {
        textColor = "black"
    }
    return (
        <>
        <div id="title-box" style={{backgroundImage: "url("+year.theme+")", backgroundPosition: "0 "+year.themeShift+"vw"}}>
        <div className="title-box-content">
            <div className="Title"><a href={year.link} target="_blank" style={{color: textColor}}>{year.title.toUpperCase()}</a></div>
            <div className="sub">
                <div className="Charity"><a href={year.link} target="_blank" style={{color: textColor}}>{year.charity.toUpperCase()}</a></div>
                <div className="Quantity" style={{color: textColor}}>{year.amount}</div>
            </div>
        </div>
        </div>
        <div className="subtext"><p>{year.blurb}</p></div>
        <div className="curve" />
        </>
    )
}

export function DonationLog({year}) {
    const data = archiveData[year]["donations"]
    var key = 0
    const donations = data.map((user) => {
        key++
        return (
            <tr key={key}>
                <td>{user[0]}</td>
                <td>{user[1]}</td>
                <td>{user[2]}</td>
            </tr>
        )
    })

    return (<>
        <h1 className="archiveh1">Donation Log</h1>
        <table className="donationArchive"><tbody>
            <tr>
                <th scope="col">Amount</th>
                <th scope="col">Name</th>
                <th scope="col">Comment</th>
            </tr>
            {donations}
        </tbody></table>

    </>)
}

export function VODs({year}) {
    const data = archiveData[year].vods
    var num = 0
    const vods = data.map((url) => {
        num++
        return (
            <VOD key={num} url={url} num={num}/>
        )
    })

    return (
        <div className="vods">
            {vods}
        </div>
    );
}

function VOD({url, num}) {
    return (
        <div className="vod-container">
            <h1>{"Part "+num}</h1>
            <br/>
            <iframe width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>    
        </div>
    )
}