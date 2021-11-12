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

  // validation
  var onValidate = function () {
    var inputs = document.querySelectorAll('input[data-tel-input]');
    inputs.forEach(function (input) {
      input.addEventListener('keypress', function (evt) {
        if (evt.keyCode < 47 || evt.keyCode > 57) {
          evt.preventDefault();
        }
        if (input.value.length === 6) {
          input.value += ')';
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
    });
  }(onValidate);

  // accordion

  document.addEventListener('DOMContentLoaded', function () {
    var widthWind = document.querySelector('body').offsetWidth;
    var sectionsToggle = document.querySelector('.page-footer__site-sections h2');
    var siteSections = document.querySelector('.page-footer__site-sections');
    var siteSectionsList = document.querySelector('.page-footer__site-sections-list');

    if (widthWind <= 767) {
      sectionsToggle.addEventListener('click', function () {
        if (siteSections.classList.contains('page-footer__site-sections--closed' || 'page-footer__contacts--opened')) {
          siteSections.classList.remove('page-footer__site-sections--closed');
          siteSections.classList.add('page-footer__site-sections--opened');
          siteSectionsList.style.display = 'block';

          footerContacts.classList.remove('page-footer__contacts--opened');
          footerContacts.classList.add('page-footer__contacts--closed');
          footerContactsList.style.display = 'none';
        } else {
          siteSections.classList.remove('page-footer__site-sections--opened');
          siteSections.classList.add('page-footer__site-sections--closed');
          siteSectionsList.style.display = 'none';
        }
      });

      var contactsToggle = document.querySelector('.page-footer__contacts h2');
      var footerContacts = document.querySelector('.page-footer__contacts');
      var footerContactsList = document.querySelector('.page-footer__contacts-list');

      contactsToggle.addEventListener('click', function () {
        if (footerContacts.classList.contains('page-footer__contacts--closed' || 'page-footer__site-sections--opened')) {
          footerContacts.classList.remove('page-footer__contacts--closed');
          footerContacts.classList.add('page-footer__contacts--opened');
          footerContactsList.style.display = 'block';

          siteSections.classList.remove('page-footer__site-sections--opened');
          siteSections.classList.add('page-footer__site-sections--closed');
          siteSectionsList.style.display = 'none';
        } else {
          footerContacts.classList.remove('page-footer__contacts--opened');
          footerContacts.classList.add('page-footer__contacts--closed');
          footerContactsList.style.display = 'none';
        }
      });
    }
  });
})();
