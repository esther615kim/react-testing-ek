import { setupServer } from 'msw/node';
import { rest } from 'msw';
// import { handlers } from './handlers';

export const handlers = [
    // products handler
    rest.get('http://localhost:3000/products', (res, ctx) => {
        return res(
            ctx.json([
                //items
                {
                    "name": "New York",
                    // "imagePath": "/images/america.jpeg",
                    "price": 1500
                },
                {
                    "name": "London",
                    // "imagePath": "/images/england.jpeg",
                    "price": 650
                }
            ])
        )
    }
    ),
    rest.get('http://localhost:3000/options', (res, ctx) => {
        return res(
            ctx.json([
                {
                    "type": "Insurance",
                    "Price": 50
                },
                {
                    "type": "Breakfast",
                    "Price": 20
                },
            ])
        )
    })
]

//create mockup server 
export const server = setupServer(...handlers); // 여기 오류 뿜 TypeError: (0 , _msw.setupServer) is not a function


beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
