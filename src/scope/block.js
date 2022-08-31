//BLOCK SCOPE, let y const solo van a tener block scope, var es function scope

function fruits(){
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2); //Block scope
        console.log(fruit3);//Block scope
    }
    console.log(fruit1); //function Scope
   
}
    fruits();