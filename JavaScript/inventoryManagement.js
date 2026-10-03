const products = [
    "Laptop",
    "Phone",
    "Headphones",
    "Monitor"
];

function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(productName) {
    products.push(productName);
}

function updateProductName(position, newName) {
    products[position] = newName;
}

function removeLastProduct() {
    products.pop();
}

logFirstProduct();

addProduct("Keyboard");

updateProductName(1, "Smartphone");

removeLastProduct();

console.log(products);