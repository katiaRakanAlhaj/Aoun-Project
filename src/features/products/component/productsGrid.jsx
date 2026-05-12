import { useState } from "react";
import SecondTitleStyle from "../../../ui/secondTitleStyle";
import product1 from "../../../assets/images/product1.jpg";
import product2 from "../../../assets/images/product2.jpg";
import product3 from "../../../assets/images/product3.jpg";
import product4 from "../../../assets/images/product4.jpg";
import product5 from "../../../assets/images/product5.jpg";
import producIcon from "../../../assets/images/productIcon.svg";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";

const ProductsGrid = ({ productsData }) => {
  
  // State to track how many rows to show
  const [visibleRows, setVisibleRows] = useState(2); // Start with 2 rows
  const itemsPerRow = 5; // Since lg:grid-cols-5 means 5 items per row
  
  // Calculate how many items to show based on visible rows
  const itemsToShow = visibleRows * itemsPerRow;
  
  // Get the products array from productsData
  const allProducts = productsData?.data || [];
  
  // Get only the products to display
  const displayedProducts = allProducts.slice(0, itemsToShow);
  
  // Check if there are more products to load
  const hasMore = allProducts.length > itemsToShow;
  
  // Function to load more rows
  const handleSeeMore = () => {
    setVisibleRows(prevRows => prevRows + 1);
  };

  return (
    <div className="h-auto lg:py-[5rem] py-[3rem] w-full">
      <div className="container2 mx-auto lg:px-[2rem] px-[1rem]">
        <SecondTitleStyle
          title={i18next.t("ProductsGrid.browse_industrial_products")}
        />
        <p className="text-[#525252] text-lg mt-[1rem]">
          {i18next.t("ProductsGrid.explore_description")}{" "}
        </p>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-[2rem] gap-y-[3.5rem] mt-[3rem]">
          {displayedProducts.map((product, index) => (
            <div key={index}>
              <img
                className="w-full rounded-t-2xl h-[15rem] object-cover"
                src={product?.images?.[0]}
                alt={product?.name}
              />
              <h1 className="text-dark font-bold text-xl leading-8 mt-[1.5rem]">
                {product?.name}
              </h1>
              <div className="mt-[1.3rem] flex gap-x-2">
                <img
                  className="w-[1rem] h-[1rem] mt-2 object-contain"
                  src={producIcon}
                  alt="icon"
                />
                <p className="text-[1rem] text-[#525252]">{product?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Show "See More" button only if there are more products */}
      {hasMore && (
        <div className="flex justify-center items-center mt-[5rem]">
          <button
            onClick={handleSeeMore}
            className="w-[16rem] h-[4rem] rounded-md bg-primary flex justify-center items-center gap-x-5 cursor-pointer hover:bg-primary-dark transition-colors"
          >
            <p className="text-white font-bold text-lg">
              {i18next.t("ProductsGrid.see_more")}
            </p>
            <img src={download} alt="download" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;