import React,{useEffect,useState} from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FavButton({id,handleAddtoFavList}) {

  const [redHeart,setRedHeart] = useState(false);
  // useEffect(()=>{
  //   if(redHeart){
  //     setRedHeart(true);
  //   }else{
  //     setRedHeart(false);
  //   }
  // },[redHeart])

  return <>
    {redHeart ? <FavoriteIcon />:< FavoriteBorderIcon />}
    </>;
}
