import "./widgetLg.css";
import React,{useState,useEffect} from "react"

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
 const [cartdata,setCartdata]=useState([])
  const [user,setUser]=useState([])
  const [user_id,setUser_id]=useState([])
  const [id,setId]=useState([])

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
  
  console.log(cartdata)
 
   



  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer id</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {
          cartdata.map((e)=>(
<tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{e.userId}</span>
            
          </td>
          <td className="widgetLgDate">{Date()}</td>
          <td className="widgetLgAmount">${e.mrp}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
          ))
        }
        
       
      </table>
    </div>
  );
}