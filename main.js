//Função para exibir e esconder o menus

//Declaração das variáveis
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar")

//Funções para exibir e esconder os menus
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}
