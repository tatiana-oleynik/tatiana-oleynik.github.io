'use strict';

(function () {
  window.constants = {
    selectors: {
      MAIN: document.getElementsByTagName('main'),
      PRICE: document.getElementById('price'),
      CAPACITY: document.getElementById('capacity'),
      AVATAR: document.querySelector('.ad-form-header__preview img'),
    },
    price: {
      FLAT: 1000,
      HOUSE: 5000,
      PALACE: 10000,
    },
    limits: {
      PINS: 5,
    }
  };
})();
