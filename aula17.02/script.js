document.getElementById('modo-escuro').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.ghostface-profile').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('modo-escuro').textContent = 'Desativar modo escuro ';
    } else {
        document.getElementById('modo-escuro').textContent = 'Ativar modo escuro ';
    }
});