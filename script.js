// Adiciona funcionalidade para "Voltar ao Topo"
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = '⬆️ Topo';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#333';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.display = 'none';

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



  
  