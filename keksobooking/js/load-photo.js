'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var PhotoParameters = {
    WIDTH: '70px',
    HEIGHT: '70px'
  };
  var fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
  var fileChooserPhoto = document.querySelector('.ad-form__upload input[type=file]');
  var previewPhoto = document.querySelector('.ad-form__photo');

  function addPhotosHousing(src) {
    var image = document.createElement('img');
    image.src = src;
    image.style.width = PhotoParameters.WIDTH;
    image.style.height = PhotoParameters.HEIGHT;
    image.classList.add('ad-form__photo--empty');
    previewPhoto.appendChild(image);
    return image;
  }

  fileChooserAvatar.addEventListener('change', function () {
    var file = fileChooserAvatar.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        window.constants.selectors.AVATAR.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });

  fileChooserPhoto.addEventListener('change', function () {
    var file = fileChooserPhoto.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        addPhotosHousing().src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
