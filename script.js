function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function gerarPost() {
  document.getElementById("todayPost").innerText =
    "Detalhes do acabamento em câmera lenta";
}

function gerarStory() {
  document.getElementById("story").innerText =
    "Bastidores da produção";
}

function gerarReel() {
  document.getElementById("reelIdea").innerText =
    "Cliente retirando o pedido";
}

function gerarStoryPro() {
  document.getElementById("storyPro").innerText =
    "Depoimento de cliente";
}

function gerarPro() {
  document.getElementById("proText").innerText =
    "Story mostrando autoridade no que faz";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calendarList").innerHTML = `
    <li>Segunda: Foto do bolo</li>
    <li>Terça: Story interativo</li>
    <li>Quarta: Reel</li>
    <li>Quinta: Bastidores</li>
    <li>Sexta: Oferta</li>
    <li>Sábado: Depoimento</li>
    <li>Domingo: Repost</li>
  `;
});
