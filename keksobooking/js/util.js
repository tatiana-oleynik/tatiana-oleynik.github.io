'use strict';

(function () {
  var ESC_KEYCODE = 27;
  window.util = {
    hideElement: function (className, element) {
      element.classList.remove(className);
    },
    disableElement: function (elementName) {
      elementName.setAttribute('disabled', 'disabled');
    },
    onEscDown: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    }
  };
})();
