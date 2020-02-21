// total in cup
var variableOne = 0;

var yourBalance = 0;
var yourDebt = 0;
var yourHealthStatus = 100;

var typedWord;
var word = "";
var error = "";

function notWord() {
    typedWord = typedWord = document.getElementById("wordInput").value;
    console.log("Typed: " + typedWord);
    if (typedWord == "") {
        word = "";
        error = "Word not found. Please type something."
    }
    else {
        error = "";
        if (typedWord.startsWith("not ") == true) {
            word = typedWord.substring(4);
        } else {
            word = "not " + typedWord;
        }
    }
    console.log("Word updated as: " + word);
    document.getElementById("wordText").innerHTML = word;
    document.getElementById("error").innerHTML = error;
}

function incrementOne() {
    variableOne++;
    console.log("incremented VariableOne to"+variableOne+"");
    document.getElementById("variableOneText").innerHTML = "variableOne equals:"+variableOne;
}

function payment() {
    yourBalance = yourbalance - 1;
}