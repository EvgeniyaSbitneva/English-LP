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
