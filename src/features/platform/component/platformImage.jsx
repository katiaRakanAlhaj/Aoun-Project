import i18next from "i18next";
import imagePlatform from "../../../assets/images/bannerPlatform.png";
import BannerPlatform from "../../../component/banner/bannerPlatform";

const PlatformImage = ()=> {
    return(
        <div>
            <BannerPlatform image = {imagePlatform} title ={i18next.t("platform.about_platform")}/>
        </div>
    )
}
export default PlatformImage;