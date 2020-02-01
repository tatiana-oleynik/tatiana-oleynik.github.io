'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var adFormElements = adForm.children;
  var mapFilters = document.querySelector('.map__filters');
  var mapFiltersElements = mapFilters.children;
  var success = document.getElementById('success');

  function activateForm() {
    for (var i = 0; i < adFormElements.length; i++) {
      adFormElements[i].removeAttribute('disabled');
    }

    for (i = 0; i < mapFiltersElements.length; i++) {
      mapFiltersElements[i].removeAttribute('disabled');
    }
  }

  function disableForm() {
    for (var i = 0; i < adFormElements.length; i++) {
      window.util.disableElement(adFormElements[i]);
    }

    for (i = 0; i < mapFiltersElements.length; i++) {
      window.util.disableElement(mapFiltersElements[i]);
    }
  }

  function showSuccess() {
    var successMessage = success.content.cloneNode(true);
    var fragment = document.createDocumentFragment();
    fragment.appendChild(successMessage);

    for (var i = 0; i < window.constants.selectors.MAIN.length; i++) {
      window.constants.selectors.MAIN[i].appendChild(fragment);
    }

    document.addEventListener('keydown', closeSuccessEscDown);
    document.addEventListener('click', closeSuccess);
  }

  function closeSuccess() {
    var successMessage = document.querySelector('.success');
    if (successMessage) {
      successMessage.remove();
    }
  }

  function closeSuccessEscDown(evt) {
    window.util.onEscDown(evt, closeSuccess);
  }

  function onSubmitSuccess() {
    showSuccess();
    window.map.deactivateMap();
  }

  function onAdFormSubmit(evt) {
    evt.preventDefault();
    var formData = new FormData(adForm);
    window.backend.save(onSubmitSuccess, window.map.renderError, formData);
  }

  function setDefaultValues() {
    window.constants.selectors.PRICE.setAttribute('min', window.constants.price.FLAT);
    window.constants.selectors.PRICE.setAttribute('placeholder', window.constants.price.FLAT);

    window.constants.selectors.CAPACITY.options[0].disabled = true;
    window.constants.selectors.CAPACITY.options[1].disabled = true;
    window.constants.selectors.CAPACITY.options[3].disabled = true;
  }

  function init() {
    adForm.addEventListener('submit', onAdFormSubmit);
    disableForm();
    setDefaultValues();
  }

  init();

  window.form = {
    activateForm: activateForm,
    disableForm: disableForm
  };
})();
