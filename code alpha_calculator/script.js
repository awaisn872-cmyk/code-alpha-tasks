let display = document.getElementById("display");

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Optional: Keyboard support
window.addEventListener('keydown', function(e){
    const allowed = '0123456789+-*/.%';
    if(e.key === 'Enter') { calculate(); }
    else if(e.key === 'Backspace') { deleteChar(); }
    else if(e.key === 'Escape') { clearDisplay(); }
    else if(allowed.includes(e.key)) { append(e.key); }
});
