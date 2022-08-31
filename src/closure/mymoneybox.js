// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log (`MoneyBox: $${saveCoins}`)
// }
// moneyBox(5);
// moneyBox(5);
//clousure, acceder a la variable con ámbito lexico
function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

//-----ejempl0 2
function shoppingCart(){
    let cart = [];
    function addItems(item){
        cart.push(item);
        console.log(cart);
    }
    return addItems;
}

const amazon = shoppingCart();
amazon("Mouse");
amazon("Keyboard");
amazon(`Display 24"`);





