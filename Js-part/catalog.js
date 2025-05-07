const openerLiElem = document.getElementsByClassName('opener__li');
const headerMenuElem = document.querySelector('.header__menu-section');
const filmsElem = document.querySelectorAll('.main__grid a');

const ArrayOpenerLiElem = Array.from(openerLiElem);
const ArrayFilmsElem = Array.from(filmsElem)

ArrayFilmsElem.forEach(function(item) {

});

function catalogFilms() {

  ArrayOpenerLiElem.forEach(function(item){
    item.addEventListener('click', function() {
      const genreText = item.textContent.trim()
      const existingGenres = headerMenuElem.querySelectorAll('p')
      const alreadyExists = Array.from(existingGenres).some(p => p.textContent === genreText)

      if(!alreadyExists) {
        const p = document.createElement('p');
        const cancCircle = document.createElement('button');
        cancCircle.classList.add('cancCircle')
        p.textContent = genreText;
        headerMenuElem.appendChild(p);
        p.appendChild(cancCircle);
        console.log(`Добавлен жанр: ${genreText}`);

        cancCircle.addEventListener('click', () => {
            p.remove();
        })
      } else {
        console.log(`Жанр: "${genreText}" уже добавлен`)
      }
    })
  })
}
catalogFilms()

export {openerLiElem, catalogFilms}