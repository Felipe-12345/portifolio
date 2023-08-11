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
