var multiply = require('../multiply');

describe("multiply Functionality",()=>{
    it("should multiply positive numbers",()=>{
        const result = multiply(4,5);
        expect(result).toEqual(20);
    });
    it("should multiply negative numbers",()=>{
        const result = multiply(-4,-5);
        expect(result).toEqual(20);
    });
    it("should multiply positive and negative number",()=>{
        const result = multiply(-4,5);
        expect(result).toEqual(-20);
    });
});