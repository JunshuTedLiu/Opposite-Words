

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

function reset() {
    typedWord = "";
    word = "";
    error = "";
    document.getElementById("wordInput").value = "";
    document.getElementById("wordText").innerHTML = word;
    document.getElementById("error").innerHTML = error;
}