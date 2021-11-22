window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("stick", window.scrollY > 0);
})
function darkTheme() {
    document.querySelector(".header").classList.toggle("bg-black");
    var headerTitle = document.getElementsByClassName("header-title");
    var dropdownText = document.getElementsByClassName('dropdown-text');
    for (var i = 0; i < headerTitle.length; i++) {
        headerTitle[i].classList.toggle("text-white");
    }
    document.querySelector(".dropdown-bg").classList.toggle("bg-gray-900");
    for (var i = 0; i < dropdownText.length; i++) {
        dropdownText[i].classList.toggle("text-white");
    }
    document.querySelector(".banner").classList.toggle("bg-black");
    document.querySelector(".banner-heading").classList.toggle("text-white");

    // dropdownBg.classList.toggle("bg-gray-600");
}
