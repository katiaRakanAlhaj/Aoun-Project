import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import { useFetchHomePage } from "../features/home/hook/useFetchHomePage";
import AppDownloadFooter from "../features/services/component/App_Download_Footer";
import ForIndustrialCompanies from "../features/services/component/for_industrial_companies";
import JourneyOfSuccess from "../features/services/component/journey_of_success";
import OurStoryService from "../features/services/component/our_story_service";
import PartnerInConstruction from "../features/services/component/partner_in_construction";
import ServiceImage from "../features/services/component/serviceImage";
import Statistics from "../features/services/component/Statistics";
import TechnologySolutions from "../features/services/component/technology_solutions";

const Services = () => {
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();
  return (
    <div>
      <ScrollToTop />
      <MetaHelmet title={"Services"} description={"Services"} />
      <ServiceImage />
      <OurStoryService />
      <JourneyOfSuccess />
      <TechnologySolutions />
      <ForIndustrialCompanies />
      <PartnerInConstruction />
      <Statistics />
      <AppDownloadFooter homePageData={homePageData} />
    </div>
  );
};
export default Services;
