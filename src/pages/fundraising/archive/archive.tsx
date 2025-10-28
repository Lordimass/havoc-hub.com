import Footer from "../../../components/headerFooter/footer";
import Header from "../../../components/headerFooter/header";
import "./css/archiveDedicatedPage.css";

export default function Archive() {
    return (
    <>
    <Header/>
    <div className="content">
    <div className="years">
        <a href="/fundraising/archive/2020"><div className="year" id="y2020"><h1>2020</h1></div></a>
        <a href="/fundraising/archive/2021"><div className="year" id="y2021"><h1>2021</h1></div></a>
        <a href="/fundraising/archive/2022"><div className="year" id="y2022"><h1>2022</h1></div></a>
        <a href="/fundraising/archive/2023"><div className="year" id="y2023"><h1>2023</h1></div></a>
        <a href="/fundraising/archive/2024"><div className="year" id="y2024"><h1>2024</h1></div></a>
        <a href="/fundraising/archive/2025"><div className="year" id="y2025"><h1>2025</h1></div></a>
    </div>
    </div>
    <Footer/>
    </>
    );
}