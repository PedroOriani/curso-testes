import calculator from "calculator"

describe("maths Tests", () => {
    it("Sum", () => {
        const n1 = 1;
        const n2 = 2;
        const result = calculator.sum(n1, n2);
        expect(result).toEqual(n1 + n2)
    });

    it("Sub", () => {
        const n1 = 1;
        const n2 = 2;
        const result = calculator.sub(n1, n2);
        expect(result).toEqual(n1 - n2)
    });

    it("Mul", () => {
        const n1 = 1;
        const n2 = 2;
        const result = calculator.mul(n1, n2);
        expect(result).toEqual(n1 * n2)
    });

    it("Div", () => {
        const n1 = 1;
        const n2 = 2;
        const result = calculator.div(n1, n2);
        expect(result).toEqual(n1 / n2)
    });
})

