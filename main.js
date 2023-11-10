console.log('hi')

//let one = document.querySelector('.one').addEventListener('click', check)
//
//function check(){
//    console.log('hi')
//}


//required abilities of a calculator
//accept user inputs of numbers, operator and other number
//should accept decimal number
//store input
//recognize input and perform calculation
//return a result

const keys = document.querySelector('.calculator-btn');
keys.addEventListener('click', Event => {

    const { target } = Event;

    const { value } = target;

    if (!target.matches('button')) {
        return;
    } else {
        calculator.parseInput(value)
        console.log(value)
    }

})

const calculator = {

    displayText: "0",
    prevTotal: null,

    parseInput(value) {

        switch (value) {

            case '=':
                this.calAnswer(this.displayText)
                break;
            case "AC":
                this.clearAll()
                break;
            default:
                this.addText(value)
                break;

        }
    },


    addText(value) {
        if (this.displayText === "0") {
            this.displayText = ""
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }

        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText(-1))) {
                return;
            }
        }

        this.displayText += value
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector('.calculator-screen').value = text
    },


    calAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
    },

    clearAll(){
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}
