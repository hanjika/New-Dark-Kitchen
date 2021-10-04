// ------------------------ DARK/LIGHT THEME BTN (victor)-------------------------------
let logo = document.querySelector('#logo');

// Creation [themeBtn] Light/Dark Theme
const themeBtn = document.createElement("button");

// Add CLASS to the [themeBtn]
themeBtn.classList.add("themeBtn");
themeBtn.classList.add("darkTheme");

// Add Text in the [themeBtn]
themeBtn.innerHTML = "Go Dark";

// Add [addEventListener] + [function] flechee qui switch theme dark/light
themeBtn.addEventListener("click", () => {
  const allBtn = document.querySelectorAll("button");
  for (let btn of allBtn) {
    btn.classList.toggle("darkTheme");
  }
  const allBtnLi = document.querySelectorAll("a");
  for (let btnLi of allBtnLi) {
    btnLi.classList.toggle("darkTheme");
  }

  // condition pour changer text "go dark" -> "go light" + LOGO
  if (!themeBtn.classList.contains("darkTheme")) {
    themeBtn.innerHTML = "Go Light";
    logo.setAttribute('src', './Images/LogoNoir-removebg-preview.png');
  } else if (themeBtn.classList.contains("darkTheme")) {
    themeBtn.innerHTML = "Go Dark";
    logo.setAttribute('src', './Images/logo.png');
  }

  document.body.classList.toggle("darkTheme");
});

// Deplacement [themeBtn] in <aside>
const shoppingcartBtn = document.getElementById("shopping-cart-btn");
const vraiAside = document.getElementById("vraiAside");
vraiAside.insertBefore(themeBtn, shoppingcartBtn);

// ------------------------ FUNCTIONS --------------------------------------------

//--------------------- NO RESULTS/NO ARTICLES DISPLAYED -------------------

function removeMatchingMessages(message) {
  const paragraphs = document.querySelectorAll("p");

  for (let info of paragraphs) {
    if (info.innerHTML === message){
      info.parentNode.removeChild(info);
    }
  }
}

function displayNoResults() {
  const message = "No results found";
  
  removeMatchingMessages(message);

  const articles = document.querySelectorAll(".food");
  let yes = 0;
  for (let article of articles) {
    if (article.style.display !== "none") {
      yes++;
    }
  }
  if (yes === 0) {
    const p = document.createElement("p");
    p.classList.add("noResults");
    p.innerHTML = "No results found";
    document.querySelector(".menuArticle").append(p);
  }
}

//------------------------- GET SIBLINGS -----------------------------

function prevSiblings(target) {
  var siblings = [],
   n = target;
  while ((n = n.previousElementSibling)) siblings.push(n);
  return siblings;
}

function nextSiblings(target) {
  var siblings = [],
    n = target;
  while ((n = n.nextElementSibling)) siblings.push(n);
  return siblings;
}

function getSiblings(target) {
  var prev = prevSiblings(target) || [],
    next = nextSiblings(target) || [];
  return prev.concat(next);
}

//------------- ACTIVATE AND DEACTIVATE FILTER BUTTONS ------------------------

function activate(e) {
  let type = e.target.classList[0];
  const selected = document.getElementsByClassName(type + "Section")[0];

  if (e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    selected.classList.add("active");
    e.target.style.background = "hsl(229, 100%, 76%)";
    e.target.style.color = "white";
  } else if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    selected.classList.remove("active");
    e.target.style.background = "inherit";
    e.target.style.color = "inherit";
  }

  let allNotSelected = getSiblings(selected);
  for (let notSelected of allNotSelected) {
    if (notSelected.classList.contains("active")) {
      notSelected.classList.remove("active");
    }
  }

  let allUnselectedParents = getSiblings(e.target.parentNode);
  for (let unselectedParent of allUnselectedParents) {
    if (unselectedParent.firstChild.classList.contains("active")) {
      unselectedParent.firstChild.classList.remove("active");
      unselectedParent.firstChild.classList.add("inactive");
      unselectedParent.firstChild.style.background = "inherit";
      unselectedParent.firstChild.style.color = "inherit";
    }
  }
}

function removeTypeFromArray(arr, type) {
  let arrWithoutType = arr.slice();
  let i = 0;

  while (i < arrWithoutType.length) {
    if (arrWithoutType[i] === type) {
      arrWithoutType.splice(i, 1);
    }
    i++;
  }
  return arrWithoutType;
}

function activateAdditionalFilters(e) {
  let type = e.target.classList[0];
  const selected = document.getElementsByClassName(type);

  if (e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    e.target.style.background = "hsl(229, 100%, 76%)";
    e.target.style.color = "white";
    for (let select of selected) {
      if (select.classList.contains("food")) {
        select.classList.add("active");
      }
    }
  } else if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    e.target.style.background = "inherit";
    e.target.style.color = "inherit";
    for (let select of selected) {
      if (select.classList.contains("food")) {
        select.classList.remove("active");
      }
    }
  }

  let arr = ["Vegetarian", "Spicy", "Comfort"];
  let arrWithoutSelectedType = removeTypeFromArray(arr, type);

  for (let unselectedType of arrWithoutSelectedType) {
    articles = document.querySelectorAll(".food");
    for (let article of articles) {
      if (
        article.classList.contains(unselectedType) &&
        article.classList.contains("active")
      ) {
        article.classList.remove("active");
      }
    }
  }

  let allUnselected = getSiblings(e.target.parentNode);
  for (let unselectedFilter of allUnselected) {
    if (unselectedFilter.firstChild.classList.contains("active")) {
      unselectedFilter.firstChild.classList.remove("active");
      unselectedFilter.firstChild.classList.add("inactive");
      unselectedFilter.firstChild.style.background = "inherit";
      unselectedFilter.firstChild.style.color = "inherit";
    }
  }
}

//------------- DISPLAY WITH MEAL SELECTION (ALL, PIZZA, PASTA, DESSERTS) -------------------------------

function displaySection(e) {
  activate(e);

  let type = e.target.classList[0];
  const articles = document.querySelectorAll(".food");
  const filters = document.querySelectorAll("li a");
  if (e.target.classList.contains("active")) {
    for (article of articles) {
      let parent = article.parentNode;
      if (parent.classList.contains(type + "Section")) {
        if (
          filters[4].classList.contains("inactive") &&
          filters[5].classList.contains("inactive") &&
          filters[6].classList.contains("inactive")
        ) {
          article.style.display = "flex";
        } else if (article.classList.contains("active")) {
          article.style.display = "flex";
        } else {
          article.style.display = "none";
        }
      } else {
        article.style.display = "none";
      }
    }
  } else {
    for (article of articles) {
      let parent = article.parentNode;
      if (parent.classList.contains(type + "Section")) {
        article.style.display = "none";
      }
    }
  }

  displayNoResults();
}

//------- DISPLAY WITH FILTERS (VEGGIE, SPICY, COMFORT FOOD) -----------

function displayFiltered(e) {
  activateAdditionalFilters(e);
  let filter = e.target.classList[0];
  const articles = document.querySelectorAll(".food");
  if (e.target.classList[1] === "active") {
    for (article of articles) {
      let parent = article.parentNode;
      if (
        parent.classList.contains("active") &&
        article.classList.contains(filter)
      ) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    }
  } else {
    const filters = document.querySelectorAll("li a");
    if (
      filters[4].classList.contains("inactive") &&
      filters[5].classList.contains("inactive") &&
      filters[6].classList.contains("inactive")
    ) {
      for (article of articles) {
        let parent = article.parentNode;
        if (parent.classList.contains("active")) {
          article.style.display = "flex";
        }
      }
    }
  }

  displayNoResults();
}

// ------------------------ CREATING SECTIONS AND ARTICLES WITH DISHES -----------------------------

const courses = ["All", "Pizza", "Pasta", "Desserts"];

const courseList = document.createElement("ul");
courseList.classList.add("meals");
const menuSelect = document.querySelector(".selectMenu");
menuSelect.appendChild(courseList);

const menuArticles = document.createElement("section");
menuArticles.classList.add("menuArticle");

for (let elem of courses) {
  const item = document.createElement("li");
  const itemBtn = document.createElement("a");
  const image = document.createElement("img");
  itemBtn.setAttribute("href", "javascript:void()");
  itemBtn.classList.add(elem);
  itemBtn.classList.add("inactive");
  itemBtn.addEventListener("click", displaySection);
  itemBtn.setAttribute("href", "javascript:void(0);");
  const name = document.createTextNode(elem);
  image.setAttribute("src", "./Images/" + elem + ".png");
  itemBtn.appendChild(image);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  courseList.appendChild(item);

  const course = document.createElement("section");
  course.classList.add(elem + "Section");
  document.querySelector(".menuArticle").appendChild(course);
}

for (let elem of MENU) {
  const dish = document.createElement("article");
  dish.classList.add("food");

  for (let feature of elem.categories) {
    if (feature === "Comfort food") {
      feature = "Comfort";
    }
    dish.classList.add(feature);
  }

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.setAttribute("src", elem.image);
  const caption = document.createElement("figcaption");
  const name = document.createTextNode(elem.name);
  figure.appendChild(image);
  caption.appendChild(name);
  figure.appendChild(caption);
  dish.appendChild(figure);

  const info = document.createElement("p");
  info.innerHTML = "Ingredients: ";
  for (let i = 0; i < elem.ingredients.length - 1; i++) {
    info.innerHTML += elem.ingredients[i] + ", ";
  }
  info.innerHTML += elem.ingredients[elem.ingredients.length - 1];
  dish.appendChild(info);

  const price = document.createElement("p");
  price.innerHTML = "€" + elem.price;
  dish.appendChild(price);

  const buy = document.createElement("button");
  buy.classList.add("cartBtn"); // VICTOR ADD THIS CLASS [cartBtn] FOR THE SHOPPING CART
  buy.addEventListener("click", () => {
    cartFunction(elem);
  });
  buy.innerHTML = "Add to cart";
  dish.appendChild(buy);

  const cloned = dish.cloneNode(true);
  document.getElementsByClassName("AllSection")[0].appendChild(cloned);
  if (elem.type === "Pizza") {
    document.getElementsByClassName("PizzaSection")[0].appendChild(dish);
  } else if (elem.type === "Pasta") {
    document.getElementsByClassName("PastaSection")[0].appendChild(dish);
  } else if (elem.type === "Desserts") {
    document.getElementsByClassName("DessertsSection")[0].appendChild(dish);
  }
}

//-------------------------------- EXTRA FILTER BUTTONS (VEGGIE, SPICY, COMFORT FOOD) --------------------------

const filter = ["Vegetarian", "Spicy", "Comfort Food"];

const filterList = document.createElement("ul");
filterList.classList.add("filters");
const selectorMenu = document.querySelector(".selectMenu");
selectorMenu.appendChild(filterList);
for (elem of filter) {
  const item = document.createElement("li");
  const itemBtn = document.createElement("a");
  const image = document.createElement("img");
  const name = document.createTextNode(elem);
  if (elem === "Comfort Food") {
    elem = "Comfort";
  }
  image.setAttribute("src", "./Images/" + elem + ".png");
  itemBtn.classList.add(elem);
  itemBtn.classList.add("inactive");
  itemBtn.appendChild(image);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  filterList.appendChild(item);
  itemBtn.setAttribute("href", "javascript:void(0);");
  itemBtn.addEventListener("click", displayFiltered);
}

// ------------------------ SHOPPING CART (victor) --------------------------------------
let arrayRespons = [];

// Selection elements a pointer dans js
let cartBtns = document.querySelectorAll(".cartBtn"); // Select all buy buttons
let achatsContainer = document.querySelector("#achats-container");
let clearAll = document.querySelectorAll(".clearAll"); // Select all .clearAll buttons
let shoppingCartBtn = document.querySelector("#shopping-cart-btn");
let totalDiv = document.querySelector("#total-price");

// -- €$TOTAL$€ --
let total = 0;
totalDiv.innerHTML = `Your total: ${total}€`;

// -- CREATION FUNCTIONS --
// Creation FUNCTION [disparuFunction] for display the shopping-cart
function disparuFunction() {
  achatsContainer.parentNode.classList.toggle("disparu");
}

// Creation FUNCTION [cartFunction]
function cartFunction(leMenu) {
  
  // QUANTITY OF ITEM IN THE SHOPPING CART (part1)
  const fnTrouverPizza = (element) => element.name === leMenu.name;
  const elemePizza = arrayRespons.find(fnTrouverPizza)
  
  if(elemePizza !== undefined){
    
    // Modification TOTAL PRICE before modify quantity
    // total = total - (leMenu.price * arrayRespons[indexToModifyQuantity].quantity);
    
    // Modification QUANTITY
    let indexToModifyQuantity = arrayRespons.indexOf(elemePizza);
    let divQuantity = achatsContainer.children[indexToModifyQuantity];
    
    arrayRespons[indexToModifyQuantity].quantity++;
    divQuantity.children[0].innerHTML = arrayRespons[indexToModifyQuantity].quantity;

    // Modification TOTAL PRICE after modify quantity 
    // total = total + (leMenu.price * arrayRespons[indexToModifyQuantity].quantity);
    total += leMenu.price;
    totalDiv.innerHTML = `Your total: ${total}€`;

  } else {
    // Copie de element clické dans arrayRespons
    arrayRespons.push(leMenu);
    
    // Creation article + Add class
    const newArticleCart = document.createElement("article");
    newArticleCart.classList.add("article-test");
    newArticleCart.classList.add("article-cart");
    
    // Creation 4 DIV pour flex: nombreitem/img/infos/removeBtn
    const newDivQuantity = document.createElement("div");
      newDivQuantity.innerHTML = leMenu.quantity;
    const newDivImg = document.createElement("div");
    const newDivInfos = document.createElement("div");
    const newDivRemoveBtn = document.createElement("div");

    // Creation image pour article + Add src
    const newImageCart = document.createElement("img");
    newImageCart.setAttribute("src", leMenu.image);
    newImageCart.classList.add("article-cart");

    // Creation titre pour article
    const newTitleCart = document.createElement("h6");
    newTitleCart.innerHTML = leMenu.name;
    newTitleCart.classList.add("article-cart");

    // Creation prix pour article + Add the item PRICE to the TOTAL
    const newPrixCart = document.createElement("h6");
    newPrixCart.innerHTML = "€" + leMenu.price;
    newPrixCart.classList.add("article-cart");
    total += leMenu.price;
    totalDiv.innerHTML = `Your total: ${total}€`;

    // Creation removeItem btn
    const removeItemBtn = document.createElement("button");
    removeItemBtn.innerText = "Remove";
    removeItemBtn.classList.add("article-cart");
    if (document.body.classList.contains('darkTheme')) {
      removeItemBtn.classList.add('darkTheme')
    }
    removeItemBtn.addEventListener("click", () => {

      newArticleCart.remove();

      total = total - (leMenu.price * leMenu.quantity);
      totalDiv.innerHTML = `Your total: ${total}€`;

      leMenu.quantity = 1;
      
      arrayRespons.splice(arrayRespons.indexOf(leMenu), 1);
    });

    // Deplacement img + titre + prix + removeBtn dans la DIV correspondante
    newDivImg.appendChild(newImageCart);
    newDivInfos.appendChild(newTitleCart);
    newDivInfos.appendChild(newPrixCart);
    newDivRemoveBtn.appendChild(removeItemBtn);

    // Deplacement des 4 DIV dans [newArticleCart]
    newArticleCart.appendChild(newDivQuantity);
    newArticleCart.appendChild(newDivImg);
    newArticleCart.appendChild(newDivInfos);
    newArticleCart.appendChild(newDivRemoveBtn);

    // Deplacement de [newArticleCart] dans <div.achats-container>
    achatsContainer.appendChild(newArticleCart);
}
}

// -- CREATION EVENTLISTENER --
// LOOP creation [eventListener] on each [clearAll] button  ===>>>  Function for clear shopping list + call disparuFunction + display an alert
for (let boutton of clearAll) {
  boutton.addEventListener("click", (i) => {

    disparuFunction();

    if (i.target.innerHTML == "acheter" && achatsContainer.hasChildNodes()) {
      alert(
        "Commande enregistrée, vous allez être redirigé vers la page de votre banque pour effectuer le paiement.");
    } else if (
      i.target.innerHTML == "clear cart" && achatsContainer.hasChildNodes()) {
      alert("Panier supprimé !");
    }

    let articleTest = document.querySelectorAll(".article-test"); // ? QUESTION POUR LE COACH
    for (let i = 0; i < articleTest.length; i++) {
      arrayRespons[i].quantity = 1;
      articleTest[i].remove();
    }

    total = 0;
    totalDiv.innerHTML = `Your total: ${total}€`;
    
    arrayRespons.splice(0);

  });
}
// Creation [eventListener] on #shopping-cart-btn  ===>>>  Function for call disparuFunction
shoppingCartBtn.addEventListener("click", () => { disparuFunction(); });
