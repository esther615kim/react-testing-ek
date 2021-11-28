import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function Products({ name, imagePath, updateItemCount }) {
  // type.jsx 에서 내려주는 props

  const handleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCount(name, currentValue); // props로 받은 count 세는 함수
  };
  return (
    <div className="product-card">
      <img src={`http://localhost:5000/${imagePath}`} alt={`${name} product`} />
      <form>
        <div>
          <label htmlFor={name}>{name}</label>
          <input
            id={name}
            type="number"
            name="orderQuantity"
            min="0"
            defaultValue={0}
            onChange={handleChange}
          />
        </div>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
      </form>
    </div>
  );
}

export default Products;
