// DATA MANAGEMENT - Objetos para renderização dinâmica
const lotusData = [
    { title: "Lótus Sagrada", desc: "A Nelumbo nucifera, símbolo de pureza nas religiões orientais." },
    { title: "Lótus Azul", desc: "Conhecida pelo seu aroma e presença no Egito Antigo." },
    { title: "Lótus Branca", desc: "Representa o estado de pureza mental e perfeição espiritual." }
];

const symbolismData = [
    { title: "Renascimento", content: "Como a flor emerge do lodo todas as manhãs sem se sujar." },
    { title: "Resiliência", content: "A capacidade de florescer em condições adversas." }
];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    renderAccordion();
    handleScroll(); // Checar elementos visíveis no load
});

// RENDERIZAÇÃO DINÂMICA
function renderCards() {
    const grid = document.getElementById('lotus-grid');
    grid.innerHTML = lotusData.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');
}

function renderAccordion() {
    const container = document.getElementById('faq-container');
    container.innerHTML = symbolismData.map((item, index) => `
        <div class="acc-item">
            <button class="acc-header" onclick="toggleAccordion(this)" aria-expanded="false">
                ${item.title} <span>+</span>
            </button>
            <div class="acc-content">
                <p>${item.content}</p>
            </div>
        </div>
    `).join('');
}

// ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 16;
function changeFontSize(delta) {
    currentFontSize += delta * 2;
    // Limites de segurança
    if(currentFontSize < 12) currentFontSize = 12;
    if(currentFontSize > 24) currentFontSize = 24;
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
}

// ACESSIBILIDADE: ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// COMPONENTE: ACORDEÃO
function toggleAccordion(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.toggle('active');
    btn.setAttribute('aria-expanded', isOpen);
    btn.querySelector('span').innerText = isOpen ? '-' : '+';
}

// ANIMAÇÃO SCROLL REVEAL (Visão Sistêmica)
function handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
