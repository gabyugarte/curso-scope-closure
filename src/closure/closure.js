//funcion anidada, función dentro de otra función.

function greeting(){
    let userName = 'Gaby';

    function displayUserName(){
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);//en este llamamos estamos retornando la definición displayUserName
console.log(g()); //cuando la ejecutamos, nos entrega el valor

