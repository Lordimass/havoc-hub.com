import { TitleBox, DonationLog, VODs } from "./archiveCommon"
import { archiveData } from "./archiveData"
import Header from "../../../assets/components/header"
import Footer from "../../../assets/components/footer"

export default function Year2022() {
    const year = 2022
    return (<> <Header /> <div className="content">
    
    <TitleBox year={archiveData[year]}/>
    <VODs year={year}/>
    <DonationLog year={year}/>

    </div> <Footer /> </>)
}