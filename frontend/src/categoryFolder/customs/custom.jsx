import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPostsMobile, updatePosts } from '../../categoryFolder/api/api.action';
import {useToast} from '@chakra-ui/react'


const useCustom = () => {
  let posts = useSelector((store) => store.postsManager.posts);
  let loading = useSelector((store) => store.postsManager.loading);
  let datas = useSelector((store) => store.postsManager.datas);
  let [cart, setCart] = useState([]);
  let [wish, setWish] = useState([])
  let [texts, setText] = useState('');
  const dispatch = useDispatch();
  const toast = useToast()
   

// ---------------------------load on screen loading for the first time ------------------------------------//
let loader =() =>{
  return dispatch(getPostsMobile())
}


//------------------------------------- sort item by price low to high ------------------------------------//
  let asc = () => {
    dispatch(getPostsMobile())
    posts.sort((a, b) => {
      return (a.price) - (b.price);
    })
    dispatch(updatePosts(posts))
  }


//-------------------------------------- sort item by price high to low ------------------------------------//
  let desc = () => {
    dispatch(getPostsMobile())
    posts.sort((a, b) => {
      return (b.price) - (a.price)
    })
    dispatch(updatePosts(posts))
  }

//----------------------------------- filter Item by brand or discount ---------------------------------------//
  let filter = (txt) => {
    dispatch(getPostsMobile())
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

  //---------------------------------------item added to cart------------------------------------------//
  let addToCart = (ind, st) => {
    posts.map((el) => {
      if (el.id === ind) {
        setCart([...cart, el])
      }
    })
  }

  //----------------------------------------Add Item to wish list-------------------------------------------//
  let wishList = (ind) => {
    posts.map((el) => {
      if (el.id === ind) {
        setWish([...wish, el])
      }
    })

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
return [posts,loading,datas,asc,desc,filter,filterBack,cart,loader,wishList,wish]
}

export default useCustom