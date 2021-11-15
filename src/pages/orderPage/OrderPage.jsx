import React from 'react';
import Type from "./Type";
export default function OrderPage() {
    return (
        <div>
            <h1>Travel Products</h1> 
            {/* prettier 안먹힘? */}
      <div>
        <Type orderType="products" />
      </div>

      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>

        <div>
          <h2>Total Price</h2>
          <br />
          <button>Order now</button>
        </div>

      </div> 

        </div>
    )
}




// import React, { useContext } from "react";

// import Type from "./Type";

// function OrderPage({ setStep }) {


//   return (
//     <div>
//       <h1>Travel Products</h1>
//       <div>
//         <Type orderType="products" />
//       </div>
//       <div style={{ display: "flex", marginTop: 20 }}>
//         <div style={{ width: "50%" }}>
//           <Type orderType="options" />
//         </div>
//         <div>
//           <h2>Total Price: {orderDatas.totals.total}</h2>
//           <br />
//           <button onClick={() => setStep(1)}>주문하기</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderPage;
