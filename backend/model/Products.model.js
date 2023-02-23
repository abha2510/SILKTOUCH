const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: String,
    brand: String,
    name: String,
    description: String,
    img_url_1: String,
    img_url_2: String,
    img_url_3: String,
    item_category: String,
    complexion_format: String,
    complexion_coverage: String,
    makeup_category: String,
    rating: Number,
    review_count: Number,
    mrp: Number,
    offer_price: Number,
    quantity: Number,
    discount:Number,
    gender:String,
    item_in_cart: String,
    item_like: String,
    item_stock: String,
    userId:String
  },
  {
    versionKey: false,
  }
);

const ProductModel=mongoose.model("product",productSchema);

module.exports={ProductModel};

// {
//   id: String,
//   brand: String,
//https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/eltamd.gif",
//       "name": "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
//       "description": "A tinted mineral sunscreen that provides broad spectrum sun protection.",
//       "img_url_1": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1304944342872775.jpg",
//       "img_url_2": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-8714944342890403.jpg",
//       "img_url_3": "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370314-1704944342981480.jpg",
//       "item_category": "Moisturizers",
//       "complexion_format": "Cream",
//       "complexion_coverage": "Buildable",
//       "makeup_category": "Complexion",
//       "rating": 4.8,
//       "review_count": 118,
//       "mrp": 84,
//       "offer_price": 45,
//       "quantity": 1,
//       "item_in_cart": "false",
//       "item_like": "false",
//       "item_stock": "true"
      
  
    
// }