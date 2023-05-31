let livros = [];
const endpointDaAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivrosDaAPI();

const secaoDeLivros = document.getElementById('livros');

async function getBuscaLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  console.table(livros);
  colocarLivrosNaPagina(livros);
}

function colocarLivrosNaPagina(listaDeLivros) {
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
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}

`
(índice)
titulo
preco
autor
imagem
alt
quantidade
categoria
`;
