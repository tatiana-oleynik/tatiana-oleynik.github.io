'use strict';

(function () {
  var title = document.getElementById('title');
  var timein = document.getElementById('timein');
  var type = document.getElementById('type');
  var timeout = document.getElementById('timeout');
  var roomNumber = document.getElementById('room_number');

  title.addEventListener('invalid', function () {
    if (title.validity.tooShort) {
      title.setCustomValidity('Заголовок должен состоять минимум из 30-ти символов');
    } else if (title.validity.valueMissing) {
      title.setCustomValidity('Обязательное поле');
    } else {
      title.setCustomValidity('');
    }
  });

  window.constants.selectors.PRICE.addEventListener('invalid', function () {
    if (window.constants.selectors.PRICE.validity.valueMissing) {
      window.constants.selectors.PRICE.setCustomValidity('Обязательное поле');
    } else {
      window.constants.selectors.PRICE.setCustomValidity('');
    }
  });

  type.addEventListener('change', function (evt) {
    if (evt.target.value === 'bungalo') {
      window.constants.selectors.PRICE.setAttribute('placeholder', 0);
      window.constants.selectors.PRICE.setAttribute('min', 0);
    } else if (evt.target.value === 'flat') {
      window.constants.selectors.PRICE.setAttribute('placeholder', window.constants.price.FLAT);
      window.constants.selectors.PRICE.setAttribute('min', window.constants.price.FLAT);
    } else if (evt.target.value === 'house') {
      window.constants.selectors.PRICE.setAttribute('placeholder', window.constants.price.HOUSE);
      window.constants.selectors.PRICE.setAttribute('min', window.constants.price.HOUSE);
    } else if (evt.target.value === 'palace') {
      window.constants.selectors.PRICE.setAttribute('placeholder', window.constants.price.PALACE);
      window.constants.selectors.PRICE.setAttribute('min', window.constants.price.PALACE);
    }
  });

  timein.addEventListener('change', function (evt) {
    if (evt.target.value === '12:00') {
      timeout.options[0].text = 'Выезд до 12';
      timeout.options[0].selected = true;
    } else if (evt.target.value === '13:00') {
      timeout.options[1].text = 'Выезд до 13';
      timeout.options[1].selected = true;
    } else if (evt.target.value === '14:00') {
      timeout.options[2].text = 'Выезд до 14';
      timeout.options[2].selected = true;
    }
  });

  timeout.addEventListener('change', function (evt) {
    if (evt.target.value === '12:00') {
      timein.options[0].text = 'После 12';
      timein.options[0].selected = true;
    } else if (evt.target.value === '13:00') {
      timein.options[1].text = 'После 13';
      timein.options[1].selected = true;
    } else if (evt.target.value === '14:00') {
      timein.options[2].text = 'После 14';
      timein.options[2].selected = true;
    }
  });

  roomNumber.addEventListener('change', function (evt) {
    if (evt.target.value === '1') {
      window.constants.selectors.CAPACITY.options[0].disabled = true;
      window.constants.selectors.CAPACITY.options[1].disabled = true;
      window.constants.selectors.CAPACITY.options[2].disabled = false;
      window.constants.selectors.CAPACITY.options[3].disabled = true;
    } else if (evt.target.value === '2') {
      window.constants.selectors.CAPACITY.options[0].disabled = true;
      window.constants.selectors.CAPACITY.options[1].disabled = false;
      window.constants.selectors.CAPACITY.options[2].disabled = false;
      window.constants.selectors.CAPACITY.options[3].disabled = true;
    } else if (evt.target.value === '3') {
      window.constants.selectors.CAPACITY.options[0].disabled = false;
      window.constants.selectors.CAPACITY.options[1].disabled = false;
      window.constants.selectors.CAPACITY.options[2].disabled = false;
      window.constants.selectors.CAPACITY.options[3].disabled = true;
    } else if (evt.target.value === '100') {
      window.constants.selectors.CAPACITY.options[0].disabled = true;
      window.constants.selectors.CAPACITY.options[1].disabled = true;
      window.constants.selectors.CAPACITY.options[2].disabled = true;
      window.constants.selectors.CAPACITY.options[3].disabled = false;
    }
  });
})();
