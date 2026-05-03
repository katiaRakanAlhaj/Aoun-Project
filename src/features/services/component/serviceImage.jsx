import MainBanner from "../../../component/banner/mainBanner";
import servicebanner from "../../../assets/images/serviceBanner.png"
const ServiceImage = ()=> {
    return(
        <div>
            <MainBanner title = {"خدماتنا"} image = {servicebanner}/>
        </div>
    )
}
export default ServiceImage;