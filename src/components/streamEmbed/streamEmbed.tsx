import "./steamEmbed.css"
import {TwitchChat, TwitchPlayer} from "react-twitch-embed";
import {RefObject, useEffect, useRef, useState} from "react";

export default function StreamEmbed() {
    // Match embed size to content
    const infoTab = useRef<HTMLDivElement>(null)
    const [infoTabHeight, setInfoTabHeight] = useState(100)
    useEffect(() => {
        if (!infoTab.current) return
        function resizeStreamEmbed() {
            if (infoTab.current && infoTab.current.scrollHeight > 0) {
                setInfoTabHeight(infoTab.current.scrollHeight)
            }
        }
        resizeStreamEmbed()
        window.addEventListener("resize", resizeStreamEmbed);
        return () => {
            if (infoTab.current) window.removeEventListener("resize", resizeStreamEmbed);
        }
    }, [])

    // Currently open tab
    const [tab, setTab] = useState<"info" | "chat">("info")

    return (<div className="content-box" id="stream-embed-content-box">
        <div className="stream-embed-left">
            <TwitchPlayer
                channel="lordimass"
                height={infoTabHeight}
                width={"100%"}
            />
        </div>
        <div className="stream-embed-right">
            <div className="stream-embed-tabs">
                <button
                    className="stream-embed-info-tab-button"
                    onClick={() => setTab("info")}
                >
                    Info
                </button>
                <button className="stream-embed-chat-tab-button" onClick={() => setTab("chat")}>
                    Chat
                </button>
            </div>
            <div className="stream-embed-content">
                {tab === "info" ? <InfoTab ref={infoTab}/> : tab === "chat" ? <ChatTab height={infoTabHeight}/> : null}
            </div>
        </div>
    </div>)
}

function InfoTab({ref}: {ref: RefObject<HTMLDivElement | null>}) {
    return (
        <div className="info-tab" ref={ref}>
            <div className="info-tab-text">
                <h1 id="title-1">24HR STREAM</h1>
                <div className="title-2-container"><h1>2026</h1></div>
                <p>
                    Welcome to the 7th stream in our series of annual charity livestreams!
                    <br/><br/>
                    We invite you to join us on the 21st of February from 6am GMT to raise
                    money for <b><a href="https://mermaidsuk.org.uk/">Mermaids</a></b>. This is an important charity to
                    us because of their work supporting trans youth.
                    <br/><br/>
                    Check out our <b><a href={"http://localhost:8888/fundraising/members"}>members page</a></b> to find out about everyone who makes up our group,
                    or use the buttons below for more.
                </p>
            </div>
            <div className="info-tab-buttons">
                <a href="#COMING-SOON">
                    <button className="more-button">Find Out More</button>
                </a>
                <a href="https://tiltify.com/+havoc-fundraising/hf2026"
                   target="_blank">
                    <button className="donate-button">Donate</button>
                </a>
            </div>
        </div>
    )
}

function ChatTab({height}: {height: number}) {
    const [width, setWidth] = useState(403)

    useEffect(() => {
        function resizeChatEmbed() {
            if (window.innerWidth > 1100) {
                setWidth(403)
            } else {
                setWidth(window.innerWidth + 3)
            }
        }
        resizeChatEmbed()
        window.addEventListener("resize", resizeChatEmbed);
        return () => {
            window.removeEventListener("resize", resizeChatEmbed);
        }
    }, []);

    return (
        <div className="chat-tab" style={{height: `${height}px`}}>
            <TwitchChat channel="lordimass" height={height+2} width={width}/>
        </div>
    )
}