// Adicionar e remover header
function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

// Ativa botão hamburguer on click (botão openMenu)
function openMenu() {
    document.body.classList.add("menu-expended");
}

// clicar no botão de fechar, dentro do expanded e sumir aquela navegação (botão closeMenu)
function closeMenu() {
    document.body.classList.remove("menu-expended");
}

// Scroll Reveal aparecendo os objetos
// mudar headline pelo elemento que vc quer revelar
// passar como argumento o objeto a ser revelado
ScrollReveal({
    origin: "top", //direção que a função aparece
    distance: "30px",
    duration: 700,
}).reveal(`#home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #sevices .card`);
