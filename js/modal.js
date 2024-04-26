document.addEventListener('DOMContentLoaded', function() {
  // Functions to open and close a modal
  function openModal($trigger, $el) {
    var $image = $trigger.querySelector('img');
    $el.querySelector('.image').replaceChildren($image.cloneNode());
    $el.querySelector('.caption').textContent = $image.getAttribute('title');
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(function($modal) {
      closeModal($modal);
    });
  }

  // Add a click event on images to open an image modal
  (document.querySelectorAll('figure.image') || []).forEach(function($trigger) {
    var $target = document.getElementById('image-modal');

    $trigger.addEventListener('click', function() {
      openModal($trigger, $target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(function($close) {
    var $target = $close.closest('.modal');

    $close.addEventListener('click', function() {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});
