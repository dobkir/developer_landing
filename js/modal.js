import { privacy_notice } from './privacy_notice.js';
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const btns = document.querySelectorAll('[data-path]');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelectorAll(`[data-target]`);
const inputs = document.querySelectorAll('.form__control');
const output = document.querySelector('.output')

//============ Start modal ============//
btns.forEach(elem => {
  elem.addEventListener('click', event => {
    let path = event.currentTarget.getAttribute('data-path');
    let modal = document.querySelector(`[data-target="${path}"]`);
    modal.onclick = (event) => event.stopPropagation();
    modal.classList.add('modal__show');

    modalOverlay.classList.add('modal__overlay--visible');
    body.classList.add('no-scroll');
    inputs.forEach((input) => input.value = "");

    if (modal.classList.contains('modal__content--privasy')) {
      output.innerHTML = privacy_notice;
    };
    setTimeout(() => {
      modal.style.transform = 'none';
      modal.style.opacity = '1';
    }, 1);
  });
});

//============ Close modal ============//
function CloseModal(targetModal) {
  return targetModal.forEach((elem) => {
    elem.removeAttribute('style');
    setTimeout(() => {
      elem.classList.remove('modal__show');
      body.classList.remove('no-scroll');
      modalOverlay.classList.remove('modal__overlay--visible');
    }, 400);
    history.replaceState(null, null, '/');
  });
};

modals.forEach((el) => {
  modalOverlay.onclick = () => CloseModal(modals);
  modalClose.forEach((item) => {
    item.onclick = () => CloseModal(modals);
  });
});

//============ For modal on contact page ============//





