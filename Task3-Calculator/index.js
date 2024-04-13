const resultArea = document.querySelector(".result");

document.querySelector(".opDecimal").addEventListener("click", (e) =>   {resultArea.value += "."})
document.querySelector(".num7").addEventListener("click", (e) =>  {resultArea.value += "7"});
document.querySelector(".num8").addEventListener("click", (e) =>  {resultArea.value += "8"});
document.querySelector(".num9").addEventListener("click", (e) =>  {resultArea.value += "9"});
document.querySelector(".num4").addEventListener("click", (e) =>  {resultArea.value += "4"});
document.querySelector(".num5").addEventListener("click", (e) =>  {resultArea.value += "5"});
document.querySelector(".num6").addEventListener("click", (e) =>  {resultArea.value += "6"});
document.querySelector(".num1").addEventListener("click", (e) =>  {resultArea.value += "1"});
document.querySelector(".num2").addEventListener("click", (e) =>  {resultArea.value += "2"});
document.querySelector(".num3").addEventListener("click", (e) =>  {resultArea.value += "3"});

const opAdd = document.querySelector(".opAdd");
const opMultiply = document.querySelector(".opMultiply");
const opSubtract = document.querySelector(".opSubtract");
const opDivide = document.querySelector(".opDivide");
const opBracketOpen = document.querySelector(".opBracketOpen");
const opBracketClose = document.querySelector(".opBracketClose");
const opEqual = document.querySelector(".opEqual");
const opDel = document.querySelector(".opDel");
const opClear = document.querySelector(".opClear");

const currVal = 0

resultArea.readOnly = true;
resultArea.value = "";

document.querySelector("body").addEventListener("keydown", (e) => {

    switch(e.key)    {
        case "+":
            add();
            break;
        
        case "-":
            subtract();
            break;
        
        case "*":
            multiply();
            break;
        
        case "/":
            divide();
            break;

        case "(":
            OpenBracket();
            break;
        
        case ")":
            CloseBracket();
            break;
        
        case ".":
            Decimal();
            break;
        
        case "Enter":
            Evaluate();
            break;
        case "Backspace":
            Del();
            break;
        
    }
    
    if(isNaN(e.key) === true)   {
        resultArea.value += "";
    }
    else    {
        resultArea.value += e.key
    }
})

function add() {
    resultArea.value += "+"
}

function subtract() {
    resultArea.value += "-"
}

function multiply() {
    resultArea.value += "*"
}

function divide()  {
    resultArea.value += "/"
}

function OpenBracket()   {
    resultArea.value += "("
}

function CloseBracket()   {
    resultArea.value += ")"
}

function Decimal() {
    resultArea.value += "."
}

function Evaluate()    {
    try {
        if(resultArea.value !== "")  {
            resultArea.value = eval(resultArea.value)
        }
    }
    catch(err)  {
        alert(err.name);
    }
}

function Del(e) {
    const result = resultArea.value.slice(0, -1);
    resultArea.value = result;
}

opAdd.addEventListener("click", add);
opSubtract.addEventListener("click", subtract);
opMultiply.addEventListener("click", multiply);
opDivide.addEventListener("click", divide);
opBracketOpen.addEventListener("click", OpenBracket)
opBracketClose.addEventListener("click", CloseBracket)
opEqual.addEventListener("click", Evaluate);
opClear.addEventListener("click", () => {resultArea.value = ""});
opDel.addEventListener("click", Del)

