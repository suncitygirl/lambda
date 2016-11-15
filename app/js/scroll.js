
var menu = document.getElementsByClassName('main-nav__list')[0];
var promo = document.getElementsByClassName('promo')[0];

function ScrollManager() {

    function clickHandler(event) {
        event.preventDefault();
        if (!event.target.hasAttribute('data-scroll')) return;
        scroll(event.target);
    }

    function scroll(clickedElem) {
        var scr = clickedElem.getAttribute('data-scroll');
        var elem = document.getElementsByClassName(scr)[0];
        elem.scrollIntoView({behavior: 'smooth'});
    }
    console.log(arguments);
    [].forEach.call(arguments, function(item) {
      item.addEventListener('click', clickHandler);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    new ScrollManager(menu, promo);
});
