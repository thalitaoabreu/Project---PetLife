// função (comando que damos ao navegador para ele executar) que será executada para cada elemento:
// estrutura da função:
//  function nome (argumento) {
//      conteúdo da função }   

var elementosDuvida =  document.querySelectorAll(".duvida")

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener("click",function() {
        duvida.classList.toggle("ativa")
})
})