document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement('button');
    button.textContent = '↑ Topo';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#f2a900';
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


function filterCategory(category) {
    const items = document.querySelectorAll('.inspiracao-item');
    items.forEach(item => {
        const itemCategory = item.classList.contains(category) ? 'block' : 'none';
        item.style.display = itemCategory;
    });
}


  
  
