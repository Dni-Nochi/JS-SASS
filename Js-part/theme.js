const themeElement = document.getElementById('theme');
let styleMode = localStorage.getItem('styleMode'); 

// themeElement.addEventListener('click', changeTheme)

// function changeTheme() {
//     if(styleMode === 'dark') {
//         themeElement.classList.add('dark-theme')
//         localStorage.setItem('styleMode', 'dark')
//     } else {
//         themeElement.classList.remove('dark-theme')
//         localStorage.setItem('styleMode', null)
//     }
// }






const inputSearch = document.getElementById('inputF')

inputSearch.oninput = function searchFilm() {
  let val = this.value.trim().toLowerCase()
  let groupFilm = document.querySelectorAll('.main__grid a')
  if( val != '') {
      groupFilm.forEach(function (elem) {
        let text = elem.innerText.trim().toLowerCase()
        if (text.indexOf(val) == -1) {
          elem.classList.add('hide')
        }
        else {
          elem.classList.remove('hide')
        }
      })
      console.log(val)
  }
  else {
    groupFilm.forEach(function (elem) {
      elem.classList.remove('hide')
    })
  }
}

console.log(themeElement); 
export {themeElement};