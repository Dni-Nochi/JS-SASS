const openerLiElem = document.getElementById('openerLi')
const headerMenuElem = document.querySelector('.header__menu-catalog')


function catalogFilms() {
  openerLiElem.addEventListener('click', function() {
    let groupFilms = document.querySelectorAll('main__grid a')
    let p = document.createElement('p')
    p.innerText = 'Фантастика'
    headerMenuElem.append(p)

    groupFilms.forEach(function (elem) {
      if (p === groupFilms) {
        console.log('DA')
      }
      else {
        console.log('No')
      }
    })
  })
}
catalogFilms()

export {openerLiElem, catalogFilms}