const openerLiElem = document.getElementsByClassName('opener__li');
const headerMenuElem = document.querySelector('.header__menu-section');
const filmsElem = document.querySelectorAll('.main__grid a');

const ArrayOpenerLiElem = Array.from(openerLiElem);
const ArrayFilmsElem = Array.from(filmsElem);
const normalize = str => str.trim().toLowerCase();


function updateVisibleFilms() {
  const selectedGenres = Array.from(headerMenuElem.querySelectorAll('p')).map(p =>
    normalize(p.textContent)
  );

  if (selectedGenres.length === 0) {
    ArrayFilmsElem.forEach(film => film.classList.remove('hide'));
    return;
  }

  ArrayFilmsElem.forEach(film => {
    const filmText = normalize(film.textContent);
    const matches = selectedGenres.some(genre => filmText.includes(genre));
    film.classList.toggle('hide', !matches);
    
  });
}


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

        updateVisibleFilms();

        cancCircle.addEventListener('click', () => {
          p.remove();
          updateVisibleFilms();
        });
      } else {
        console.log(`Жанр: "${genreText}" уже добавлен`)
      }
    })
  })
}
catalogFilms()

export {openerLiElem, catalogFilms}