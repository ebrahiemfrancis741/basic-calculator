



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

  switch(operator){
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error? Incorrect operator";
  }
  
}



function addButtonEventListener(){

  let calculator = document.querySelector(".calculator");
  let display = document.querySelector(".display");
  let button;

  calculator.addEventListener("click", (event) => {
    button = event.target;
    console.log(button.id);

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
    }
  });

}

addButtonEventListener();