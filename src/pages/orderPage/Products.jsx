import React from "react";
import {FavoriteBorder} from '@mui/icons-material';
import {IconButton} from "@mui/material";
function Products({ name, imagePath}) { // type.jsx 에서 내려주는 props
  //updateItemCount?
  const handleChange = (event) => {
    const currentValue = event.target.value;
    // updateItemCount(name, currentValue);
  };
  return (
      <div className="product-card">
      <img 
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
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
                        <FavoriteBorder/>
                    </IconButton>
      </form>
    </div>
  );
}

export default Products;
