import React, { useEffect, useState} from "react";
import axios from "axios";
import {Paper, Box} from "@mui/material";
import Products from "./Products";
import Options from './Options';
import ErrorBanner from './../../components/ErrorBanner';

function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  // 아이템 로딩 함수 => hooks로 뺄 수 있을 것 같은뎅
  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true); 
    }
  };

  if (error) {
    console.error(error); 
    return <ErrorBanner message="An error has occurred." />;
  }
  // itemcomponents는 orderType 따라 정해짐
  const ItemComponents = (orderType === "products") ? Products : Options; 
   // item 카드 => props가 Products나 Options로 감
  const optionItems = items.map((item) => (
      <ItemComponents 
    key={item.name}
    name={item.name}
    imagePath={item.imagePath}
  />
 ));
  return (
      <div className="item-container">{optionItems}</div>
  );
}

export default Type;


