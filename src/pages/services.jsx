import AppDownloadFooter from "../features/services/component/App_Download_Footer";
import JourneyOfSuccess from "../features/services/component/journey_of_success";
import OurStoryService from "../features/services/component/our_story_service";
import PartnerInConstruction from "../features/services/component/partner_in_construction";
import ServiceImage from "../features/services/component/serviceImage";
import Statistics from "../features/services/component/Statistics";
import TechnologySolutions from "../features/services/component/technology_solutions";

const Services = ()=> {
    return(
        <div>
            <ServiceImage/>
            <OurStoryService/>
            <JourneyOfSuccess/>
            <TechnologySolutions/>
            <PartnerInConstruction/>
            <Statistics/>
            <AppDownloadFooter/>
        </div>
    )
}
export default Services;