// ativa as duas funções on scroll

function onScroll() {
    showNavOnScrool();
    showBackToTopButtonOnScroll();
}

// Adicionar e remover header Navigation

function showNavOnScrool() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

// Ativar o botão do back to top na metade da página
// *300 altura tela

function showBackToTopButtonOnScroll() {
    // para mostrar no inspect do navegador a posição exata de onde começa o botão
    // console.log(scrollY);
    if (scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
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
 #sevices .card,
 #about,
 #about header,
 #about .content`);

//  Para ler aqui antes do HTML e não dar conflito com velocidade de processamento do scroll, para isso remover on Scroll do body. Não deu erro então segue apenas comentado
//  window.addEventListener('scroll',onScroll)
// onScroll()
