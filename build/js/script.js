'use strict';

(function () {
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
    if (evt.key === 'Backspace' && input.value.length <= 3) {
      evt.preventDefault();
    }
  });
})();
