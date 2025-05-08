const openerLiElem = document.getElementsByClassName('opener__li');
const headerMenuElem = document.querySelector('.header__menu-section');
const filmsElem = document.querySelectorAll('.main__grid a');

const ArrayOpenerLiElem = Array.from(openerLiElem);
const ArrayFilmsElem = Array.from(filmsElem);
const normalize = str => str.trim().toLowerCase();

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

        ArrayFilmsElem.forEach(function(item) {
          let pText = normalize(p.textContent);
          let itemText = normalize(item.textContent)

          if(pText.includes(itemText) || itemText.includes(pText) == false) {
            item.classList.add('hide')
          } else {
            item.classList.remove('hide')
            console.log('Braaa')
          }

          cancCircle.addEventListener('click', () => {
            item.classList.remove('hide')
            p.remove();
          })
          
        });

      } else {
        console.log(`Жанр: "${genreText}" уже добавлен`)
      }
    })
  })
}
catalogFilms()

export {openerLiElem, catalogFilms}