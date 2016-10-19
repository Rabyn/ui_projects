var cart = [];
var fruits = ['apple', 'orange', 'mango'];
var animals = ['dog', 'cat', 'mouse'];
console.log(fruits[2]);
cart.push(fruits[2]);
console.log(cart[0])
cart.pop();

function parseArray(param) {
    console.log("From Function")
    for (var i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}

parseArray(fruits);
parseArray(animals);
