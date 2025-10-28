import "./curveSubheader.css"
import {ReactNode} from "react";

export default function CurveSubheader({children}: {children: ReactNode}) {
    return (
        <div className="curve-subheader">
            <div className="subheader"><h1>{children}</h1></div>
            <div className="curve" />
        </div>
    )
}