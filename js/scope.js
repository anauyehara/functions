//global scope
var globalVar = 'Hello World';

function sayHello () {
    console.log (globalVar);

    var funcVar = 'I\'m scoped inside a function. ';
    console.log(funcVar);
}

sayHello();
console.log(globalVar);

if (true){
    var blockVar = 'I\'m insided a block';
    console.log(blockVar);

}
    console.log(blockVar);