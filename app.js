
const screen = document.querySelector('.result')

const AC = document.getElementById('ac')
AC.addEventListener('click', ()=>{
    screen.textContent = 0
})

const nums = Array.from(document.querySelectorAll('.btn.number'))
nums.forEach(num => {
    num.addEventListener('click', ()=>{
        if(screen.textContent === '0'){
            screen.textContent = num.textContent
        }
        else{
            screen.textContent += num.textContent
        }      
    })
}) 

const sign = document.getElementById('sign')
sign.addEventListener('click', ()=>{
    if(screen.textContent != "" && !isNaN(screen.textContent)){
        screen.textContent = -parseFloat(screen.textContent)
    }
   
})

const dot = document.getElementById('point')
dot.addEventListener('click', () => {
    if(!screen.textContent.includes('.')){
        screen.textContent += dot.textContent
      }
    })
    

const percent = document.getElementById('percentage')
percent.addEventListener('click', ()=>{
    if(screen.textContent != '' && !isNaN(screen.textContent)){
    let result = parseFloat(screen.textContent) / 100
    screen.textContent = parseFloat(result.toFixed(2))
    }
})

const add = document.getElementById('addition')
const sub = document.getElementById('subtraction')
const mul = document.getElementById('multiplication')
const div = document.getElementById('division')
const equalto = document.getElementById('equal')

// algorithm
// 