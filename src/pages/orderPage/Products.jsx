import React from "react";

function Products({ name, imagePath, updateItemCount }) {
  //updateItemCount?
  const handleChange = (event) => {
    const currentValue = event.target.value;
    // updateItemCount(name, currentValue);
  };
  return (
    <div>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Products;
