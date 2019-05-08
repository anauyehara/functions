console.log(formatName (userFirstName, userLastName));

function formatName (firstName, lastName){
    var formattedName = lastName + ' ' + firstName;
    localStorage.setItem('userFullName', formattedName);

    return formattedName;
    
}