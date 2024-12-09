
let operand1;
let operand2;
let operation = "";
let dotUsable = true;

function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function operate(a, b, operator){
  let result;
  switch(operator){
    case "+":
      console.log(`before add: a = ${a}, b = ${b}`);
      result = add(a, b);
      console.log(`add result: ${result}, a = ${a}, b = ${b}`);
      if(!Number.isInteger(result)){
        result = result.toFixed(4);
        result = parseFloat(result);
      }
      return result;
    case "-":
      console.log(`before subtract: a = ${a}, b = ${b}`);
      result = subtract(a, b);
      console.log(`subtract result: ${result}, a = ${a}, b = ${b}`);
      if(!Number.isInteger(result)){
        result = result.toFixed(4);
        result = parseFloat(result);
      }
      return result;
    case "*":
      console.log(`before multiply: a = ${a}, b = ${b}`);
      result = multiply(a, b);
      console.log(`multiply result: ${result}, a = ${a}, b = ${b}`);
      if(!Number.isInteger(result)){
        result = result.toFixed(4);
        result = parseFloat(result);
      }
      return result;
    case "/":
      if(b == 0){
        alert("Please don't divide by zero");
        return;
      }
      console.log(`before divide: a = ${a}, b = ${b}`);
      result = divide(a, b);
      console.log(`divide result: ${result}, a = ${a}, b = ${b}`);
      if(!Number.isInteger(result)){
        result = result.toFixed(4);
        result = parseFloat(result);
      }
      return result;
    default:
      return "Error? Incorrect operator";
  }
  
}
/*
  get first operand if no operand was already typed else get the second
*/
function getOperand(){
  let display = document.querySelector(".display");
  if(operation == ""){
    if(display.textContent.includes(".")){
      operand1 = parseFloat(display.textContent);
    }
    else{
      operand1 = parseInt(display.textContent);
    }
  }
  else{
    operand2 = display.textContent.split(operation)[1];
    if(operand2.includes(".")){
      operand2 = parseFloat(operand2);
    }
    else{
      operand2 = parseInt(operand2);
    }
  }
  dotUsable = true;
}

function addButtonEventListener(){

  let calculator = document.querySelector(".calculator");
  let display = document.querySelector(".display");
  let button;

  calculator.addEventListener("click", (event) => {
    button = event.target;

    if(operation != "" && display.textContent.split(operation).length == 2){
      document.querySelector("#equal").disabled = false;
    }

    if(!dotUsable){
      document.querySelector("#dot").disabled = true;
    }
    else{
      document.querySelector("#dot").disabled = false;
    }

    switch(button.id){
      case "0":
        display.textContent += "0";
        break;
      case "1":
        display.textContent += "1";
        break;
      case "2":
        display.textContent += "2";
        break;
      case "3":
        display.textContent += "3";
        break;
      case "4":
        display.textContent += "4";
        break;
      case "5":
        display.textContent += "5";
        break;
      case "6":
        display.textContent += "6";
        break;
      case "7":
        display.textContent += "7";
        break;
      case "8":
        display.textContent += "8";
        break;
      case "9":
        display.textContent += "9";
        break;
      case "add":
        if(operation == ""){
          getOperand();
          operation = "+";
          display.textContent += "+"
          document.querySelector("#dot").disabled = false;
          dotUsable = true;
        }
        break;
      case "subtract":
        if(operation == ""){
          getOperand();
          operation = "-";
          display.textContent += "-"
          document.querySelector("#dot").disabled = false;
          dotUsable = true;
        }
        break;
      case "multiply":
        if(operation == ""){
          getOperand();
          operation = "*";
          display.textContent += "*"
          document.querySelector("#dot").disabled = false;
          dotUsable = true;
        }
        break;
      case "divide":
        if(operation == ""){
          getOperand();
          operation = "/";
          display.textContent += "/"
          document.querySelector("#dot").disabled = false;
          dotUsable = true;
        }
        break;
      case "clear":
        operand1 = 0;
        operand2 = 0;
        operation = "";
        display.textContent = "";
        document.querySelector("#equal").disabled = true;
        dotUsable = true;
        document.querySelector("#dot").disabled = false;
        break;
      case "backspace":
        alert("Backspace not yet implemented");
        break;
      case "dot":
        if(dotUsable){
          display.textContent += ".";
          dotUsable = false;
          document.querySelector("#dot").disabled = true;
        }
        break;
      case "equal":
        getOperand();
        display.textContent = operate(operand1, operand2, operation);
        operation = "";
        document.querySelector("#equal").disabled = true;
        document.querySelector("#dot").disabled = false;
        dotUsable = true;        
        break;
    }

  });

}

addButtonEventListener();