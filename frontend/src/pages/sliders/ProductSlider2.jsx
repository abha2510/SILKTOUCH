import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/ProductSlider.css";
import ProductCard2 from "./ProductCard2";

class ProductSlider2 extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/14232475-6035024251464489.jpg",
          productdetail:"Oribe Hair Resilience Alchemy Travel Shampoo 75ml",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ 4968", 
             price:"$20.00"
        
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/14193375-6685006070851562.jpg",
          productdetail:"Kate Somerville Hydrakate Recharging Serum 30ml",
          discountmessage:"New Arrival",
          rating:"★ ★ ★ ★ ★ 2918", 
          price:"$78.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/13227173-1234888080080583.jpg",
          productdetail:"Dr. Loretta The Beauty Sleep Set - $125 Value",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ ★ 2588", 
             price:"$42.80"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/12707050-4604866389386266.jpg",
          productdetail:"Sunday Riley GOOD GENES Treatment (1.7oz. - $175 Value)",
             discountmessage:"New Arrival",
             rating:"★ ★ ★  6928", 
             price:"$122.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12712938-3884809794576832.jpg",
          productdetail:"SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ ★ 4968", 
             price:"$450.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/12903058-1404864829361585.jpg",
          productdetail:"RevitaLash Advanced Eyebrow Conditioner(0.101 fl. oz.)",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ ★ 2010", 
             price:"$150.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12531883-1744781109925587.jpg",
          productdetail:"Dr Dennis Gross SpectraLite™ FaceWare Pro (1 piece)",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ 868", 
             price:"$455.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/13126281-9064897192950954.jpg",
          productdetail:"Revision Skincare® D.E.J eye cream 0.5 oz",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ 4968", 
             price:"$250.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11599959-6614967223071262.jpg",
          productdetail:"Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)",
             discountmessage:"New Arrival",
             rating:"★ ★ ★ ★ 4968", 
             price:"$53.00"
        },
        {
          img: "https://static.thcdn.com/images/small/webp//productimg/original/11291519-9074871742575709.jpg",
          productdetail:"SkinCeuticals C E Ferulic (1 fl. oz.)",
             discountmessage:"New Arrival",
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
                <ProductCard2 imgSrc={slide.img} productdetail={slide.productdetail} discountmessage={slide.discountmessage} rating={slide.rating} price={slide.price}/>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider2;