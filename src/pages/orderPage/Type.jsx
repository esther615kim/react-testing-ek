import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Products from "./Products";

function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    console.erro(error);
    // return <ErrorBanner message="에러가 발생했습니다." />;
  }
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
