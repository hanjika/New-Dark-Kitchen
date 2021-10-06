import MENU from "./menu"
import { displayCourseSection, displayFilteredDishes } from "./displaysections"
import { disparuFunction, cartFunction, emptyOrBuyShoppingList } from "./shoppingcart"
import { darkThemeActivateButtonsAndLinks } from "./darkmode"

// ------------------------ DARK/LIGHT THEME BTN (victor)-------------------------------
let logo = document.querySelector('#logo');

// Creation [themeBtn] Light/Dark Theme
const themeBtn = document.createElement("button");
themeBtn.classList.add("themeBtn");
themeBtn.innerHTML = "Go Dark";

// Add [addEventListener] + [function] flechee qui switch theme dark/light
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    darkThemeActivateButtonsAndLinks(themeBtn);
  });
};

// Deplacement [themeBtn] in <aside>
const shoppingcartBtn = document.getElementById("shopping-cart-btn");
const vraiAside = document.getElementById("vraiAside");
vraiAside.insertBefore(themeBtn, shoppingcartBtn);

// ------------------------ CREATING SECTIONS AND ARTICLES WITH DISHES -----------------------------

const courses = ["All", "Pizza", "Pasta", "Desserts"];

const courseList = document.createElement("ul");
courseList.classList.add("meals");

const menuArticles = document.createElement("section");
menuArticles.classList.add("menuArticle");

for (let course of courses) {
  const item = document.createElement("li");

  const itemBtn = document.createElement("a");
  itemBtn.classList.add(course);
  itemBtn.classList.add("inactive");
  itemBtn.setAttribute("href", "javascript:void(0);");
  if (itemBtn) {
    itemBtn.addEventListener("click", displayCourseSection);
  }
  
  const image = document.createElement("img");
  if (course === "All") {
    image.setAttribute("src", require("../Images/All.png"));
  } else if (course === "Pizza") {
    image.setAttribute("src", require("../Images/Pizza.png"));
  } else if (course === "Pasta") {
    image.setAttribute("src", require("../Images/Pasta.png"));
  } else if (course === "Desserts") {
    image.setAttribute("src", require("../Images/Desserts.png"));
  }

  const name = document.createTextNode(course);

  const courseSection = document.createElement("section");
  courseSection.classList.add(course + "Section");

  itemBtn.appendChild(image);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  courseList.appendChild(item);
  document.querySelector(".menuArticle").appendChild(courseSection);
}

for (let dish of MENU) {
  const dishArticle = document.createElement("article");
  dishArticle.classList.add("food");

  for (let feature of dish.categories) {
    if (feature === "Comfort food") {
      feature = "Comfort";
    }
    dishArticle.classList.add(feature);
  }

  const figure = document.createElement("figure");

  const image = document.createElement("img");
  image.setAttribute("src", dish.image);

  const caption = document.createElement("figcaption");
  caption.innerText = dish.name;

  const ingredientP = document.createElement("p");
  ingredientP.innerHTML = "Ingredients: ";
  for (let i = 0; i < dish.ingredients.length - 1; i++) {
    ingredientP.innerHTML += dish.ingredients[i] + ", ";
  }
  ingredientP.innerHTML += dish.ingredients[dish.ingredients.length - 1];


  const price = document.createElement("p");
  price.innerHTML = "€" + dish.price;


  let arrayRespons = [];
  let total = 0;

  const buy = document.createElement("button");
  buy.classList.add("cartBtn"); // VICTOR ADD THIS CLASS [cartBtn] FOR THE SHOPPING CART
  if (buy) {
    buy.addEventListener("click", () => {
      cartFunction(dish);
    });
  }
  buy.innerHTML = "Add to cart";

  figure.appendChild(image);
  figure.appendChild(caption);
  dishArticle.appendChild(figure);
  dishArticle.appendChild(ingredientP);
  dishArticle.appendChild(price);
  dishArticle.appendChild(buy);
  document.querySelector(".selectMenu").appendChild(courseList);

  const clonedDish = dishArticle.cloneNode(true);
  document.getElementsByClassName("AllSection")[0].appendChild(clonedDish);
  if (dish.type === "Pizza") {
    document.getElementsByClassName("PizzaSection")[0].appendChild(dishArticle);
  } else if (dish.type === "Pasta") {
    document.getElementsByClassName("PastaSection")[0].appendChild(dishArticle);
  } else if (dish.type === "Desserts") {
    document.getElementsByClassName("DessertsSection")[0].appendChild(dishArticle);
  }
}

//-------------------------------- CREATING EXTRA FILTER BUTTONS (VEGGIE, SPICY, COMFORT FOOD) --------------------------

const filters = ["Vegetarian", "Spicy", "Comfort Food"];

const selectorMenu = document.querySelector(".selectMenu");

const filterList = document.createElement("ul");
filterList.classList.add("filters");

for (let filter of filters) {
  if (filter === "Comfort Food") {
    filter = "Comfort";
  }

  const item = document.createElement("li");

  const itemBtn = document.createElement("a");
  itemBtn.classList.add(filter);
  itemBtn.classList.add("inactive");
  itemBtn.setAttribute("href", "javascript:void(0);");
  if (itemBtn) {
    itemBtn.addEventListener("click", displayFilteredDishes);
  }
  
  const image = document.createElement("img");
  if (filter === "Vegetarian") {
    image.setAttribute("src", require("../Images/Vegetarian.png"));
  } else if (filter === "Spicy") {
    image.setAttribute("src", require("../Images/Spicy.png"));
  } else if (filter === "Comfort") {
    image.setAttribute("src", require("../Images/Comfort.png"));
  }

  const name = document.createTextNode(filter);

  itemBtn.appendChild(image);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  filterList.appendChild(item);
}
selectorMenu.appendChild(filterList);

// ------------------------ SHOPPING CART (victor) --------------------------------------

let clearAll = document.querySelectorAll(".clearAll"); // Select all .clearAll buttons
let shoppingCartBtn = document.querySelector("#shopping-cart-btn");

// -- CREATION EVENTLISTENER --
// LOOP creation [eventListener] on each [clearAll] button  ===>>>  Function for clear shopping list + call disparuFunction + display an alert
for (let button of clearAll) {
  if (button) {
    button.addEventListener("click", (e) => {
      emptyOrBuyShoppingList(e);
    });
  }
}

// Creation [eventListener] on #shopping-cart-btn  ===>>>  Function for call disparuFunction
if (shoppingCartBtn) {
  shoppingCartBtn.addEventListener("click", () => {
    disparuFunction();
  });
};
