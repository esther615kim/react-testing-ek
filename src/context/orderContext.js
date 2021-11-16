import { createContext, useMemo, useState } from "react";

const OrderContext = createContext();

// update/display order total
export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map(),
    });

    // value 에 넣을 data
    const value = useMemo(() => {

        function updateItemCount(itemName, newItemCount, orderType) {
            const newOrderCounts = { ...orderCounts }; //orderCount update 를 위해서 새로 만듦 

            const orderCountsMap = orderCounts[orderType];
            orderCountsMap.set(itemName, parseInt(newItemCount)); //parseInt :to make sure that it is number 

            setOrderCounts(newOrderCounts);
        }

        return [{ ...orderCounts }, updateItemCount] //?!
    }, orderCounts) // orderCounts 감시

    return <OrderContextProvider value={value} {...props} /> // 얜모닝{...props} !!

}