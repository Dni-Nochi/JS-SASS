const messOutElem = document.getElementById('textareaMess')
const messButtonElem = document.getElementById('messButton')
const listMessElem = document.getElementById('listMess')

function addMess() {
  messButtonElem.addEventListener('click', function(event) {
    if(messOutElem.value.trim() !== ""){
      const wrapper = document.createElement('div');
      const ava = document.createElement('img')
      ava.src = '../For-img/Naruto-manga.jpg'
      const textInfo = document.createElement('section')
      const userName = document.createElement('h3')
      let mess = document.createElement('li')

      userName.textContent = 'Адилов Тимур'
      mess.textContent = messOutElem.value

      wrapper.classList.add('mess-block');

      wrapper.appendChild(ava);
      wrapper.appendChild(textInfo);
      textInfo.appendChild(userName);
      textInfo.appendChild(mess)

      listMessElem.prepend(wrapper)
      messOutElem.value = "";
    } else {
      console.log('ERROR')
    }
  })
}


console.log(listMessElem)
// messOutElem.addEventListener('keydown', function(event){
//   if(event.key === 'Enter') {
//     console.log('CLick')
//   }
// })
// console.log(messOutElem)

addMess()
export {messOutElem};