var pageHeader = document.querySelector('.page-header');
var pageHeaderWrap = document.querySelector('.page-header__wrap');
var mainMenu = document.querySelector('.main-menu');
var mainMenuToggle = document.querySelector('.main-menu__toggle');

pageHeaderWrap.classList.remove('page-header__wrap--transparent');
mainMenu.classList.remove('main-menu--opened');
pageHeader.classList.add('page-header--fixed');
mainMenu.classList.add('main-menu--closed');

mainMenuToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('main-menu--closed')) {
    pageHeaderWrap.classList.add('page-header__wrap--transparent');
    mainMenu.classList.remove('main-menu--closed');
    mainMenu.classList.add('main-menu--opened');
  } else {
    pageHeaderWrap.classList.remove('page-header__wrap--transparent');
    mainMenu.classList.remove('main-menu--opened');
    mainMenu.classList.add('main-menu--closed');
  }
});
