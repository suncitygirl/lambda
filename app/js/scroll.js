var menu = document.getElementsByClassName('main-nav__list')[0];

function Menu(elem) {

    function clickHandler(event) {
        event.preventDefault();
        if (!event.target.hasAttribute('data-scroll')) return;
        scroll(event.target);
    }

    function scroll(clickedElem) {
        var scr = clickedElem.getAttribute('data-scroll');
        var elem = document.getElementsByClassName(scr)[0];
        var coords = getCoords(elem);
        console.log(coords.top);
        window.scrollTo(0, coords.top, 'smooth');
    }

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }

    elem.addEventListener('click', clickHandler);
}

new Menu(menu);
