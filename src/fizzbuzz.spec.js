import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("debería devolver 'Fizz' si el número es divisible por 3", () => {
        expect(fizzbuzz(3)).toEqual("Fizz");
    });

    it("debería devolver 'Fizz' si el número es divisible por 3 con otros casos", () => {
        expect(fizzbuzz(6)).toEqual("Fizz");
    });
})
