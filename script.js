let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")

let operators = ["+", "-", "*", "/", "%"];
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        value = e.target.innerText
        let last = display.value.slice(-1)
        if (display.value === "Invalid Input") {
            display.value = "0"
        }
        else if (value === "AC") {
            display.value = "0"
        }
        else if (value === "=") {
            calculate()
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1)
            if (display.value === "") {
                display.value = "0"
            }

        }
        else if (operators.includes(value)) {
            if (operators.includes(last)) {
                display.value = display.value.slice(0, -1) + value
                return
            }
            else {
                display.value += value
                return
            }
        }


        else if (display.value === "0") {
            display.value = value
        }
        else {
            display.value += value
        }

    })
});


function calculate() {
    try {
        display.value = eval(display.value)
    } catch (err) {
        display.value = "Invalid Input"
    }
}