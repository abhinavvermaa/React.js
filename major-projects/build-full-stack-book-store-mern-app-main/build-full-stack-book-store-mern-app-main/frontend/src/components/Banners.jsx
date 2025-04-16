import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image1 from ; // Update with actual file names
import image2 from "../../assets/Carausal/2_inr.jpg";
import image3 from "../../assets/Carausal/70_inr.jpg";
import image4 from "./../assets/Carausal/81_inr.jpg";
const banners = [
  { id: 1, image: "../../assets/Carausal/1_inr.jpg" },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
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
