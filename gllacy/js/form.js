var link = document.querySelector(".map-button");

var popup = document.querySelector(".feedback");

var close = popup.querySelector(".button-close");

var fieldName = popup.querySelector(".field-name");

var email = popup.querySelector(".field-email");

var comment = popup.querySelector(".feedback-area");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");

    if (storage) {
      email.value = storage;
    }

    fieldName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
});

popup.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

popup.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !comment.value) {
      evt.preventDefault();
      console.log("Нужно заполнить поля");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("email", email.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
    }
  }
});
