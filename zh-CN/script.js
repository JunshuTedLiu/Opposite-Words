

var typedWord;
var word = "";
var error = "";

function notWord() {
    typedWord = typedWord = document.getElementById("wordInput").value;
    console.log("Typed: " + typedWord);
    if (typedWord == "") {
        word = "";
        error = "输入框不能为空。请填写一个词语。"
    } else if (typedWord == "不") {
        word = "";
        error = "不什么？你想表达什么？请将您的词语填写完整。"
    }
    else {
        error = "";
        if (typedWord.startsWith("不") == true) {
            word = typedWord.substring(1);
        } else {
            word = "不" + typedWord;
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