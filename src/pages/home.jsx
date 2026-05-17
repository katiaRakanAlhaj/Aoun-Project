import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import About from "../features/home/component/about";
import Achievements from "../features/home/component/Achievements";
import MainSection from "../features/home/component/mainSection";
import UploadNow from "../features/home/component/uploadNow";
import { useFetchHomePage } from "../features/home/hook/useFetchHomePage";
import MetaHelmet from "../component/meta/metaHelemt";

const Home = () => {
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();
  const location = useLocation();
  const uploadSectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToUpload && uploadSectionRef.current) {
      setTimeout(() => {
        uploadSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <MetaHelmet title={"Home"} description={"Home"} />
      <ScrollToTop />
      <MainSection />
      <About />
      <Achievements />
      <div ref={uploadSectionRef}>
        <UploadNow homePageData={homePageData} />
      </div>
    </div>
  );
};

export default Home;
