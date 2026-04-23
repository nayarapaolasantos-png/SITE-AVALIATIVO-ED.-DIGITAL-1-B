// BANCO DE DADOS DO SITE
const lotusCards = [
    {
        title: "Lótus Sagrada",
        desc: "Símbolo de pureza espiritual, suas pétalas possuem propriedades autolimpantes únicas.",
        img: "https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Resiliência Aquática",
        desc: "Capaz de florescer em águas lodosas, representa a superação das dificuldades.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Simetria Natural",
        desc: "Sua geometria perfeita inspira arquitetos e artistas há milênios.",
        img: "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=600&q=80"
    }
];

const curiosidades = [
    { title: "Longevidade", content: "Sementes de lótus podem germinar após 1.300 anos de dormência." },
    { title: "Termorregulação", content: "A flor consegue manter sua temperatura interna constante, como os humanos." },
    { title: "O Efeito Lótus", content: "Sua superfície repele água e poeira, técnica usada na nanotecnologia." }
];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initScrollReveal();
});

function renderContent() {
    // Renderiza Cards
    const grid = document.getElementById('lotus-grid');
    grid.innerHTML = lotusCards.map(card => `
        <article class="card">
            <img src="${card.img}" alt="${card.title}" class="card-img">
            <div class="card-body">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
            </div>
        </article>
    `).join('');

    // Renderiza Acordeão
    const faq = document.getElementById('faq-container');
    faq.innerHTML = curiosidades.map(item => `
        <div class="acc-item">
            <button class="acc-header" onclick="toggleAcc(this)">
                ${item.title} <span>+</span>
            </button>
            <div class="acc-content"><p>${item.content}</p></div>
        </div>
    `).join('');
}

// FUNÇÕES DE INTERAÇÃO
function toggleAcc(btn) {
    btn.parentElement.classList.toggle('active');
    btn.querySelector('span').innerText = btn.parentElement.classList.contains('active') ? '-' : '+';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

let fontSize = 16;
function changeFontSize(v) {
    fontSize += v * 2;
    document.documentElement.style.setProperty('--font-base', fontSize + 'px');
}

// SCROLL REVEAL LOGIC
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
