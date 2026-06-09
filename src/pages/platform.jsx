import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import BuildFuture from "../features/platform/component/buildFuture";
import DownloadAppSection from "../features/platform/component/DownloadAppSection";
import PlatformCompanies from "../features/platform/component/platformCompanies";
import PlatformImage from "../features/platform/component/platformImage";
import PlatformWorking from "../features/platform/component/platformWorking";

const Platform = () => {
  return (
    <div>
      <MetaHelmet title={"Marnas | Platform"} description={"Platform"} />
      <ScrollToTop />
      <PlatformImage />
      <PlatformWorking />
      <PlatformCompanies />
      <DownloadAppSection />
      <BuildFuture />
    </div>
  );
};
export default Platform;
