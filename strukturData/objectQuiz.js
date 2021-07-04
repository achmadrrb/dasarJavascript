const restaurant = {
    name: "Achmad Rifki",
    city: "Tangerang",
    "favorite drink": "Teh Manis",
    "favorite food": "Soto Mie",
    isVegan: false
}

const name = restaurant.name
const favoriteDrink = restaurant["favorite drink"]

console.log(name);
console.log(favoriteDrink);


module.exports = { restaurant, name, favoriteDrink };