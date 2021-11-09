import { rest } from 'msw';

export const handlers = [
    // products handler
    rest.get('http://localhost:5000/products', (req, res, ctx) => {
        return res(
            ctx.json([
                //items
                {
                    name: "America",
                    imagePath: "/images/america.jpeg",
                    // "price": 1500
                },
                {
                    name: "England",
                    imagePath: "/images/england.jpeg",
                    // "price": 650
                }
            ])
        )
    }
    ),
    rest.get('http://localhost:5000/options', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: "Insurance",
                },
                {
                    name: "Dinner",
                },
            ])
        )
    })
]

// handler  
// rest.get('', (req, res, ctx) => {
//         return res(
//             ctx.json([
//                 {},
//             ])
//         )
//     })