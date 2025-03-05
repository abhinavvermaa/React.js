import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  { id: 1, image: "/banners/shirt.png" },
  { id: 2, image: "/banners/spiderman.png" },
  { id: 3, image: "/banners/TSHIRT.png" },
  { id: 4, image: "/banners/socks.png" },
];

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="flex-row items-center w-full  sm:px-20  py-5 p-2 border-transparent">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-center">
            <img
              src={banner.image}
              alt={`Banner ${banner.id}`}
              className="w-full rounded-xl drop-shadow-lg "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
