
const screen = document.querySelector('.result')
let operands = []
let operand = 0
let number = ''
let operators = []


const AC = document.getElementById('ac')
AC.addEventListener('click', ()=>{
    screen.textContent = 0
    let operands = []
    let operand = 0
    let number = ''
    let operators = []
})

const nums = Array.from(document.querySelectorAll('.btn.number'))
nums.forEach(num => {
    num.addEventListener('click', ()=>{
        if(screen.textContent === '0'){
            screen.textContent = num.textContent
            number = num.textContent
            operand = parseFloat(number)
        }
        else{
            screen.textContent += num.textContent
            number += num.textContent
            operand = parseFloat(number)
        }      
    })
}) 

const sign = document.getElementById('sign')
sign.addEventListener('click', ()=>{
    if(screen.textContent != ""){
        screen.textContent += "-"
        // number = num.textContent
        // operand = parseFloat(number)
        // console.log(number, operand)
    }
   
})

const dot = document.getElementById('point')
dot.addEventListener('click', () => {
    if(!screen.textContent.includes('.')){
        screen.textContent += dot.textContent
        number += dot.textContent
        operand = parseFloat(number)
      }
    })
    

const percent = document.getElementById('percentage')
percent.addEventListener('click', ()=>{
    if(screen.textContent != '' && !isNaN(screen.textContent)){
    let result = parseFloat(screen.textContent) / 100
    screen.textContent = parseFloat(result.toFixed(2))
    number = screen.textContent
    operand = parseFloat(number)
    }
})

const add = document.getElementById('addition')
add.addEventListener('click', ()=>{
    operators.push(add.textContent)
    operands.push(operand)
    operand = 0
    screen.textContent += add.textContent
    number = ''
    console.log(operand, operands, operators, number)
})

const sub = document.getElementById('subtraction')
sub.addEventListener('click', ()=>{
    operators.push(sub.textContent)
    operands.push(operand)
    operand = 0
    screen.textContent += sub.textContent
    number = ''
})

const mul = document.getElementById('multiplication')
mul.addEventListener('click', ()=>{
    operators.push(mul.textContent)
    operands.push(operand)
    operand = 0
    screen.textContent += mul.textContent
    number = ''
})

const div = document.getElementById('division')
div.addEventListener('click', ()=>{
    operators.push(div.textContent)
    operands.push(operand)
    operand = 0
    screen.textContent += div.textContent
    number = ''
})

const equalto = document.getElementById('equal')
equalto.addEventListener('click', ()=>{
    operands.push(operand)
    operand = 0
    number = ''
    console.log("number", number)
    console.log("operand", operand)
    console.log(operands, operators)
})

