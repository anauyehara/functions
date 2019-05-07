//global scope
var globalVar = 'Hello World';

function sayHello () {
    console.log (globalVar);

//local/function scope
    var funcVar = 'I\'m scoped inside a function. ';
    console.log(funcVar);
}

sayHello();
console.log(globalVar);
//console.log (funcVar);

//block scope

if (true){
    //let is basically var. Allows for reassignment
    //const stores a constant value only. Cannot be reassigned
    var blockVar = 'I\'m insided a block';
    console.log(blockVar);

}
    //console.log(blockVar);

    function secondfunction(){
        console.log(funcVar);
    }

    //secondFunction();

    //nested scope
    function outerFunction (){
        const outer = 'I\'m defined in outerFunction.';
        console.log(outer);

        function innerFunction (){
            const inner = 'I\'m defined in innerFunction.';
            console.log(inner);

        }
        //innerFunction();
        //console.log(inner);

        return innerFunction;
    }
    outerFunction();
    

