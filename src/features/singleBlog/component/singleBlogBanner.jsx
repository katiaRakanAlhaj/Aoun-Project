import singleBlogBanner from "../../../assets/images/singleBlogBanner.png";
const SingleBlogBanner = () => {
  return (
    <div className="relative mt-[3rem]">
      <div className="w-full h-[32rem]">
        {/* Background Image */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700 rounded-4xl"
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
