let product ={};
    product.name = "Wireless Mouse";
    product["price"] = 29.99;
    product.stock = 100;

    product.price = 82;
    product.stock = 50;


console.log(product.name);
console.log(product["price"]);
console.log(product.stock);

delete product.stock;

console.log(product);