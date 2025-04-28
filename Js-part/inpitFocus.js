const lupElem = document.getElementById('lup')
const inputElem = document.getElementById('inputF')

function inputFocus() {
  inputElem.addEventListener('click', () => {
    inputElem.classList.add('focus')
  })

  lupElem.addEventListener('click', (event) => {
    if(!inputElem.contains(event.target)){
      inputElem.classList.remove('focus') 
    }
  })

  window.addEventListener('click', (event) => {
    if(!inputElem.contains(event.target)) {
      inputElem.classList.remove('focus')
    }
  })
}

inputFocus()

export {inputFocus}