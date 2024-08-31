import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddNew from "../pages/admin/utils/AddNew";

const CustomCarousel = ({ images, height }) => {
  const [outerActiveIndex, setOuterActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [openImages, setOpenImages] = useState(false);

  const handleOuterActiveIndex = (index) => {
    if (index < 0) {
      setOuterActiveIndex(images.length - 1);
    } else if (index >= images.length) {
      setOuterActiveIndex(0);
    } else {
      setOuterActiveIndex(index);
    }
  };
  const handleCarouselIndex = (index) => {
    if (index < 0) {
      setCarouselIndex(images.length - 1);
    } else if (index >= images.length) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(index);
    }
  };
  return (
    <div className="relative w-full">
      {images.map(
        (image, i) =>
          i === outerActiveIndex && (
            <img
              key={i}
              src={image}
              width={"100%"}
              style={{
                height: height ?? "100%",
              }}
              height={height ?? "100%"}
              alt={`carousel-${i}`}
              onClick={() => {
                handleOuterActiveIndex(i);
                setOpenImages(true);
              }}
              className="object-fill overflow-hidden rounded-xl w-full transition-all duration-700 ease-in-out"
            />
          )
      )}
      {outerActiveIndex < images.length - 1 && (
        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute top-1/2 right-2 text-white text-4xl cursor-pointer bg-slate-600 rounded-full px-[5px] py-[4px] hover:bg-slate-700 transition-all duration-300 ease-in-out"
          onClick={() => handleOuterActiveIndex(outerActiveIndex + 1)}
        />
      )}
      {outerActiveIndex > 0 && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute top-1/2 left-4 text-white text-4xl cursor-pointer cursor-pointer bg-slate-600 rounded-full px-[5px] py-[4px] hover:bg-slate-700 transition-all duration-300 ease-in-out"
          onClick={() => handleOuterActiveIndex(outerActiveIndex - 1)}
        />
      )}

      <AddNew
        open={openImages}
        cross={() => {
          setOpenImages(false);
        }}
        title={"Images"}
        body={
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              {images.map(
                (image, i) =>
                  i === carouselIndex && (
                    <img
                      key={i}
                      src={image}
                      width={"100px"}
                      height={"100px"}
                      alt={`carousel-${i}`}
                      className="object-cover rounded-xl w-full transition-all duration-700 ease-in-out"
                    />
                  )
              )}
            </div>
            {carouselIndex < images.length - 1 && (
              <FontAwesomeIcon
                icon={faArrowRight}
                className="absolute top-1/2 right-2 text-white text-4xl cursor-pointer bg-slate-600 rounded-full px-[5px] py-[4px] hover:bg-slate-700 transition-all duration-300 ease-in-out"
                onClick={() => handleCarouselIndex(carouselIndex + 1)}
              />
            )}
            {carouselIndex > 0 && (
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="absolute top-1/2 left-4 text-white text-4xl cursor-pointer bg-slate-600 rounded-full px-[5px] py-[4px] hover:bg-slate-700 transition-all duration-300 ease-in-out"
                onClick={() => handleCarouselIndex(carouselIndex - 1)}
              />
            )}
          </div>
        }
      />
    </div>
  );
};

export default CustomCarousel;
