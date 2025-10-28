import { TitleBox, DonationLog } from "./archiveCommon"
import { archiveData } from "./archiveData"
import Header from "../../../components/headerFooter/header"
import Footer from "../../../components/headerFooter/footer"

export default function Year2020() {
    const year = "2020"
    return (<> <Header /> <div className="content">
    
    <TitleBox year={archiveData[year]}/>
    <DonationLog year={year}/>

    </div> <Footer /> </>)
}