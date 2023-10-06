document.addEventListener('DOMContentLoaded', function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = document.querySelectorAll('.navbar-burger');

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the target menu
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });

    function updateLink(event) {
        const isTouch = window.matchMedia('(hover: none)').matches;
        if (event.type === 'blur') {
            if (!isTouch) {
                this.parentNode.classList.remove('is-active');
            }
        }
        else {
            this.parentNode.classList.toggle('is-active');
            event.preventDefault();
        }
    }
    var $links = document.querySelectorAll('.navbar .has-dropdown.is-hoverable .navbar-link');
    $links.forEach(function($link) {
        $link.addEventListener('click', updateLink);
        $link.addEventListener('blur', updateLink);
    });

    function updateDropdowns(query) {
        var $dropdowns = document.querySelectorAll('.navbar .is-active, .navbar .has-dropdown.is-hoverable');
        $dropdowns.forEach(function($item) {
            if (query.matches) {
                $item.classList.remove('is-active');
            }
            else {
                $item.classList.add('is-active');
            }
        });
    }
    var media = window.matchMedia('(min-width: 1024px)');
    updateDropdowns(media);
    media.addEventListener('change', function(event) {
        updateDropdowns(event);
    });
});
window.addEventListener('hashchange', function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = document.querySelectorAll('.navbar-burger');

    $navbarBurgers.forEach(function ($el) {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        if ($target.classList.contains('is-active')) {
            // Disable the navbar after a hash change
            $el.classList.remove('is-active');
            $target.classList.remove('is-active');
        }
    });

    // Scroll header element into view
    var $element = document.querySelector(document.location.hash);
    if ($element && $element.getBoundingClientRect().top < 52) {
        window.scrollBy(0, -52);
    }
});
