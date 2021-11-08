import { rest } from 'msw';

export const handlers = [
    // products handler
    rest.get('http://localhost:3000/products', (req, res, ctx) => {
        return res(
            ctx.json([
                //items
                {
                    "name": "New York",
                    "imagePath": "주소명",
                    "price": 1500
                },
                {
                    "name": "Paris",
                    "imagePath": "주소명",
                    "price": 650
                }
            ])
        )
    }
    ),
    // rest.get('', (req, res, ctx) => {
    //     return res(
    //         ctx.json([
    //             {
    //                 "type": "Insurance",
    //                 "Price": 50
    //             },
    //             {
    //                 "type": "Breakfast",
    //                 "Price": 20
    //             },
    //         ])
    //     )
    // })
]

// handler  
// rest.get('', (req, res, ctx) => {
//         return res(
//             ctx.json([
//                 {},
//             ])
//         )
//     })