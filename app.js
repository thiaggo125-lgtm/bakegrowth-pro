function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

/* HOJE */
const posts = [
  "Foto do bolo final + pergunta: qual sabor você escolheria?",
  "Reel cortando o bolo em câmera lenta 🍰",
  "Antes e depois da decoração",
  "Bastidores da montagem do doce",
  "Close no recheio escorrendo 😍"
];

const stories = [
  "Quem aí comeria agora? 🍰",
  "De 0 a 10, quanto você daria?",
  "Chocolate ou Ninho?",
  "Encomendas abertas hoje 👀",
  "Arrasta pro direct 📩"
];

function gerarPost() {
  todayPost.innerText = posts[Math.floor(Math.random() * posts.length)];
}

function gerarStory() {
  story.innerText = stories[Math.floor(Math.random() * stories.length)];
}

/* CALENDÁRIO */
const calendario = [
  "Segunda: Reel mostrando bastidores",
  "Terça: Story com enquete",
  "Quarta: Foto do bolo final",
  "Quinta: Reel de corte",
  "Sexta: Story de encomendas",
  "Sábado: Foto + CTA",
  "Domingo: Story leve / interação"
];

const calendarList = document.getElementById("calendarList");
calendario.forEach(dia => {
  const li = document.createElement("li");
  li.textContent = dia;
  calendarList.appendChild(li);
});

/* REELS */
const reels = [
  "Corte do bolo + texto: impossível não desejar",
  "Recheio sendo colocado em close",
  "Antes e depois do bolo 🎂",
  "Decoração acelerada (timelapse)",
  "Cliente reagindo ao bolo"
];

function gerarReel() {
  reelIdea.innerText = reels[Math.floor(Math.random() * reels.length)];
}

/* STORIES PRO */
const storiesPro = [
  "Enquete: você prefere chocolate meio amargo?",
  "Caixa de perguntas: qual sabor você ama?",
  "Nota de 0 a 10 para esse doce",
  "Bastidores rápidos + música",
  "Aviso: últimas vagas hoje"
];

function gerarStoryPro() {
  storyPro.innerText = storiesPro[Math.floor(Math.random() * storiesPro.length)];
}

/* MODO PRO */
const proContents = [
  "Reel + CTA: salve para não esquecer",
  "Story com prova social (print de elogio)",
  "Post educativo: diferença entre recheios",
  "Reel emocional com música trend",
  "Story chamando para o direct"
];

function gerarPro() {
  proText.innerText = proContents[Math.floor(Math.random() * proContents.length)];
}

/* Inicial */
gerarPost();
gerarStory();
