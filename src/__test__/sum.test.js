import { sum } from "../Sum"

test("testing sum function",()=>{
   const result =  sum(2,3)
//    console.log(result)
   // assertion
    expect(result).toBe(5)
})