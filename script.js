// ===== ABAS =====
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active'));
  });
  document.getElementById(id).classList.add('active');
}

// ===== UTIL =====
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const diaSemana = new Date().getDay();

// ===== BASE IA =====
const reels = {
  alcance: [
    {
      ideia: "Transformação de bolo simples em decorado",
      roteiro: "1️⃣ bolo simples → 2️⃣ decoração → 3️⃣ resultado final",
      dica: "Use música em alta e corte rápido",
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
  ]
};

const stories = [
  {
    seq: [
      "Mostre o bolo do dia",
      "Pergunte o sabor favorito",
      "Mostre detalhe do acabamento"
    ],
    sticker: "Enquete",
    objetivo: "Resposta"
  },
  {
    seq: [
      "Bastidores da produção",
      "Você trabalhando",
      "Resultado final"
    ],
    sticker: "Pergunta",
    objetivo: "Conexão"
  }
];

// ===== HOJE =====
function gerarPost() {
  const formatos = ["Reel", "Story"];
  const formato = randomItem(formatos);

  let texto = `📅 Hoje é dia de ${formato}\n🎯 Objetivo: ganhar seguidores\n\n`;

  if (formato === "Reel") {
    const r = randomItem(reels.alcance);
    texto += `🎥 Ideia: ${r.ideia}\n🎬 Roteiro: ${r.roteiro}\n📢 CTA: ${r.cta}`;
  } else {
    const s = randomItem(stories);
    texto += `📲 Sequência de Stories:\n- ${s.seq.join("\n- ")}\n🎯 Objetivo: ${s.objetivo}`;
  }

  document.getElementById("todayPost").innerText = texto;
}

// ===== REELS =====
function gerarReel() {
  const r = randomItem(reels.alcance);
  document.getElementById("reelIdea").innerText =
    `🎥 REEL PARA ALCANCE\n\nIdeia: ${r.ideia}\n\nRoteiro:\n${r.roteiro}\n\n📌 Dica: ${r.dica}\n\n📢 CTA: ${r.cta}`;
}

// ===== STORIES =====
function gerarStory() {
  const s = randomItem(stories);
  document.getElementById("story").innerText =
    `📲 STORIES PARA ENGAJAMENTO\n\n${s.seq.map((x,i)=>`Story ${i+1}: ${x}`).join("\n")}\n\nSticker: ${s.sticker}`;
}

function gerarStoryPro() {
  gerarStory();
}

// ===== PRO =====
function gerarPro() {
  const r = randomItem(reels.alcance);
  document.getElementById("proText").innerText =
    `👑 CONTEÚDO DE AUTORIDADE\n\n${r.ideia}\n\nMostre processo + qualidade + segurança no que faz.`;
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
