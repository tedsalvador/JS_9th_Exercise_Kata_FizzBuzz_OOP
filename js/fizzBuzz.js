class FizzBuzz {
    constructor(limit) {
        this.limit = limit;
    }

    print() {
        for (let i = 1; i <= this.limit; i++) {
            console.log(this.getOutput(i));
        }
    }

    getOutput(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "FizzBuzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
    }
}

export default FizzBuzz;
