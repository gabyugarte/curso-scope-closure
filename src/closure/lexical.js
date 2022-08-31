//Accesibilidad de las variables 
const myGlobal = 0;
//Ambito lexico, accesibilidad que tenemos sobre las variables anidadas dentro de funciones,

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //función interna, al aver creado una función dentro de otra ya es un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    
    }
    return parent();
}

myFunction(); 