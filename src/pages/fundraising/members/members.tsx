import Header from '../../../components/headerFooter/header'
import Footer from '../../../components/headerFooter/footer'
import CurveSubheader from '../../../components/curveSubheader/curveSubheader'

import "./members.css"

import {MemberData, membersData, socialIcons} from "./membersData"
import { ExtraMemberData, extraMembers } from "./extraMembers"
import { SpecialThankData, specialThanks } from "./specialThanks"

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
            <CurveSubheader>ALSO JOINED BY...</CurveSubheader>
        <ExtraMembers />
            <CurveSubheader>WITH SPECIAL THANKS TO...</CurveSubheader>
        <SpecialThanks />


        </div> <Footer /> </>
    );
};

function Streamers() {
    return (
        <div className='streamers'>
            {membersData.map((member, index) =>(
                <Streamer key={index} streamer={member} />
            ))}
        </div>
    );
}

function Streamer({streamer}: {streamer: MemberData}) {
    return (
        <div className="streamer" id={streamer.username}>
            <img className='icon' src={streamer.icon}/>
            <a className="member-username" href={streamer.socials[0].href}>{streamer.username.toUpperCase()}</a>
            <p className="member-name">{streamer.name} | {streamer.pronouns}</p>
            <div className='socials'>
                {streamer.socials.map((social, index) => (
                    <a key={index} href={social.href}><img src={
                        socialIcons.filter(icon => icon.name === social.name)[0]?.src
                    }/></a>
                ))}
            </div>
        </div>
    );
}

function ExtraMembers() {
    return (
        <div className='extra-members'>
            {extraMembers.map((member, index) =>(
                <ExtraMember key={index} member={member} />
            ))}
        </div>
    );
}

function ExtraMember({member}: {member: ExtraMemberData}) {
    return (
        <div className='extra-member'>
            <h1><a href={member.link} target='_blank'>{member.username.toUpperCase()}</a></h1>
            <p>{member.name ? `${member.name} | ${member.pronouns}` : member.pronouns}</p>
        </div>
    )
}

function SpecialThanks() {
    return (
        <div className='extra-members'>
            {specialThanks.map((member, index) =>(
                <SpecialThanksMember key={index} thanked={member} />
            ))}
        </div>
    );
}

function SpecialThanksMember({thanked}: {thanked: SpecialThankData}) {
    return (
        <div className='extra-member'>
            <h1>{thanked.name.toUpperCase()}</h1>
            <p>{thanked.desc}</p>
        </div>
    )
}