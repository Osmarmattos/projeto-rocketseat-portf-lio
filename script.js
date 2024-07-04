function toggleMode() {
  const html = document.documentElement;

  // Alterna a classe 'light' no elemento raiz (html)
  html.classList.toggle('light');

  const img = document.querySelector("#profile img");

  if (html.classList.contains('light')) {
      img.setAttribute("src", "./imagens/avatar-light.png");
  } else {
      img.setAttribute("src", "./imagens/avatar.png");
  }
}
