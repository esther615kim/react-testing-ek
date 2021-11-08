import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

function Type({ orderType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems(orderType);
  }, []);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:3000/${orderType}`);
      setItems(response.data); // response.data ->ctx.json
    } catch (error) {
      console.error(error);
    }
  };

  // itemcomponents는 orderType 따라 정해짐
  const ItemComponents = orderType === "products" ? Products : null; //option은 null로 but why null?
  // item 카드
  const optionItems = items.map((item) => {
    return (
      <ItemComponents
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return (
    <div>
      <h3>{optionItems}</h3>
    </div>
  );
}

export default Type;
