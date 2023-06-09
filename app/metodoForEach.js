const secaoDeLivros = document.getElementById('livros');

const secaoPrecoLivrosDisponiveis = document.getElementById(
  'valor_total_livros_disponiveis'
);

function colocarLivrosNaPagina(listaDeLivros) {
  secaoDeLivros.innerHTML = '';
  secaoPrecoLivrosDisponiveis.innerHTML = '';
  listaDeLivros.forEach(livro => {
    secaoDeLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens ${
        livro.quantidade > 0 ? '' : 'indisponivel'
      }" src="${livro.imagem}"
        alt="${livro.alt} " />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}
