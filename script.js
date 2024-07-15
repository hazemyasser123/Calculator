
const display = document.getElementById("display");

function AppendToDisplay(Val) {
    display.value += Val;
}

function clearDisplay() {
    display.value = ''
}

function Calculate() {
    try{
    display.value = eval(display.value)
    } catch(error){
        display.value = "Error Clear to try again"
    }
}