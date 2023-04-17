import Slider from "react-slick";
import "./home.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
  };
  return (
    <div className="home">
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            className="h-500"
          />
        </div>
        <div>
          <img
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            className="h-500"
          />
        </div>
      </Slider>
      <div className="home-content">
        <div className="home-left">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h1 className="left-text">
            Dakikalar içinde <br /> kapınızda
          </h1>
        </div>
        <div className="form">
          <p className="form-banner">Giriş yap veya kayıt ol</p>
        </div>
      </div>
    </div>
  );
}
