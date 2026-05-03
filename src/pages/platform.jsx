import BuildFuture from "../features/platform/component/buildFuture";
import DownloadAppSection from "../features/platform/component/DownloadAppSection";
import PlatformCompanies from "../features/platform/component/platformCompanies";
import PlatformImage from "../features/platform/component/platformImage";
import PlatformWorking from "../features/platform/component/platformWorking";

const Platform = ()=> {
    return(
        <div>
            <PlatformImage/>
            <PlatformWorking/>
           <PlatformCompanies/>
            <DownloadAppSection/>
            <BuildFuture/> 
        </div>
    )
}
export default Platform;