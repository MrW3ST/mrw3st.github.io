/* ── Typewriter (texte simple) ───────────────────── */
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

/* ── Typewriter (HTML — balises insérées d'un coup) ─ */
function typewriterHTML(el, html, speed, onDone) {
    speed = speed || 10;
    var cursorHTML = '<span class="tw-cursor">_</span>';
    var i = 0;
    var typed = '';

    function withCursor(str) {
        var m = str.match(/((<\/[\w]+>)+)$/);
        if (m) return str.slice(0, str.length - m[0].length) + cursorHTML + m[0];
        return str + cursorHTML;
    }

    var timer = setInterval(function () {
        if (i < html.length) {
            if (html[i] === '<') {
                var end = html.indexOf('>', i);
                typed += html.slice(i, end + 1);
                i = end + 1;
            } else {
                typed += html[i];
                i++;
            }
            el.innerHTML = withCursor(typed);
        } else {
            clearInterval(timer);
            if (onDone) onDone();
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

/* ── Stepper méthodologie ───────────────────────── */
function initStepper() {
    var steps = document.querySelectorAll('.step');
    var panel = document.getElementById('stepperPanel');
    if (!steps.length || !panel) return;

    function activateStep(idx) {
        steps.forEach(function (s, i) {
            s.classList.remove('active', 'done');
            if (i < idx) s.classList.add('done');
        });
        steps[idx].classList.add('active');

        var title   = steps[idx].querySelector('.step-title').textContent;
        var content = steps[idx].querySelector('.step-content').innerHTML.trim();

        panel.innerHTML = '<p class="stepper-panel-title">' + title + '</p>';
        var textEl = document.createElement('div');
        panel.appendChild(textEl);

        panel.classList.add('visible');
        typewriterHTML(textEl, content, 14, function () {
            if (idx < steps.length - 1) {
                var btn = document.createElement('button');
                btn.className = 'stepper-next';
                btn.innerHTML = '&gt;';
                btn.addEventListener('click', function () { activateStep(idx + 1); });
                panel.appendChild(btn);
            }
        });
    }

    steps.forEach(function (step) {
        step.addEventListener('click', function () {
            var idx = parseInt(step.getAttribute('data-step')) - 1;
            if (step.classList.contains('active')) {
                steps.forEach(function (s) { s.classList.remove('active', 'done'); });
                panel.classList.remove('visible');
            } else {
                activateStep(idx);
            }
        });
    });
}

/* ── Init ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    var heroSub = document.querySelector('.hero-sub[data-typewriter]');
    if (heroSub) {
        typewriter(heroSub, heroSub.getAttribute('data-typewriter'));
    }
    initFadeIn();
    initStepper();

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
