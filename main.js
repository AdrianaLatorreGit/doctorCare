// ativa as duas funções on scroll

function onScroll() {
    showNavOnScrool();
    showBackToTopButtonOnScroll();

    // passar o nome da variavel section que quer analisar
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

// Deixando os elementos do header ativos conforme local onde está a navegação

function activateMenuAtCurrentSection(section) {
    // pegar a metade da tela para indicar quando uma seção passou para a outra
    //? linha alvo
    const targetLine = scrollY + innerHeight / 2;

    // Verificar se a seção passou da linha

    // quais dados vou precisar
    // numero do topo de quando começa cada seção(home, services, footer)
    // console.log(home.offsetTop);
    // console.log(services.offsetTop);
    //? o topo da seção
    const sectionTop = section.offsetTop;

    // pegar a altura total de cada seção
    //? a altura da seção
    const sectionHeight = section.offsetHeight;
    // console.log(sectionHeight);

    // Verificar se a linha do topo passou da metade da tela
    //? o topo da seção chegou ou ultrapassou a linha alvo

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // informações dos dados e da lógica
    // console.log(
    //     "O topo da seção chegou ou passou da linha?",
    //     sectionTopReachOrPassedTargetLine
    // );

    // verificar se a base está abaixo da linha alvo

    // quais dados vou precisar
    // Qual é de fato a base (cada uma tem uma altura diferente)
    // console.log(sectionTop);
    // console.log(sectionHeight);

    //? a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight;

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // console.log(
    //     "O fundo da seção passou da linha?",
    //     sectionEndPassedTargetLine
    // );

    // limites da seção
    // topo pode ter passado mas fundo não pode ter passado
    const sectionBondaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    // pegar a seção e procurar pelo atributo id
    const sectionId = section.getAttribute("id");
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    // primeiro remove para depois, se entrar no if, adicionar
    menuElement.classList.remove("active");

    if (sectionBondaries) {
        // console.log("Estou na seção Home");

        menuElement.classList.add("active");
    }
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

//  Para ler aqui antes do HTML e não dar conflito com velocidade de processamento do scroll, para isso remover on Scroll do body.
window.addEventListener("scroll", onScroll);
onScroll();
