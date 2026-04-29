import imagePlatform from "../../../assets/images/bannerPlatform.png";
import BannerPlatform from "../../../component/banner/bannerPlatform";

const PlatformImage = ()=> {
    return(
        <div>
            <BannerPlatform image = {imagePlatform} title ={"عن المنصة"}/>
        </div>
    )
}
export default PlatformImage;