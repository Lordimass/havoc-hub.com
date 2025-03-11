import Header from '../../assets/components/header.jsx'
import Footer from '../../assets/components/footer.jsx'
import CurveSubheader from '../../assets/components/curveSubheader.jsx'

import "./members.css"

import { membersData } from "./membersData.js"
import { socials } from "./socials.js"
import { extraMembers } from "./extraMembers.js"
import { specialThanks } from "./specialThanks.js"

export default function Members() {


    return (
        <> <Header /> <div className="content">
        
        <div id="title-container">
            <div id="title-box">
                <div id="title-content-container">
                    <div className="Logo-2"><img src="https://cdn.reformationfundraising.com/rffcom/logo.png" /></div>
                    <div className="Logo-1"><img src="https://cdn.reformationfundraising.com/rffcom/logo.png" /></div>
                    <div className="Streamers-Title"><h1>MEMBERS</h1></div>
                    <div className="Streamers-Subtitle"><p>Show some support to everyone by following their socials too!</p></div>
                </div>
            </div>
            <div className="curve" />
        </div>

        <Streamers />

        <CurveSubheader content={"ALSO JOINED BY..."}/>
        <ExtraMembers />

        <CurveSubheader content={"WITH SPECIAL THANKS TO..."}/>
        <SpecialThanks />


        </div> <Footer /> </>
    );
};

function Streamers() {
    const members = Object.keys(membersData);

    return (
        <div className='streamers'>
            {members.map((member, index) =>(
                <Streamer key={index} username={member} />
            ))}
        </div>
    );
}

function Streamer({username}) {
    const data = membersData[username]
    const socialsList = Object.keys(data.socials)

    return (
        <div className="streamer">
            <img className='icon' src={data.icon}/>
            <a className="member-username" href={data.socials[socialsList[0]]}>{username.toUpperCase()}</a>
            <p className="member-name">{data.name} | {data.pronouns}</p>
            <div className='socials'>
                {socialsList.map((social, index) => (
                    <a key={index} href={data.socials[social]}><img src={socials[social]}/></a>
                ))}
            </div>
        </div>
    );
}

function ExtraMembers() {
    const members = Object.keys(extraMembers);

    return (
        <div className='extra-members'>
            {members.map((member, index) =>(
                <ExtraMember key={index} username={member} />
            ))}
        </div>
    );
}

function ExtraMember({username}) {
    const user = extraMembers[username]

    // Second line changes depending on whether or not the name property is provided
    let secondLine = user.pronouns
    if (user.hasOwnProperty("name")) {
        secondLine = user.name + " | " + user.pronouns 
    }

    return (
        <div className='extra-member'>
            <h1><a href={user.link} target='_blank'>{username.toUpperCase()}</a></h1>
            <p>{secondLine}</p>
        </div>
    )
}

function SpecialThanks() {
    const members = Object.keys(specialThanks);

    return (
        <div className='extra-members'>
            {members.map((member, index) =>(
                <SpecialThanksMember key={index} name={member} />
            ))}
        </div>
    );
}

function SpecialThanksMember({name}) {
    const reason = specialThanks[name]
    return (
        <div className='extra-member'>
            <h1>{name.toUpperCase()}</h1>
            <p>{reason}</p>
        </div>
    )
}