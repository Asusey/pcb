'use strict';

(function () {
  var callButton = document.querySelector('.page-header__button');
  var modalPopup = document.querySelector('.modal');
  var closeButton = document.querySelector('.modal__close-button');
  var inputName = document.getElementById('modal-name');
  var pageCover = document.querySelector('.page__cover');
  var pageMain = document.querySelector('.page-main');

  var showModal = function () {
    modalPopup.classList.remove('modal--closed');
    modalPopup.classList.add('modal--opened');
    inputName.focus();
    pageCover.style.display = 'block';
    pageMain.style.disabled = true;
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  };

  var closeModal = function () {
    modalPopup.classList.remove('modal--opened');
    modalPopup.classList.add('modal--closed');
    pageCover.style.display = 'none';
    pageMain.style.disabled = false;
    document.getElementsByTagName('body')[0].style.overflow = 'scroll';
  };

  callButton.addEventListener('click', function () {
    if (modalPopup.classList.contains('modal--closed')) {
      showModal();
    }
  });

  closeButton.addEventListener('click', function () {
    if (modalPopup.classList.contains('modal--opened')) {
      closeModal();
    }
  });

  pageCover.addEventListener('click', function () {
    if (modalPopup.classList.contains('modal--opened')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains('modal--opened')) {
        closeModal();
      }
    }
  });


  var input = document.getElementById('phone');

  input.addEventListener('keypress', function (evt) {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  });

  input.addEventListener('focus', function () {
    if (input.value.length === 0) {
      input.value = '+7(';
      input.selectionStart = input.value.length;
    }
  });

  input.addEventListener('click', function (evt) {
    if (input.selectionStart < 3) {
      input.selectionStart = input.value.length;
    }
    if (evt.key === 'Backspace' && input.value.length <= 3) {
      evt.preventDefault();
    }
  });

  input.addEventListener('blur', function () {
    if (input.value === '+7(') {
      input.value = '';
    }
  });

  input.addEventListener('keydown', function (evt) {
    if (evt.key === 'Backspace' && input.value.length <= 0) {
      evt.preventDefault();
    }
  });
})();
