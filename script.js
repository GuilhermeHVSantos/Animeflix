function adicionarAnime() {
  var campoImagemAnime = document.getElementById("imagem").value;
  var campoNome = document.getElementById("nome").value;
  if (campoImagemAnime.endsWith(".jpg") && campoNome != "") {
    listarAnimesNaTela(campoImagemAnime);
  } else if (campoNome == "") {
    alert("Coloque o nome do Anime");
  } else {
    alert(`Endereço de imagem do Anime Inválido
    Insira um endereço com .jpg para validar!`);
  }
  document.getElementById("imagem").value = "";
  document.getElementById("nome").value = "";
}

function listarAnimesNaTela(anime) {
  var elementoAnime = "<img src=" + anime + ">";
  var campoNome = document.getElementById("nome").value;
  var elementoListaAnime = document.getElementById("listaAnime");
  elementoListaAnime.innerHTML =
    elementoListaAnime.innerHTML +
    (`<div id="margem">` +
      (elementoAnime + ("<h1>" + campoNome + "</h1>")) +
      "</div");
}

function excluir() {
  var elementoListaAnime = document.getElementById("listaAnime");
  elementoListaAnime.innerHTML = "";
}