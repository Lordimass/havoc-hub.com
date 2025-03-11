import "../css/curveSubheader.css"

export default function CurveSubheader({content}) {
    return (
        <div className="curve-subheader">
            <div className="subheader"><h1>{content}</h1></div>
            <div className="curve" />
        </div>
    )
}