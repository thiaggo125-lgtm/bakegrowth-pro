const posts = [
  "Reel mostrando o recheio do bolo em câmera lenta 🍫",
  "Foto do bolo final + pergunta: qual sabor você escolheria?",
  "Reel de bastidores: montagem do doce",
  "Antes e depois da decoração 🎂",
  "Vídeo cortando o bolo (satisfatório)"
];

const stories = [
  "Qual nota você dá pra esse doce? 😍🔥",
  "Você prefere chocolate ou ninho?",
  "Encomenda aberta pra hoje 👀",
  "Quem aí comeria agora? 🍰",
  "Arrasta pra conversar no direct 📩"
];

function gerarPost() {
  const escolha = posts[Math.floor(Math.random() * posts.length)];
  document.getElementById("todayPost").innerText = escolha;
}

function gerarStory() {
  const escolha = stories[Math.floor(Math.random() * stories.length)];
  document.getElementById("story").innerText = escolha;
}

gerarPost();
gerarStory();
