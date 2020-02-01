'use strict';

(function () {
  var SUCCESS = 200;
  var ERROR_SERVER = 'Произошла ошибка соединения. Пожалуйста, обновите страницу.';
  var ServerUrl = {
    LOAD: 'https://js.dump.academy/keksobooking/data',
    UPLOAD: 'https://js.dump.academy/keksobooking'
  };

  function createXhr(method, url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS) {
        onSuccess(xhr.response);
      } else {
        onError(ERROR_SERVER);
      }
    });

    xhr.open(method, url);
    return xhr;
  }

  function load(onSuccess, onError) {
    createXhr('GET', ServerUrl.LOAD, onSuccess, onError).send();
  }

  function save(onSuccess, onError, data) {
    createXhr('POST', ServerUrl.UPLOAD, onSuccess, onError).send(data);
  }

  window.backend = {
    load: load,
    save: save
  };
})();
