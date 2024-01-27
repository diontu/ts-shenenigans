const isNumberOrString = (arg: number | string) => {
    if (typeof arg === "number") {
        // arg is a number
        console.log(arg + " is a number");
    } else {
        // arg is a string
        console.log(arg + " is a string");
    }
};
