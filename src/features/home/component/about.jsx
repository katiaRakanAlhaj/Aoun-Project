import aboutImage from "../../../assets/images/aboutImage.png";
const About = ()=> {
    return(
        <div className = "h-[35rem] w-full bg-white  pt-[8rem]">
            <div className = "container1 mx-auto">
                 <div className = "grid grid-cols-12  gap-x-[2rem]">
                {/* first column */}
                <div className = "col-span-7">
                    <h1 className = "text-primary font-bold text-md">من نحن</h1>
                    <p className = "text-[#333333] text-[2.5rem] font-bold mt-[1.5rem]">تطبيق عون</p>
                    <p className = "text-[1.4rem] text-[#333333] mt-[1.5rem] leading-relaxed">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور </p>
                </div>
                <div className = "col-span-4">
                    <img className = "w-full h-[30rem] mt-[-5rem]" src = {aboutImage}/>
                </div>
            </div>
            </div>
           
        </div>
    )
}
export default About;