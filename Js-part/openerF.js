const openerElem = document.getElementById('openerBody')
const liElem = document.getElementById('openerLi')
const openerAll = document.getElementById('openerAll')

function openBody() {
  let timer;
  
  function onBody() {
    clearTimeout(timer)
    openerElem.style.display = 'block';
  }

  function offBody() {
    timer = setTimeout(() => {
      openerElem.style.display = 'none';
    }, 300)
  }

  openerAll.addEventListener('mouseover', onBody);
  openerElem.addEventListener('mouseover', onBody)
  openerAll.addEventListener('mouseout', offBody);
  openerElem.addEventListener('mouseout', offBody)
}

openBody()



export{openerElem, openBody};