/* ── Typewriter ─────────────────────────────────── */
function typewriter(el, text, speed) {
    speed = speed || 60;
    el.innerHTML = '<span class="tw-cursor">_</span>';
    var i = 0;
    var cursor = el.querySelector('.tw-cursor');
    var timer = setInterval(function () {
        if (i < text.length) {
            el.insertBefore(document.createTextNode(text[i]), cursor);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

/* ── Fade-in au scroll ──────────────────────────── */
function initFadeIn() {
    if (!('IntersectionObserver' in window)) return;

    var items = document.querySelectorAll('.project, .fade-in');
    items.forEach(function (el) {
        el.classList.add('fade-up');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
}

/* ── Init ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    var heroSub = document.querySelector('.hero-sub[data-typewriter]');
    if (heroSub) {
        typewriter(heroSub, heroSub.getAttribute('data-typewriter'));
    }
    initFadeIn();

    // Discord — copie du pseudo au clic
    var discordBtn = document.querySelector('.discord-copy');
    if (discordBtn) {
        discordBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(discordBtn.getAttribute('data-username')).then(function () {
                discordBtn.classList.add('copied');
                setTimeout(function () { discordBtn.classList.remove('copied'); }, 2000);
            });
        });
    }
});
