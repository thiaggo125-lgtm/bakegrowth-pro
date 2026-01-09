// CONTROLE DE ABAS
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

// HOJE
function gerarPost() {
  const ideias = [
    "Bolo de chocolate com recheio trufado – mostra o corte",
    "Antes e depois da decoração de um bolo",
    "Detalhes do acabamento em câmera lenta",
    "Bolo simples que vende muito",
    "Pedido saindo para cliente (com embalagem)"
  ];

  document.getElementById("todayPost").innerText =
    ideias[Math.floor(Math.random() * ideias.length)];
}

// STORY SIMPLES
function gerarStory() {
  const stories = [
    "Enquete: Chocolate 🍫 ou Ninho 🥛?",
    "Pergunta: Qual bolo você escolheria hoje?",
    "Bastidores da produção",
    "Mostrando ingredientes fresquinhos",
    "Contagem regressiva para encomendas"
  ];

  document.getElementById("story").innerText =
    stories[Math.floor(Math.random() * stories.length)];
}

// REELS
function gerarReel() {
  const reels = [
    "Close no bolo + música em alta",
    "Processo acelerado (do zero ao final)",
    "Corte do bolo com ASMR",
    "Cliente retirando o pedido",
    "Decoração em tempo real"
  ];

  document.getElementById("reelIdea").innerText =
    reels[Math.floor(Math.random() * reels.length)];
}

// STORY PRO
function gerarStoryPro() {
  const storiesPro = [
    "Caixa de perguntas: qual sabor você quer no próximo bolo?",
    "Enquete de preço (interação)",
    "Depoimento de cliente",
    "Bastidores + CTA para encomenda",
    "Mostrando agenda quase cheia"
  ];

  document.getElementById("storyPro").innerText =
    storiesPro[Math.floor(Math.random() * storiesPro.length)];
}

// MODO PRO
function gerarPro() {
  const pro = [
    "Post educativo: diferença entre bolo artesanal e industrial",
    "Reel com storytelling do seu trabalho",
    "Story mostrando autoridade no que faz",
    "Conteúdo focado em venda direta",
    "Sequência de stories com CTA"
  ];

  document.getElementById("proText").innerText =
    pro[Math.floor(Math.random() * pro.length)];
}

// CALENDÁRIO AUTOMÁTICO
document.addEventListener("DOMContentLoaded", () => {
  const calendar = [
    "Segunda: Foto do bolo",
    "Terça: Story interativo",
    "Quarta: Reel",
    "Quinta: Bastidores",
    "Sexta: Oferta / Encomendas",
    "Sábado: Depoimento",
    "Domingo: Descanso ou repost"
  ];

  const list = document.getElementById("calendarList");
  if (list) {
    calendar.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  }
});
