let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let menuItems = document.querySelectorAll("nav a"); // جميع الروابط داخل القائمة

toggler.onclick = function () {
    nav.classList.add("open");
};

close.onclick = function () {
    nav.classList.remove("open");
};

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};

// إغلاق القائمة عند الضغط على أي عنصر داخلها
menuItems.forEach(item => {
    item.onclick = function () {
        nav.classList.remove("open");
    };
});

