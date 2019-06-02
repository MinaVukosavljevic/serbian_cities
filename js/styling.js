/*** Floating label ***/

function floatLabel() {
    const $inputFields = document.querySelectorAll('.input-box input');

    $inputFields.forEach(function (el) {

        if (el.value && el.parentElement.className.includes('input-box')) {
            el.parentElement.classList.add('active');
        }

        el.addEventListener('focus', function () {
            if (el.parentElement.className.includes('input-box')) {
                el.parentElement.classList.add('active');
            }
        });

        el.addEventListener('blur', function () {
            if (el.parentElement.className.includes('input-box') && !el.value) {
                el.parentElement.classList.remove('active');
            }
        })
    });
}


/*** Sticky, smooth, active nav ***/

function createStickyNav() {
    const $galleryNavLinks = document.querySelectorAll(".sidenav ul li a");

    window.addEventListener('scroll', function () {

        let fromTop = window.scrollY;

        $galleryNavLinks.forEach(link => {
            let $galleryArticle = document.querySelector(link.hash);

            if (
                $galleryArticle.offsetTop <= fromTop &&
                $galleryArticle.offsetTop + $galleryArticle.offsetHeight > fromTop
            ) {
                link.classList.add('current');
            } else {
                link.classList.remove('current');
            }
        });
    });
}