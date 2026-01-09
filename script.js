// ===== ABAS =====
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ===== UTIL =====
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===== BASE IA =====
const reels = [
  {
    ideia: "Transformação de bolo simples em decorado",
    roteiro: "Bolo simples → decoração → resultado final",
    dica: "Use música em alta",
    cta: "Você prefere antes ou depois?"
  },
  {
    ideia: "Erro comum na confeitaria",
    roteiro: "Mostre o erro → explique → corrija",
    dica: "Fale olhando para a câmera",
    cta: "Já aconteceu com você?"
  },
  {
    ideia: "Detalhe satisfatório (ASMR)",
    roteiro: "Close no acabamento ou corte",
    dica: "Capriche no áudio",
    cta: "Curte vídeos assim?"
  }
];

const stories = [
  [
    "Mostre o bolo do dia",
    "Pergunte o sabor favorito",
    "Mostre detalhe do acabamento"
  ],
  [
    "Bastidores da produção",
    "Você trabalhando",
    "Resultado final"
  ]
];

// ===== FUNÇÕES =====
function gerarPost() {
  const r = randomItem(reels);
  document.getElementById("todayPost").innerText =
    `🎯 REEL PARA GANHAR SEGUIDORES\n\nIdeia: ${r.ideia}\nRoteiro: ${r.roteiro}\nCTA: ${r.cta}`;
}

function gerarStory() {
  const s = randomItem(stories);
  document.getElementById("story").innerText =
    s.map((x, i) => `Story ${i + 1}: ${x}`).join("\n");
}

function gerarReel() {
  const r = randomItem(reels);
  document.getElementById("reelIdea").innerText =
    `🎥 REEL\n\nIdeia: ${r.ideia}\nRoteiro: ${r.roteiro}\nDica: ${r.dica}\nCTA: ${r.cta}`;
}

function gerarStoryPro() {
  gerarStory();
}

function gerarPro() {
  const r = randomItem(reels);
  document.getElementById("proText").innerText =
    `👑 CONTEÚDO PRO\n\n${r.ideia}\nMostre autoridade e processo.`;
}

// ===== CALENDÁRIO =====
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calendarList").innerHTML = `
    <li>Segunda: Bastidores</li>
    <li>Terça: Story interativo</li>
    <li>Quarta: Reel transformação</li>
    <li>Quinta: Erro comum</li>
    <li>Sexta: Trend</li>
    <li>Sábado: Story pessoal</li>
    <li>Domingo: Repost</li>
  `;
});
