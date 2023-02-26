import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import axios from "axios"
import React,{useEffect,useState} from "react";

export default function FeaturedInfo() {
  const [cartdata,setCartdata]=useState([])
  const [mrp,setMrp]=useState("")

  useEffect(()=>{
  
   
   
    fetch("https://prickly-beret-goat.cyclic.app/carts/allcartdata",{
      method:"GET",  
      headers:{
       "Authorization":localStorage.getItem("token")
      }
  })
  .then(res=>res.json())
  .then(res=>
    setCartdata(res)
   
  )


  .catch(err=>console.log(err))
    
  },[])
  let revenue=0;
  let sales=0;
   
  cartdata.map((e)=>[revenue+=e.mrp,sales=e.offer_price]
   
  )
  console.log(revenue)
  console.log(sales)
  


  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${revenue-sales}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${revenue}</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${Math.abs(revenue/sales).toFixed(2)}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
