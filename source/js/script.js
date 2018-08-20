var links = document.querySelectorAll(".open-modal");

var popup = document.querySelector(".modal--call-back");
var close = popup.querySelector(".modal__close");

var form = popup.querySelector(".contact-form");
var userTel = popup.querySelector("[name=tel]");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal--show");
    });
}

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
    popup.classList.remove("modal--error");
});

form.addEventListener("submit", function (evt) {
    if (!userTel.value) {
        popup.classList.remove("modal--error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal--error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal--show")) {
            popup.classList.remove("modal--show");
            popup.classList.remove("modal--error");
        }
    }
});

var topLink = document.querySelector('.top-link');
var bannerTop = document.querySelector('.banner--top');
var showTopLink = function () {
    topLink.classList.add('top-link--active');
};
var hideTopLink = function () {
    topLink.classList.remove('top-link--active');
};

bannerTop.addEventListener('mouseout', showTopLink);
bannerTop.addEventListener('mouseover', hideTopLink);

// topLink.scrollIntoView({ behavior: 'smooth' }); Пока не работает

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

