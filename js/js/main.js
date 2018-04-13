var messageWithExtraBlanks = " some   text ";
var message = "some text";

console.log(lastSymbol(message));
console.log(stringWithoutLast(message));
console.log(reverseString(messageWithExtraBlanks));
console.log(removeExtraBlanks(messageWithExtraBlanks));

function lastSymbol(string) {
    return (string[string.length - 1]);
}

function stringWithoutLast(string) {
    var newString = '';
    var i;
    for (i = 0; i < string.length - 1; i++) {
        newString += string[i];
    }
    return (newString);
}
function reverseString(string) {
    var newString = '';
    var i;
    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return (newString);
}

function removeExtraBlanks(string) {
    var newString = '';
    var i;
    for (i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            newString += string[i];
        }
        else if ((string[i] == ' ') && (string[i - 1] != ' ') && (i != string.length - 1) && (i !== 0)){
            newString += string[i];
        }
    }
    return(newString);
}

/*

1. Почитать code convention.
2. Название переменной должно объяснять, что в ней находится.
3. Название функции должно объяснять, что она делает.
4. Не использовать сокращения (str).

*/