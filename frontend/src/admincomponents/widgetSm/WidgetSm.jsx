import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React,{useState,useEffect} from "react"
export default function WidgetSm() {
  
  const [user,setUser]=useState([])

  useEffect(()=>{
  
   
   
    fetch("https://prickly-beret-goat.cyclic.app/users",{
      method:"GET",  
      headers:{
       "Authorization":localStorage.getItem("token")
      }
  })
  .then(res=>res.json())
  .then(res=>
    setUser(res)
   
  )


  .catch(err=>console.log(err))
    
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
       
       {
        user.map((e)=>(
          <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{e.name}</span>
            <span className="widgetSmUserTitle">{e.email}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        ))
       }
     
        
      </ul>
    </div>
  );
}