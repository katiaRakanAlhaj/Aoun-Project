import singleBlogBanner from "../../../assets/images/singleBlogBanner.png";
const SingleBlogBanner = () => {
  return (
    <div className="relative lg:mt-[3rem] con">
      <div className="w-full lg:h-[32rem] h-[18rem]">
        {/* Background Image */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700 lg:rounded-4xl"
          style={{
            backgroundImage: `url(${singleBlogBanner})`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};
export default SingleBlogBanner;
