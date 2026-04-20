// Anti-FOUC : applique le thème sauvegardé avant tout rendu
(function () {
    try {
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    } catch (e) {}
}());

// Branche le bouton après chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            try { localStorage.setItem('theme', 'dark'); } catch (e) {}
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            try { localStorage.setItem('theme', 'light'); } catch (e) {}
        }
    });
});
