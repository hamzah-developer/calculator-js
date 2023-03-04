const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
   const key = e.target
   const action = key.dataset.action
   const displayedNum = display.textContent
   const keyContent = key.textContent

   Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
   
   if(!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
   } 

   if (action === 'decimal') {
    display.textContent = displayedNum + '.'
   }

   if (
    action === 'add' ||
     action === 'subtract' 
     || action === 'multiply' 
     || action === 'divide' 
     || action === 'decimal' 
      || action === 'clear' 
      || action === 'calculate'
   ) {
    key.classList.add('is-depressed')
   }
  }
 })