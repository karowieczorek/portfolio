const compactCards = [...document.querySelectorAll('.section__list__item')];
compactCards.forEach(compactCard => {
  compactCard.style.cursor = 'pointer';
  let down, up, link = compactCard.querySelector('h4 a');
  compactCard.onmousedown = () => down = +new Date();
  compactCard.onmouseup = () => {
    up = +new Date();
    if ((up - down) < 150) {
      link.click();
    }
  }
});