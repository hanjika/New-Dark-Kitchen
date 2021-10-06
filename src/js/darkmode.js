export function darkThemeActivateButtonsAndLinks() {
    const allBtn = document.querySelectorAll("button");
    const allBtnLi = document.querySelectorAll("a");

    for (let btn of allBtn) {
        btn.classList.toggle("darkTheme");
    }

    for (let btnLi of allBtnLi) {
        btnLi.classList.toggle("darkTheme");
    }

    darkThemeAesthetics();
}

function darkThemeAesthetics() {
    if (themeBtn.classList.contains("darkTheme")) {
        themeBtn.innerHTML = "Go Dark";
        logo.setAttribute('src', require('../Images/logo.png'));
    } else {
        themeBtn.innerHTML = "Go Light";
        logo.setAttribute('src', require('../Images/LogoNoir-removebg-preview.png'));
    }
    
    document.body.classList.toggle("darkTheme");
}