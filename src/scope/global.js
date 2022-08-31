//VARIABLES

var a; // declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; // Reasignar
var a = 'aa'; // redeclaración


// GLOBAL SCOPE: cualquier variable que se encuentre en el documento pasan a ser variables globales y se estacían dentro del onjeto window

var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}
bestFruit();

//----------------------------------------------------------------

function countries() {
    country = 'Colombia'; //No declaramos la variable, se considera Global
    console.log(country);
}

countries();
console.log(country);




