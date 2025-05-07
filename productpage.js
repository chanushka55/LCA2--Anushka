const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  productCards.forEach(card => {
    const name = card.getAttribute('data-name');
    if (name.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
