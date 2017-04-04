(function(){
  var form = document.querySelector('.review-form'),
      sendForm = form.querySelector('.button--send-form'),
      popupError = form.querySelector('.popup--error'),
      popupSuccess = form.querySelector('.popup--success'),
      closePopup = form.querySelectorAll('.button--popup-close');

  sendForm.addEventListener('click', validate);

  function validate(evt) {
    evt.preventDefault();

    var inputs = form.querySelectorAll('[data-error]');
    checkIsEmpty(inputs);

    function checkIsEmpty(inputs) {
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (!input.value) {
          popupError.classList.add('popup--show');
          return false;
        }
      }
      popupSuccess.classList.add('popup--show');
    }
  }

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27 || evt.keyCode === 13) {
      if (popupError.classList.contains('popup--show') || popupSuccess.classList.contains('popup--show')) {
        evt.preventDefault();
        popupError.classList.remove('popup--show');
        popupSuccess.classList.remove('popup--show');
      }
    }
  });

  for (var i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      popupError.classList.remove('popup--show');
      popupSuccess.classList.remove('popup--show');
    });
  };
}());
