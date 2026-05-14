import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import About from "../features/home/component/about";
import Achievements from "../features/home/component/Achievements";
import MainSection from "../features/home/component/mainSection";
import UploadNow from "../features/home/component/uploadNow";
import { useFetchHomePage } from "../features/home/hook/useFetchHomePage";
const Home = () => {
  const {data:homePageData , isLoading:homePageDataLoading , error:homePageDataError} = useFetchHomePage();
  return (
    <div>
      <ScrollToTop/>
      <MainSection />
      <About />
      <Achievements />
      <UploadNow homePageData = {homePageData}/>
    </div>
  );
};
export default Home;
