function fizzbuzz(number) {
    if (number % 3 === 0) {
        return "Fizz";
    }

    if (number % 5 === 0) {
        return "Bu";
    }
 
    return number.toString();
}

export default fizzbuzz;