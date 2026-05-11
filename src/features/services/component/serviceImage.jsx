import MainBanner from "../../../component/banner/mainBanner";
import servicebanner from "../../../assets/images/serviceBanner.png"
import i18next from "i18next";
const ServiceImage = ()=> {
    return(
        <div>
            <MainBanner title = {i18next.t("services_description.services")} image = {servicebanner}/>
        </div>
    )
}
export default ServiceImage;