import menu from '../menu.json';
import menuMarkup from '../templates/template.hbs';

const menuItem = document.querySelector('.js-menu');
const addMarkup = menuMarkup(menu);

menuItem.insertAdjacentHTML('beforeend', addMarkup);

const refs = {
  body: document.querySelector('body'),
  themeSwitcher: document.querySelector('#theme-switch-toggle')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme'

refs.themeSwitcher.addEventListener('change', switchTheme)

function switchTheme(e) {
  if (e.target.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK)
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT)
  }
}

function changeTheme(oldThm, newThm) {
  refs.body.classList.remove(oldThm)
  refs.body.classList.add(newThm)
  localStorage.setItem(STORAGE_KEY, newThm)
}

const savedTheme = localStorage.getItem(STORAGE_KEY)

refs.themeSwitcher.checked = savedTheme === Theme.DARK

if (savedTheme) {
  refs.body.classList.add(savedTheme)
} else {
  refs.body.classList.add(Theme.LIGHT)
}