document.addEventListener("DOMContentLoaded", function() {
    // Selecionar os elementos
    let lermais = document.querySelector(".lermais");
    let lermenos = document.querySelector(".lermenos");
    let historiaCompleta = document.querySelector(".historia-completa");
    let historiaResumo = document.querySelector(".hitoria-resumo"); // Corrigir a classe

    // Função para mostrar o texto completo
    function lerMais() {
        historiaCompleta.style.display = 'block';
        lermais.style.display = "none";
        
    }

    // Função para mostrar o resumo e esconder o texto completo
    function lerMenos() {
        historiaCompleta.style.display = "none";
        historiaResumo.style.display = "block"; // Mostra o resumo novamente
        lermais.style.display = "inline-block";
        
    }

    // Adicionar os ouvintes de evento aos botões
    lermais.addEventListener("click", lerMais);
    lermenos.addEventListener("click", lerMenos);
});






    document.addEventListener("DOMContentLoaded", function() {
        console.log("JavaScript carregado e em execução.");

        var links = document.querySelectorAll("nav a[href^='#']");

        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault();

                var targetId = link.getAttribute("href");
                var targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        });
    });

