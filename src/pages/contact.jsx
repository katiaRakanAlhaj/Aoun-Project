import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import ContactBanner from "../features/contact/component/contactBanner";
import ContactGrid from "../features/contact/component/contactGrid";
import Faq from "../features/contact/component/faq";
import { useFetchContact } from "../features/contact/hook/useFetchContact";
import { useFetchHomePage } from "../features/home/hook/useFetchHomePage";

const Contact = () => {
  const { data: contactData, isLoading: contactDataLoading } =
    useFetchContact();
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();
  return (
    <>
      <ScrollToTop />
      <MetaHelmet title = {"Marnas | Contact"} description={"Contact"}/>
      <div>
        <ContactBanner />
        <Faq />
        <ContactGrid contactData={contactData} homePageData={homePageData} />
      </div>
    </>
  );
};
export default Contact;
