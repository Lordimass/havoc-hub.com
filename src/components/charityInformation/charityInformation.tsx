import "./charityInformation.css"
import {ReactNode} from "react";
import {MERMAIDS_CIRCLE_LOGO, MERMAIDS_IMAGE} from "../../lib/consts.ts";

/** An information block which provides information on a charity. */
export default function CharityInformation(
    {img, alt, children}: {
        /** URL to an image to use to represent this charity. */
        img: string,
        /** Alt text to supply alongside the image */
        alt: string,
        /** Content of the charity information box */
        children: ReactNode
    }) {
    return <div className="content-box charity-information">
        <div className="charity-info-box">{children}</div>
        <div className="charity-info-image">
            <img src={img} alt={alt}/>
        </div>
    </div>
}

export function MermaidsCharityInformation() {
    return <CharityInformation
        img={MERMAIDS_IMAGE}
        alt={"A group of people stood outside holding a big blue Mermaids banner"}
    >
        <h1 id={"find-out-more"}><img src={MERMAIDS_CIRCLE_LOGO} alt={"Circular blue M logo for Mermaids."}/>MERMAIDS</h1>
        <p style={{marginBottom: "10px"}}>
            <b>Mermaids</b> has been supporting transgender, non-binary and gender diverse children, young people, and
            their families since 1995.
            <br/><br/>
            Their goal is to create a world where gender-diverse children and young people can be themselves and thrive.
            <br/><br/>
            Mermaids promotes education and awareness and offers information, support, friendship, and shared
            experiences to those in need.
        </p>

        <div className="charity-info-buttons">
            <a href="https://mermaidsuk.org.uk/">
                <button className="more-button">Find Out More</button>
            </a>
            <a href="https://tiltify.com/+havoc-fundraising/hf2026"
               target="_blank">
                <button className="donate-button">Donate</button>
            </a>
        </div>
    </CharityInformation>
}