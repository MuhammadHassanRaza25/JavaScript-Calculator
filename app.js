// JavaScript Calculator

function addValue(numbers) {
    var input = document.getElementById('input')
    input.value += numbers
}

function clean() {
    var input = document.getElementById('input')
    input.value = ""
}

function result() {
   var input = document.getElementById('input')
   input.value = eval(input.value)
}

function cut() {
    var input = document.getElementById('input')
   input.value = input.value.slice(0,input.value.length -1)
}
// eval value ko calculate karta hai.

// hamny html main function ke name addValue main jo number die 
// hain wo argument hai.

// or yahan addValue main numbers ka name use kia hai wo parameter hai.
// user koi bhi number click karega to wo number get hojayega.
