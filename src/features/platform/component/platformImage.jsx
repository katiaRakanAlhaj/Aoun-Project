import i18next from "i18next";
import imagePlatform from "../../../assets/images/bannerPlatform.png";
import BannerPlatform from "../../../component/banner/bannerPlatform";

const PlatformImage = ()=> {
    return(
        <div>
            <BannerPlatform image = {imagePlatform} title ={i18next.t("menu.about_the_platform")}/>
        </div>
    )
}
export default PlatformImage;