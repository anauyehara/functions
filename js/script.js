// declare a function
 function formatName(firstName,lastName){
    //console.log(firstName);
   // console.log(lastName);

    //console.log(lastName + '' + firstName);
    //save to server
   
   if(localStorage.getItem ('userFullName')){

   } else {
    localStorage.setItem('username', formattedName); // save to local storage
    
   }
    
    return formattedName;
    
}

var userFirstName = 'Ana';
var userLastName = 'Uyehara';

// console.log(formatName (userfirstName, userlastName));
//formatName
// function expression:
//var createUserObj = function (firstName, lastName){
   // var userObj = {
    //    name: formatName(firstName,lastName),
     //   age: null
    //};
   // return UserObj;  
//}(userfirstName, userlastName);// add last set of parenthesis to evaluate function expression immediately after creation
//console.log(createUserObj);

//constructor way
//var concatinate = new Function('X', 'Y', 'return x+y');
//console.log(concatinate('Ana', 'Uyehara'));
