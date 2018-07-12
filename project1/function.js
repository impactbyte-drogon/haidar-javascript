console.log("=== CALCULATE TAX ===");

const calculateTax = (price = 0, name = "Unknown Product") => {
    tax = price * 0.1;

    message = `name: ${name}, price: IDR ${price}, tax: IDR ${tax}`;

    return message;
};

const result = calculateTax(8000, "Tissue")

console.log(result);