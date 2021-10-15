function darkThemeAesthetics(themeBtn, logo) {
  if (themeBtn.classList.contains('darkTheme')) {
    themeBtn.innerHTML = 'Go Light';
    logo.setAttribute('src', '../Images/LogoNoir-removebg-preview.png');
  } else {
    themeBtn.innerHTML = 'Go Dark';
    logo.setAttribute('src', '../Images/logo.png');
  }
  document.body.classList.toggle('darkTheme');
}

export function darkThemeActivateButtonsAndLinks(themeBtn, logo) {
  const allBtn = document.querySelectorAll('button');
  const allBtnLi = document.querySelectorAll('a');

  for (const btn of allBtn) {
    btn.classList.toggle('darkTheme');
  }

  for (const btnLi of allBtnLi) {
    btnLi.classList.toggle('darkTheme');
  }

  darkThemeAesthetics(themeBtn, logo);
}
