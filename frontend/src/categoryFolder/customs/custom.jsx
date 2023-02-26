import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPostsMobile, getPosts,getPostsIron,getPostsJuicers,getPostsComputers,getPostsCameras,updatePosts } from '../../categoryFolder/api/api.action';
import {useToast} from '@chakra-ui/react'


const useCustom = () => {
  let posts = useSelector((store) => store.postsManager.posts);
  let loading = useSelector((store) => store.postsManager.loading);
  let datas = useSelector((store) => store.postsManager.datas);
  let [cart, setCart] = useState([]);
  let [wish, setWish] = useState([])
  let [texts, setText] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();
   

// ---------------------------load on screen loading for the first time ------------------------------------//
let loader =(pro="") =>{
  if(pro==""){
    return dispatch(getPosts())
  }else if(pro=="Mobiles"){
    return dispatch(getPostsMobile())
  }else if(pro=="Juicers"){
    return dispatch(getPostsJuicers())
  }else if(pro=="Irons"){
    return dispatch(getPostsIron())
  }else if(pro=="Computers"){
    return dispatch(getPostsComputers())
  }else if(pro=="Cameras"){
    return dispatch(getPostsCameras())
  }
  
}


//------------------------------------- sort item by price low to high ------------------------------------//
  let asc = (pro="") => {
    if(pro==""){
      return dispatch(getPosts())
    }else if(pro=="Mobiles"){
      return dispatch(getPostsMobile())
    }else if(pro=="Juicers"){
      return dispatch(getPostsJuicers())
    }else if(pro=="Irons"){
      return dispatch(getPostsIron())
    }else if(pro=="Computers"){
      return dispatch(getPostsComputers())
    }else if(pro=="Cameras"){
      return dispatch(getPostsCameras())
    }
    posts.sort((a, b) => {
      return (a.price) - (b.price);
    })
    dispatch(updatePosts(posts))
  }


//-------------------------------------- sort item by price high to low ------------------------------------//
  let desc = (pro) => {
    if(pro==""){
      return dispatch(getPosts())
    }else if(pro=="Mobiles"){
      return dispatch(getPostsMobile())
    }else if(pro=="Juicers"){
      return dispatch(getPostsJuicers())
    }else if(pro=="Irons"){
      return dispatch(getPostsIron())
    }else if(pro=="Computers"){
      return dispatch(getPostsComputers())
    }else if(pro=="Cameras"){
      return dispatch(getPostsCameras())
    }
    posts.sort((a, b) => {
      return (b.price) - (a.price)
    })
    dispatch(updatePosts(posts))
  }

//----------------------------------- filter Item by brand or discount ---------------------------------------//
  let filter = (txt,pro) => {
    if(pro==""){
      return dispatch(getPosts())
    }else if(pro=="Mobiles"){
      return dispatch(getPostsMobile())
    }else if(pro=="Juicers"){
      return dispatch(getPostsJuicers())
    }else if(pro=="Irons"){
      return dispatch(getPostsIron())
    }else if(pro=="Computers"){
      return dispatch(getPostsComputers())
    }else if(pro=="Cameras"){
      return dispatch(getPostsCameras())
    }
    let datas = [];
    posts.map((d) => {
      if (d.comp === txt) {
        datas = [...datas, d]
      }
    })

    dispatch(updatePosts(datas))
    setText(txt)
  }




  let filterBack = (txt) => {
    setText('');
    dispatch(updatePosts(posts))
  }

  //----------------------------------------Add Item to wish list-------------------------------------------//
  let wishList = (el) => {
    el.temp=Math.random()
    console.log(el.temp)
    let store = JSON.parse(localStorage.getItem("wish"))
    if(store==null){ store=[]};
    store.push(el)
    localStorage.setItem("wish",JSON.stringify(store))
    console.log(store)
    setWish(store)
    console.log(store)

    return (
      toast({
        title: 'wish added to list.',
        description: "you can see your list in wishList section",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    )
    
  }

  //-----------------------------------------add to cart-------------------------------------------//
  let addtocart=(elem)=>{
     elem={
     name:elem.title,
     img_url_1:elem.url,
     mrp:elem.price
     
    }
    fetch("https://prickly-beret-goat.cyclic.app/carts/addproduct",{
      method:"POST",
      body:JSON.stringify(elem),
      headers:{
          "Content-type":"application/json",
          "Authorization":localStorage.getItem("token")
      }
     })
      .then(res=>res.json())
     .then(res=>console.log(res))
     .catch(err=>console.log(err.message))

    // let store = JSON.parse(localStorage.getItem("product"))

    // if(store==null){ store=[]};
    // store.push(elem)
    // localStorage.setItem("product",JSON.stringify(store))
    // console.log(store)

    return (
      toast({
        title: 'product added to list.',
        description: "you can see your product in your cart",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    )
   }
//-----------------------------wish removed from wish list---------------------------//
let wishRemove=(elem)=>{
  let store = JSON.parse(localStorage.getItem("wish"))

 let ar=[];
 store.map((el)=>{
  if(el.temp !== elem.temp){
    ar.push(elem)
  }
 })

  localStorage.setItem("wish",JSON.stringify(ar))
  setWish(ar)

  return (
    toast({
      title: 'product removed from the list.',
      description: "you can not see your product in your wishlist now",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  )
//-------------------------------------------------------------------------------------------------------//
}
return [posts,loading,datas,asc,desc,filter,filterBack,cart,loader,wishList,wish,addtocart,wishRemove]
}

export default useCustom