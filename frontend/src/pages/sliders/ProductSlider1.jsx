import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/ProductSlider.css";
import ProductCard1 from "./ProductCard1";

class ProductSlider1 extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11370303-1255014851959274.jpg",
          productdetail:"EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
             discountmessage:"20% off with code REPLAY",
             rating:"★ ★ ★ ★ 4968", 
             price:"$41.00"
        
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/12664555-1704871739992403.jpg",
          productdetail:"Neocutis LUMIÈRE® FIRM RICHE Cream (0.5 fl. oz.)",
          discountmessage:"12% off with code REPLAY",
          rating:"★ ★ ★ ★ ★ 2918", 
          price:"$118.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11291956-2074871578544985.jpg",
          productdetail:"iS Clinical Active Serum A multi-tasking face serum (1 fl. oz.)",
             discountmessage:"24% off with code REPLAY",
             rating:"★ ★ ★ ★ ★ 2588", 
             price:"$142.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg",
          productdetail:"Sunday Riley GOOD GENES Treatment (1.7oz. - $175 Value)",
             discountmessage:"5% off with code REPLAY",
             rating:"★ ★ ★  6928", 
             price:"$122.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg",
          productdetail:"SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
             discountmessage:"21% off with code REPLAY",
             rating:"★ ★ ★ ★ ★ 4968", 
             price:"$450.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/10560418-1514911743023953.jpg",
          productdetail:"RevitaLash Advanced Eyebrow Conditioner(0.101 fl. oz.)",
             discountmessage:"10% off with code REPLAY",
             rating:"★ ★ ★ ★ ★ 2010", 
             price:"$150.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/12747871-5844866386756265.jpg",
          productdetail:"Dr Dennis Gross SpectraLite™ FaceWare Pro (1 piece)",
             discountmessage:"3% off with code REPLAY",
             rating:"★ ★ ★ ★ 868", 
             price:"$455.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/13339906-1564915031255922.jpg",
          productdetail:"Revision Skincare® D.E.J eye cream 0.5 oz",
             discountmessage:"30% off with code REPLAY",
             rating:"★ ★ ★ ★ 4968", 
             price:"$250.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
          productdetail:"Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)",
             discountmessage:"20% off with code REPLAY",
             rating:"★ ★ ★ ★ 4968", 
             price:"$53.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11289609-1174892770940184.jpg",
          productdetail:"SkinCeuticals C E Ferulic (1 fl. oz.)",
             discountmessage:"30% off with code REPLAY",
             rating:"★ ★ ★ ★ 4968", 
             price:"$182.00"
        }
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard1 imgSrc={slide.img} productdetail={slide.productdetail} discountmessage={slide.discountmessage} rating={slide.rating} price={slide.price}/>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider1;