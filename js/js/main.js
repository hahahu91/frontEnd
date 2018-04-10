var message1 = " some   text ";
var message = "some text";

console.log(lastSymbol(message));
console.log(withOutLast(message));
console.log(mirror(message1));
console.log(noSpace(message1));

function lastSymbol(str) {
    return (str[str.length -1]);
}

function withOutLast(str) {
    var withoutlast = "";
    for (i=0; i < str.length - 1; i++) {
        withoutlast += str[i];
    }
    return (withoutlast);
}
function mirror(str) {
    var Mirror = "";
    for (i = str.length-1; i >= 0; i--) {
        Mirror += str[i];
    }
    return (Mirror);
}
function noSpace(str) {
    var NoSpace = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            NoSpace += str[i];
        }
        else if ((str[i] == " ") && (str[i-1] != ' ') && (i != str.length-1) && (i != 0)){
            NoSpace += str[i];
        }
    }
    return(NoSpace);
}