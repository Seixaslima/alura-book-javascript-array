const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenaLivroPorPreco);

function ordenaLivroPorPreco() {
  var livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

  colocarLivrosNaPagina(livrosOrdenados);
}
