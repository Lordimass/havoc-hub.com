import "./404.css"
import Header from "../../components/headerFooter/header.tsx"
import Footer from "../../components/headerFooter/footer.tsx"

export default function NoPage() {
    return (
        <>        
        <Header />
        <div className="content" id="nopage">
        <div className="split">
        <div className="text" style={{width: "100%"}}>
            <h1>404</h1>
            <h2 id="horizontal">
                We couldn't find the page you were looking for, but it's ok! 
                Just click the button below to return home
            </h2>
            <h2 id="vertical" style={{marginBottom: "10vw"}}>
                Page not found
            </h2>
        <img src="https://cdn.reformationfundraising.com/rffcom/404.png" style={{width: "50%", margin: "auto auto"}} id="vertical" />

            
            <a href="/public"><div className="return-home">Return Home</div></a>
        </div>
        <img src="https://cdn.reformationfundraising.com/rffcom/404.png" style={{width: "100%"}} id="horizontal" />
        </div>
        </div>
        <Footer />
        </>

    )
}