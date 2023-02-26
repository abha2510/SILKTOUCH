import { API_GET_ERROR, 
    API_GET_LOADING, 
    API_GET_SUCCESS,
    Update_Data
} from "./api.type";
import axios from 'axios';

export const getPosts=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});

    try{
        let res= await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=foundation&price_greater_than=12');
        // console.log(res.data)
        dispatch({type:API_GET_SUCCESS, payload : res.data})
    }catch(e){
        dispatch({type : API_GET_ERROR, payload: e.message})
    }
}

export const updatePosts=(datas)=>async (dispatch)=>{
   
   dispatch({type:Update_Data, payload : datas})
}

export const getPostsIron=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});
    try{
        let res= await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=mascara');
        dispatch({type:API_GET_SUCCESS, payload : res.data})
        console.log(res.data);
    }catch(e){
        dispatch({type : API_GET_ERROR, payload: e.message})
    }
}
export const getPostsMobile=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});

    fetch("https://prickly-beret-goat.cyclic.app/products",{  
        headers:{
         "Authorization":localStorage.getItem("token")
        }
    })
    .then(res=>res.json())
    .then(res=>
        // console.log(res)
        dispatch({type:API_GET_SUCCESS, payload : res})     
    )
    .catch(err=>console.log(err))
}
export const getPostsJuicers=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});
    try{
        let res= await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=blush&price_greater_than=20');
        console.log(res.data)
        dispatch({type:API_GET_SUCCESS, payload : res.data})
    }catch(e){
        dispatch({type : API_GET_ERROR, payload: e.message})
    }
}
export const getPostsComputers=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});

    try{
        let res= await axios.get(' https://shines-node-deploy.onrender.com/products');
        dispatch({type:API_GET_SUCCESS, payload : res.data.computers})
    }catch(e){
        dispatch({type : API_GET_ERROR, payload: e.message})
    }
}
export const getPostsCameras=()=> async(dispatch)=>{
    dispatch({type:API_GET_LOADING});

    try{
        let res= await axios.get(' https://shines-node-deploy.onrender.com/products');
        dispatch({type:API_GET_SUCCESS, payload : res.data.cameras})
    }catch(e){
        dispatch({type : API_GET_ERROR, payload: e.message})
    }
}






// export const updatePosts=(id,cred)=> async(dispatch)=>{
//       await axios.patch(`http://localhost:8000/iron/${id}`,{
//         completed:!cred
//       })
//       dispatch({type:API_UPDATE_SUCCESS , payload: {id,cred}})
//       //console.log(cred? "yes" : "no")
// }

// export const addPosts=(posts)=> async(dispatch)=>{
//     let res=axios.post(`http://localhost:8000/iron/`,posts)
//     console.log(posts)
//     dispatch({type:API_ADD, payload : res.data})
// }

// export const deletePosts=(id)=> async(dispatch)=>{
//   let res= await axios.delete(`http://localhost:8000/iron/${id}`)
//     dispatch({type:API_DELETE, payload: id})
// }