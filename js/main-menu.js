var mainMenu = document.querySelector('.main-menu');
var mainMenuToggle = document.querySelector('.main-menu__toggle');

mainMenu.classList.remove('main-menu--opened');
mainMenu.classList.add('main-menu--closed');

mainMenuToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('main-menu--closed')) {
    mainMenu.classList.remove('main-menu--closed');
    mainMenu.classList.add('main-menu--opened');
  } else {
    mainMenu.classList.remove('main-menu--opened');
    mainMenu.classList.add('main-menu--closed');
  }
});
