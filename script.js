/* =============================================
   JG Competitions — Main Script
   ============================================= */

// Competition data
const competitions = [
    {
        id: 1,
        emoji: '💰',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        prize: '£30,000 Cash',
        title: 'Win Thirty Thousand Pounds Cash!',
        tag: 'FEATURED', tagClass: 'featured',
        price: '£2.99', entries: 487, maxEntries: 750,
        closes: '15 Jun 2026'
    },
    {
        id: 2,
        emoji: '🚗',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        prize: '£25,000 Car',
        title: 'Brand New BMW 5 Series — Drive Away Today',
        tag: 'HOT', tagClass: 'hot',
        price: '£1.99', entries: 634, maxEntries: 800,
        closes: '1 Jun 2026'
    },
    {
        id: 3,
        emoji: '✈️',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        prize: '£10,000 Holiday',
        title: '5-Star Luxury All-Inclusive Holiday for Two',
        tag: 'NEW', tagClass: 'new',
        price: '£0.99', entries: 156, maxEntries: 500,
        closes: '31 May 2026'
    },
    {
        id: 4,
        emoji: '🏠',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        prize: '£50,000 Cash',
        title: 'Life-Changing Fifty Thousand Pound Cash Prize',
        tag: 'POPULAR', tagClass: 'popular',
        price: '£3.99', entries: 512, maxEntries: 1000,
        closes: '1 Jul 2026'
    },
    {
        id: 5,
        emoji: '💻',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        prize: 'MacBook Pro M4',
        title: 'Apple MacBook Pro M4 16" — Latest Model',
        tag: 'NEW', tagClass: 'new',
        price: '£0.99', entries: 223, maxEntries: 600,
        closes: '10 Jun 2026'
    },
    {
        id: 6,
        emoji: '⌚',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        prize: 'Rolex Watch',
        title: 'Rolex Submariner Date — Iconic Luxury Watch',
        tag: 'HOT', tagClass: 'hot',
        price: '£2.49', entries: 398, maxEntries: 500,
        closes: '5 Jun 2026'
    },
    {
        id: 7,
        emoji: '🎮',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        prize: 'PS5 Bundle',
        title: 'PlayStation 5 + 10 Games Mega Bundle',
        tag: 'HOT', tagClass: 'hot',
        price: '£0.99', entries: 287, maxEntries: 500,
        closes: '8 Jun 2026'
    },
    {
        id: 8,
        emoji: '🏋️',
        gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        prize: '£5,000 Cash',
        title: 'Five Thousand Pound Cash — Yours To Spend',
        tag: 'NEW', tagClass: 'new',
        price: '£1.49', entries: 94, maxEntries: 400,
        closes: '20 Jun 2026'
    },
];

const endingSoonData = [
    { id: 'e1', emoji: '🏆', prize: '£15,000 Cash', title: 'Win Fifteen Thousand Pounds Cash!', endDate: '2026-05-23T23:59:59', price: '£1.99' },
    { id: 'e2', emoji: '📱', prize: 'iPhone 16 Pro Max', title: 'Apple iPhone 16 Pro Max 1TB — Titanium', endDate: '2026-05-24T12:00:00', price: '£0.99' },
    { id: 'e3', emoji: '🎸', prize: 'Gibson Les Paul', title: 'Gibson Les Paul Standard Electric Guitar', endDate: '2026-05-22T23:59:59', price: '£1.49' },
    { id: 'e4', emoji: '🛻', prize: 'Ford Ranger', title: 'Brand New Ford Ranger Wildtrak 4x4', endDate: '2026-05-25T12:00:00', price: '£2.99' },
];

const winnersData = [
    { name: 'Sarah M.',   location: 'Manchester',  prize: '£25,000 Cash',    date: '18 May 2026', color: '#667eea' },
    { name: 'James T.',   location: 'Belfast',     prize: 'BMW 3 Series',    date: '17 May 2026', color: '#f5576c' },
    { name: 'Claire D.',  location: 'Dublin',      prize: '£10,000 Holiday', date: '16 May 2026', color: '#43e97b' },
    { name: 'Michael R.', location: 'Leeds',       prize: 'Rolex Watch',     date: '15 May 2026', color: '#fa709a' },
    { name: 'Emma L.',    location: 'Edinburgh',   prize: '£5,000 Cash',     date: '14 May 2026', color: '#4facfe' },
    { name: 'Daniel B.',  location: 'London',      prize: 'PS5 Bundle',      date: '13 May 2026', color: '#a18cd1' },
    { name: 'Rachel K.',  location: 'Cork',        prize: 'MacBook Pro',     date: '12 May 2026', color: '#fee140' },
    { name: 'Tom W.',     location: 'Cardiff',     prize: '£30,000 Cash',    date: '11 May 2026', color: '#00f2fe' },
];

const faqsData = [
    {
        q: 'How do competitions work?',
        a: 'Our competitions work by purchasing entry tickets. Answer our simple skill-based question correctly and your entry is submitted into our draw. Winners are selected at random from correct entries and drawn live on Facebook, completely transparently.'
    },
    {
        q: 'How do I enter a competition?',
        a: "Select the competition you want to enter, choose how many tickets you'd like, answer the skill question correctly, and pay securely through our checkout. Tickets are issued instantly and you'll receive a confirmation email."
    },
    {
        q: 'How are winners chosen?',
        a: 'Winners are chosen using a certified Random Number Generator (RNG). All draws are conducted live on our Facebook page and verified by an independent third party. Full entry lists are published before each draw so everything is transparent.'
    },
    {
        q: 'When do competitions close?',
        a: "Each competition has its own closing date and time, clearly shown on the competition page. Competitions may close early if all tickets sell out. If a competition doesn't fill, a draw date is set and all entries are included."
    },
    {
        q: "How will I know if I've won?",
        a: "Winners are announced on our Facebook page and contacted directly by phone and email. Make sure your contact details are up to date in your account. Prizes must be claimed within 28 days of the draw."
    },
    {
        q: 'Is this legal?',
        a: 'Yes! Our competitions operate under Section 14 of the Gambling Act 2005 as skill-based prize competitions. We are a fully legitimate UK competition provider, compliant with all relevant legislation and fully insured.'
    },
];

/* =============================================
   Basket
   ============================================= */
let basket = [];

function addToBasket(itemName) {
    basket.push(itemName);
    renderBasket();
    openBasket();
}

function removeFromBasket(index) {
    basket.splice(index, 1);
    renderBasket();
}

function openBasket() {
    document.getElementById('basketSidebar').classList.add('open');
    document.getElementById('basketOverlay').classList.add('active');
}

function toggleBasket() {
    document.getElementById('basketSidebar').classList.toggle('open');
    document.getElementById('basketOverlay').classList.toggle('active');
}

function renderBasket() {
    const count = basket.length;
    document.getElementById('basketCount').textContent = count;

    const itemsEl = document.getElementById('basketItems');
    const footerEl = document.getElementById('basketFooter');

    if (count === 0) {
        itemsEl.innerHTML = '<p class="empty-basket">Your basket is empty.<br><small>Add competitions above to get started!</small></p>';
        footerEl.style.display = 'none';
    } else {
        itemsEl.innerHTML = basket.map((item, i) => `
            <div class="basket-item">
                <span class="basket-item-name">${escapeHtml(item)}</span>
                <button class="basket-item-remove" onclick="removeFromBasket(${i})">Remove</button>
            </div>
        `).join('');
        document.getElementById('basketTotal').textContent = `${count} item${count !== 1 ? 's' : ''} in your basket`;
        footerEl.style.display = 'block';
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

document.getElementById('basketBtn').addEventListener('click', toggleBasket);
document.getElementById('basketOverlay').addEventListener('click', toggleBasket);

/* =============================================
   Render Competition Cards
   ============================================= */
function renderCompetitions() {
    const grid = document.getElementById('competitionsGrid');
    grid.innerHTML = competitions.map(c => {
        const pct = Math.round((c.entries / c.maxEntries) * 100);
        return `
            <div class="comp-card" onclick="addToBasket('${escapeHtml(c.prize)}')">
                <div class="comp-image" style="background: ${c.gradient}">
                    <span>${c.emoji}</span>
                    <span class="comp-tag ${c.tagClass}">${c.tag}</span>
                </div>
                <div class="comp-body">
                    <div class="comp-prize">${c.prize}</div>
                    <div class="comp-title">${c.title}</div>
                    <div class="comp-progress-wrap">
                        <div class="comp-progress-label">
                            <span>${c.entries.toLocaleString()} entries</span>
                            <span>${pct}% full</span>
                        </div>
                        <div class="comp-progress-bar">
                            <div class="comp-progress-fill" style="width: 0%" data-width="${pct}%"></div>
                        </div>
                    </div>
                    <div class="comp-meta">
                        <span>Closes: ${c.closes}</span>
                        <span class="comp-price">From ${c.price}</span>
                    </div>
                    <button class="btn-enter">Enter Now</button>
                </div>
            </div>
        `;
    }).join('');

    // Animate progress bars after a short delay
    requestAnimationFrame(() => {
        setTimeout(() => {
            document.querySelectorAll('.comp-progress-fill').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }, 200);
    });
}

/* =============================================
   Render Ending Soon
   ============================================= */
function renderEndingSoon() {
    const grid = document.getElementById('endingGrid');
    grid.innerHTML = endingSoonData.map(c => `
        <div class="ending-card">
            <div class="ending-emoji">${c.emoji}</div>
            <div class="ending-prize">${c.prize}</div>
            <div class="ending-title">${c.title}</div>
            <div class="ending-timer" id="endTimer${c.id}">
                <div class="t-unit"><span class="t-val">--</span><span class="t-lbl">Days</span></div>
                <div class="t-unit"><span class="t-val">--</span><span class="t-lbl">Hrs</span></div>
                <div class="t-unit"><span class="t-val">--</span><span class="t-lbl">Mins</span></div>
                <div class="t-unit"><span class="t-val">--</span><span class="t-lbl">Secs</span></div>
            </div>
            <div class="ending-price">From ${c.price} per entry</div>
            <button class="btn-enter" onclick="event.stopPropagation(); addToBasket('${escapeHtml(c.prize)}')">Enter Now</button>
        </div>
    `).join('');

    endingSoonData.forEach(c => startEndingCountdown(`endTimer${c.id}`, c.endDate));
}

function startEndingCountdown(containerId, endDateStr) {
    function tick() {
        const diff = Math.max(0, new Date(endDateStr).getTime() - Date.now());
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        const container = document.getElementById(containerId);
        if (!container) return;
        const vals = container.querySelectorAll('.t-val');
        if (vals.length >= 4) {
            vals[0].textContent = String(d).padStart(2, '0');
            vals[1].textContent = String(h).padStart(2, '0');
            vals[2].textContent = String(m).padStart(2, '0');
            vals[3].textContent = String(s).padStart(2, '0');
        }
    }
    tick();
    setInterval(tick, 1000);
}

/* =============================================
   Render Winners
   ============================================= */
function renderWinners() {
    const grid = document.getElementById('winnersGrid');
    grid.innerHTML = winnersData.map(w => `
        <div class="winner-card">
            <div class="winner-avatar" style="background: ${w.color}">
                ${w.name.charAt(0)}
            </div>
            <div class="winner-info">
                <div class="winner-name">${w.name} — ${w.location}</div>
                <div class="winner-prize">${w.prize}</div>
                <div class="winner-date">${w.date}</div>
            </div>
            <span class="winner-badge">WINNER</span>
        </div>
    `).join('');
}

/* =============================================
   Render FAQ
   ============================================= */
function renderFAQ() {
    const list = document.getElementById('faqList');
    list.innerHTML = faqsData.map((faq, i) => `
        <div class="faq-item" id="faqItem${i}">
            <div class="faq-q" onclick="toggleFAQ(${i})">
                <span>${faq.q}</span>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-a">${faq.a}</div>
        </div>
    `).join('');
}

function toggleFAQ(i) {
    document.querySelectorAll('.faq-item').forEach((item, idx) => {
        if (idx === i) {
            item.classList.toggle('open');
        } else {
            item.classList.remove('open');
        }
    });
}

/* =============================================
   Hero Carousel
   ============================================= */
let currentSlide = 0;
const totalSlides = 3;
let autoPlayTimer = null;

function initCarousel() {
    const dotsContainer = document.getElementById('carouselDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        resetAutoPlay();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        goToSlide((currentSlide + 1) % totalSlides);
        resetAutoPlay();
    });

    startAutoPlay();
}

function goToSlide(n) {
    currentSlide = n;
    document.getElementById('carouselTrack').style.transform = `translateX(-${n * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === n));
}

function startAutoPlay() {
    autoPlayTimer = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5500);
}

function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
}

/* =============================================
   Hero Slide Countdown Timers
   ============================================= */
function startHeroTimers() {
    const slides = [
        { ids: ['d0','h0','m0','s0'], end: '2026-06-15T23:59:59' },
        { ids: ['d1','h1','m1','s1'], end: '2026-06-01T23:59:59' },
        { ids: ['d2','h2','m2','s2'], end: '2026-05-31T23:59:59' },
    ];

    slides.forEach(slide => {
        function tick() {
            const diff = Math.max(0, new Date(slide.end).getTime() - Date.now());
            const parts = [
                Math.floor(diff / 86400000),
                Math.floor((diff % 86400000) / 3600000),
                Math.floor((diff % 3600000) / 60000),
                Math.floor((diff % 60000) / 1000),
            ];
            slide.ids.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el) el.textContent = String(parts[i]).padStart(2, '0');
            });
        }
        tick();
        setInterval(tick, 1000);
    });
}

/* =============================================
   Stats Counter Animation
   ============================================= */
function animateStats() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 55;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current).toLocaleString();
            if (current >= target) clearInterval(timer);
        }, 28);
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateStats();
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.4 });

const statsEl = document.querySelector('.stats-bar');
if (statsEl) statsObserver.observe(statsEl);

/* =============================================
   Hamburger Menu
   ============================================= */
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('open');
    });
});

/* =============================================
   Initialise Everything
   ============================================= */
renderCompetitions();
renderEndingSoon();
renderWinners();
renderFAQ();
initCarousel();
startHeroTimers();
