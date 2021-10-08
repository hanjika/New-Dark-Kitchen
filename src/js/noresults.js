// --------------------- NO RESULTS/NO ARTICLES DISPLAYED -------------------

function removeMatchingMessages(message) {
  const paragraphs = document.querySelectorAll('p');

  for (const info of paragraphs) {
    if (info.innerHTML === message) {
      info.parentNode.removeChild(info);
    }
  }
}

export function displayNoResults() {
  const message = 'No results found';

  removeMatchingMessages(message);

  const articles = document.querySelectorAll('.food');
  let yes = 0;
  for (const article of articles) {
    if (article.style.display !== 'none') {
      yes++;
    }
  }
  if (yes === 0) {
    const p = document.createElement('p');
    p.classList.add('noResults');
    p.innerHTML = 'No results found';
    document.querySelector('.menuArticle').append(p);
  }
}
