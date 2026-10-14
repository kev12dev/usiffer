// Número de WhatsApp da Usiffer em formato internacional, sem espaços ou símbolos.
const WHATSAPP_NUMBER = "5511958244365";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

document.querySelectorAll("[data-item]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.getAttribute("data-item");
    openWhatsApp(`Olá! Gostaria de consultar a Usiffer sobre: ${item}. Poderiam me orientar sobre orçamento e disponibilidade?`);
  });
});

document.getElementById("quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const tipo = document.getElementById("tipo").value;
  const detalhes = document.getElementById("detalhes").value.trim();
  const message = [
    "Olá! Gostaria de solicitar um orçamento com a Usiffer Soluções Industriais.",
    "",
    `Nome / empresa: ${nome}`,
    `Necessidade: ${tipo}`,
    `Detalhes: ${detalhes || "Ainda não informado."}`,
    "",
    "Posso enviar fotos ou desenho técnico por aqui?"
  ].join("\\n");
  openWhatsApp(message);
});

document.getElementById("year").textContent = new Date().getFullYear();
