const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const filtro = elementoBtn.value;
  let livrosFiltrados =
    filtro == 'disponivel'
      ? livros.filter(livro => livro.quantidade > 0)
      : livros.filter(livro => livro.categoria == filtro);

  colocarLivrosNaPagina(livrosFiltrados);
}
