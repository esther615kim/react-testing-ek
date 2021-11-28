import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();

const PRICES = {
  products: 1000,
  options: 500,
};

//product qty * price
function calculateSum(orderType, orderCounts) {
  let quantity = 0;
  // 읭.!!
  for (const count of orderCounts[orderType].values()) {
    quantity += count;
  }

  return quantity * PRICES[orderType];
}

// update/display order total
export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });
  // ordercounts 업뎃
  useEffect(() => {
    const productsTotal = calculateSum("products", orderCounts);
    const optionsTotal = calculateSum("options", orderCounts);
    const grandTotal = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      grandTotal,
    });
  }, [orderCounts]);

  // value 에 넣을 data
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts }; //orderCount update 를 위해서 새로 만듦

      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount)); //parseInt :to make sure that it is number

      setOrderCounts(newOrderCounts);
    }

    const resetOrderData = () => {
      setOrderCounts({
        products: new Map(),
        options: new Map(),
      });
    };

    //     return [{ ...orderCounts, totals }, updateItemCount]; // things to be returned
    //   }, [orderCounts, totals]); // orderCounts 감시 => updated

    //   return <OrderContext.Provider value={value} {...props} />; // .Provider 형식..?
    // }

    return [{ ...orderCounts, totals }, updateItemCount]; // things to be returned 근데 이렇게 까지 복잡하게 할 일?
  }, [orderCounts, totals]);
  return <OrderContext.Provider value={value} {...props} />; // .Provider 형식
}
