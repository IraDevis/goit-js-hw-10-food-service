import menuElements from '../menu.json';
import menuMarkup from '../templates/template.hbs';

const menuElement = document.querySelector('.js-menu')

menuElement.innerHTML = menuMarkup(menuElements)