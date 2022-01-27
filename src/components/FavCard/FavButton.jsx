import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function FavButton({ liked}) {

  return <>
    {!liked ? < FavoriteBorderIcon /> : <FavoriteIcon />}
    </>;
}
