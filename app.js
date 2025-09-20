const display = document.getElementById("display");

function appendToDisplay(input) {

    
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        
        if (display.value === "") {
            display.value = "0";
        } else {
            display.value = eval(display.value);
        }
    } catch (e) {
        display.value = "Error";
    }
}
