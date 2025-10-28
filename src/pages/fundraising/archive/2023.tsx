import { TitleBox, DonationLog, VODs } from "./archiveCommon"
import { archiveData } from "./archiveData"
import Header from "../../../components/headerFooter/header"
import Footer from "../../../components/headerFooter/footer"

export default function Year2023() {
    const year = "2023"
    return (<> <Header /> <div className="content">
    
    <TitleBox year={archiveData[year]}/>
    <VODs year={year}/>
    <DonationLog year={year}/>

    </div> <Footer /> </>)
}