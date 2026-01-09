// ===== CONTROLE DE ABAS =====
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ===== BASE DE CONTEÚDO (IA) =====
const reelsEngajamento = [
  {
    ideia: "Mostre o acabamento do bolo em câmera lenta",
    roteiro: "Comece com o bolo simples → transição para o bolo finalizado",
    cta: "Qual sabor você escolheria? 🍰"
  },
  {
    ideia: "Antes e depois de um doce personalizado",
    roteiro: "Mostre o processo rápido + resultado final",
    cta: "Você prefere simples ou decorado?"
  },
  {
    ideia: "Cliente reagindo ao receber o bolo",
    roteiro: "Grave a reação + detalhe do bolo",
    cta: "Marque alguém que ia amar isso 😍"
  },
  {
    ideia: "Erro comum na confeitaria",
    roteiro: "Mostre o erro → como corrigir",
    cta: "Você já passou por isso?"
  },
  {
    ideia: "Detalhe satisfatório (ASMR)",
    roteiro: "Corte do bolo ou finalização",
    cta: "Curte vídeos assim? ❤️"
  }
];

const storiesEngajamento = [
  "Mostre o bolo do dia + enquete: Chocolate 🍫 ou Morango 🍓?",
  "Bastidores da produção + pergunta: Quer ver o resultado?",
  "Mostre dois doces e pergunte: Qual você escolheria?",
  "Vídeo curto trabalhando + sticker 'Arrasta pra cima mental 😅'",
  "Story com você falando: Você prefere recheio cremoso ou crocante?"
];

const postsHoje = [
  "Reel mostrando detalhe do acabamento",
  "Story interativo com enquete",
  "Reel curto mostrando transformação",
  "Story mostrando bastidores reais",
  "Reel com tendência + bolo"
];

// ===== FUNÇÕES IA =====
function randomItem(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

// HOJE
function gerarPost() {
  const ideia = randomItem(postsHoje);
  document.getElementById("todayPost").innerText =
    `📌 Sugestão de hoje:\n${ideia}\n\n🎯 Objetivo: ganhar seguidores`;
}

// STORY SIMPLES
function gerarStory() {
  const ideia = randomItem(storiesEngajamento);
  document.getElementById("story").innerText =
    `📲 Story sugerido:\n${ideia}`;
}

// REEL IA
function gerarReel() {
  const reel = randomItem(reelsEngajamento);
  document
