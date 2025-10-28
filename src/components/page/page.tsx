import Header from "../headerFooter/header";
import Footer from "../headerFooter/footer";
import React, {ReactNode} from "react";

export default function Page({children, ...props}:
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        children: ReactNode
    }) {
    return (<>
        <Header/>
        <div {...props} className={"content" + (props.className ? " "+props.className : null)} >
            {children}
        </div>
        <Footer/>
    </>)
}