function fizzbuzz(number) {
    if (number % 3 === 0) {
        return "Fizz";
    }
    return number.toString();
}

export default fizzbuzz;