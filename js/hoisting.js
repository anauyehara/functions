//functions defined by declaration are hoisted to the top
functionDeclaration ();
function funcDeclaration(){
    console.log ('I\'m insided a function declaration.');

}
//functions defined by expression are not hoisted to the top. They remain where they are defined
funcExpression ();
var funcExpression = function (){
    console.log ('I\'m inside a function declaration.');

};

//so to avoid confusion, its best practice is to use function 