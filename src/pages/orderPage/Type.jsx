import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "./../../components/ErrorBanner";
import { OrderContext } from "./../../context/orderContext";

function Type({ orderType }) {
  // order type은 products 이거나 options임
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderData, updateItemCount] = useContext(OrderContext); // order Context에서 상품 count 가져옴 => 39줄에서 props로 넘김

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
    return <ErrorBanner message="에러가 발생했습니다." />;
  }
  // itemcomponents는 orderType 따라 정해짐
  const ItemComponents = orderType === "products" ? Products : Options;
  // 전달해줄 props 중에 updateItemcount => 상품 갯수
  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  let orderTypeKorean = orderType === "products" ? "상품" : "옵션";
  return (
    // order summary 리턴함
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>
        {orderTypeKorean}Total of products{orderData.totals[orderType]}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
