import About from "../features/home/component/about";
import Achievements from "../features/home/component/Achievements";
import MainSection from "../features/home/component/mainSection";
import UploadNow from "../features/home/component/uploadNow";

const Home = ()=> {
    return(
        <div>
            <MainSection/>
            <About/>
            <Achievements/>
            <UploadNow/>
        </div>
    )
}
export default Home;