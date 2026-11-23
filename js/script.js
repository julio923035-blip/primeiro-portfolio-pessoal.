/* =====================================
   1. ALTERAÇÃO DE TEMA
===================================== */

// Localiza o botão de alteração de tema
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        // Verifica o tema atual
        const currentTheme = document.body.getAttribute("data-theme");

        // Alterna entre claro e escuro
        if (currentTheme === "light") {

            // Volta para o tema escuro
            document.body.removeAttribute("data-theme");

            themeButton.textContent = "☀️";

        } else {

            // Ativa o tema claro
            document.body.setAttribute("data-theme", "light");

            themeButton.textContent = "🌙";

        }

    });

}


/* =====================================
   2. MENU RESPONSIVO
===================================== */

// Localiza o botão e o menu
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuButton && menu) {

    // Abre ou fecha o menu ao clicar
    menuButton.addEventListener("click", function() {

        const aberto = menu.classList.toggle("aberto");

        // Altera o símbolo do botão
        menuButton.textContent = aberto ? "✕" : "☰";

        // Atualiza a acessibilidade
        menuButton.setAttribute("aria-expanded", aberto);

        menuButton.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

    });


    // Fecha o menu ao clicar em um link
    menu.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            menu.classList.remove("aberto");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute("aria-label", "Abrir menu");

        });

    });

}


/* =====================================
   3. ANIMAÇÃO DAS SEÇÕES
===================================== */

// Seleciona todas as seções do conteúdo
const secoes = document.querySelectorAll("main > section");

// Verifica se o navegador suporta IntersectionObserver
if ("IntersectionObserver" in window) {

    // Cria o observador das seções
    const observador = new IntersectionObserver(

        function(entradas, observador) {

            entradas.forEach(function(entrada) {

                // Verifica se a seção apareceu na tela
                if (entrada.isIntersecting) {

                    // Adiciona a classe que mostra a seção
                    entrada.target.classList.add("visivel");

                    // Para de observar após a animação
                    observador.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    // Aplica a animação em cada seção
    secoes.forEach(function(secao) {

        secao.classList.add("revelar");

        observador.observe(secao);

    });

} else {

    // Mostra as seções caso o navegador
    // não tenha suporte ao observador
    secoes.forEach(function(secao) {

        secao.classList.add("visivel");

    });

}
