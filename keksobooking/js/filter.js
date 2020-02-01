'use strict';

(function () {
  var PriceRooms = {
    MIN: 10000,
    MAX: 50000
  };
  var housingType = document.getElementById('housing-type');
  var housingPrice = document.getElementById('housing-price');
  var housingRooms = document.getElementById('housing-rooms');
  var housingGuests = document.getElementById('housing-guests');
  var housingFeatures = document.getElementById('housing-features');
  var mapFilters = document.querySelector('.map__filters');
  var onFormChange = window.debounce(
      function () {
        window.pin.removePins();
        window.pin.removePopup();

        window.pin.renderPoints(getFiltredData(window.data));
        window.pin.addPinListeners(getFiltredData(window.data));
      }
  );

  function filterByType(it) {
    return housingType.value === it.offer.type || housingType.value === 'any';
  }

  function filterByPrice(it) {
    var price;
    switch (housingPrice.value) {
      case 'any':
        price = true;
        break;
      case 'low':
        price = it.offer.price < PriceRooms.MIN;
        break;
      case 'middle':
        price = it.offer.price >= PriceRooms.MIN && it.offer.price <= PriceRooms.MAX;
        break;
      case 'high':
        price = it.offer.price >= PriceRooms.MAX;
    }
    return price;
  }

  function filterByRooms(it) {
    return Number(housingRooms.value) === it.offer.rooms || housingRooms.value === 'any';
  }

  function filterByGuests(it) {
    return Number(housingGuests.value) === it.offer.guests || housingGuests.value === 'any';
  }

  function filterByFeatures(it) {
    var checkedFeatures = housingFeatures.querySelectorAll('input:checked');
    var feature = true;
    Array.from(checkedFeatures).every(function (checkbox) {
      feature = it.offer.features.indexOf(checkbox.value) !== -1;
      return feature;
    });
    return feature;
  }

  function getFiltredData(arrayData) {
    var filtredData = arrayData.filter(function (item) {
      return filterByType(item) && filterByPrice(item) && filterByRooms(item) && filterByGuests(item) && filterByFeatures(item);
    });
    if (filtredData.length > window.constants.limits.PINS) {
      filtredData.length = window.constants.limits.PINS;
    }
    return filtredData;
  }

  mapFilters.addEventListener('change', onFormChange);
})();
