import { sumNumbers } from './sum';

test('should sum the passed numbers',()=>{
    const a:string = 5;
    expect(a).toBe(5);
    expect(sumNumbers(5,2)).toBe(7);
})