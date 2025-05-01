const openerLiElem = document.getElementsByClassName('opener__li')
const headerMenuElem = document.querySelector('.header__menu-section')
const ArrayOpenerLiElem = Array.from(openerLiElem)

console.log(openerLiElem)
console.log(ArrayOpenerLiElem)

let previousClicked = null;

function catalogFilms() {

  ArrayOpenerLiElem.forEach(function(item, index){
    item.addEventListener('click', function() {
      let groupFilms = document.querySelectorAll('main__grid a')
      let p = document.createElement('p')
      p.innerText = item.innerText;
      headerMenuElem.append(p)
      console.log(p)

      if(previousClicked === item) {
          console.log(index)
      } else {
        console.log('First click')
      }

      console.log('Current click: ', item.textContent);

      previousClicked = item
    })
  })

  

  // openerLiElem.addEventListener('click', function() {
  //   
  //   
  //   
  //   headerMenuElem.append(p)

  //   groupFilms.forEach(function (elem) {
  //     if (p === groupFilms) {
  //       console.log('DA')
  //     }
  //     else {
  //       console.log('No')
  //     }
  //   })
  // })
}
catalogFilms()

export {openerLiElem, catalogFilms}