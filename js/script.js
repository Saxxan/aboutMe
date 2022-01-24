var radios = document.getElementsByClassName("checkbox");
var menuOptions = document.getElementsByClassName("menu__option");

for(var i = 0; i<radios.length; i++) {
    radios[i].addEventListener("change", function() {
        menuOptions[i].classList.add("opaque");
    }) 
}
