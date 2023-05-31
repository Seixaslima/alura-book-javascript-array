const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const filtro = elementoBtn.value;
  let livrosFiltrados =
    filtro == 'disponivel'
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(filtro);

  colocarLivrosNaPagina(livrosFiltrados);

  if (filtro == 'disponivel') {
    let precoTotal = calculaValorTotalLivrosDisponiveis(livrosFiltrados);
    mostrarPrecoDosLivrosDisponiveis(precoTotal);
  }
}
function filtrarPorCategoria(filtro) {
  return livros.filter(livro => livro.categoria == filtro);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function mostrarPrecoDosLivrosDisponiveis(precoTotal) {
  secaoPrecoLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
  </div>  
  `;
}
