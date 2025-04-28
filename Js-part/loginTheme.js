const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit')
const errEmail = document.getElementById('errEmail');
const errPassword = document.getElementById('errPassword');
const errSubmit = document.getElementById('submitError');

function sedMess() {

  document.addEventListener('DOMContentLoaded', () => {
    errEmail.classList.add('hidden-on')
  })

  email.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
      
      if(email.value.includes('@') && email.value.includes('.')){
        console.log('Вы ввели почту:', email.value)
        errEmail.classList.add('hidden-on')
        return
      }

      errEmail.classList.remove('hidden-on')
      errEmail.classList.add('hidden-of-login')
      console.log('Вы неправильно ввели пароль')
    }   
  }) 
  
  password.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      if(password.value.length > 8) {
        errPassword.classList.add('hidden-on')
        console.log('True')
        return
      }

      errPassword.classList.remove('hidden-on')
      errPassword.classList.add('hidden-of-login')
      console.log('Error')
    }
  })

  submit.addEventListener('click', function() {
    if((email.value.includes('@') && email.value.includes('.')) && password.value.length > 8) {
      console.log('True')
      errSubmit.classList.add('hidden-on')
      return
    }

    errSubmit.classList.remove('hidden-on')
    errSubmit.classList.add('hidden-of-login')
    console.log('Error')
  })

}

sedMess()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const modalController = ({modal, btnOpen, btnClose}) => {
const buttonElement = document.querySelector(btnOpen);
const modalElement = document.querySelector(modal);

modalElement.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity  0.2s ease-in-out;
`;

const closeModal = event => {
  const target = event.target;

  if(target === target.closest(btnClose)) {
    modalElement.style.opacity = 0;

    setTimeout(() => {
      modalElement.style.visibility = 'hidden';
    }, 300)
  }
}

const openModal = () => {
  modalElement.style.visibility = 'visible'
  modalElement.style.opacity = 1;
}

buttonElement.addEventListener('click', openModal);
modalElement.addEventListener('click', closeModal)
}

modalController({
  modal: '#modal',
  btnOpen: '#entry',
  btnClose: '.entry__exit'
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export {sedMess, modalController}