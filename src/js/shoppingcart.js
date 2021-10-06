// ------------------------ SHOPPING CART (victor) --------------------------------------
let arrayRespons = [];

// Selection elements a pointer dans js
let cartBtns = document.querySelectorAll(".cartBtn"); // Select all buy buttons
let achatsContainer = document.querySelector("#achats-container");
let totalDiv = document.querySelector("#total-price");

// -- €$TOTAL$€ --
let total = 0;
totalDiv.innerHTML = `Your total: ${total}€`;

// -- CREATION FUNCTIONS --
// Creation FUNCTION [disparuFunction] for display the shopping-cart
export function disparuFunction() {
  achatsContainer.parentNode.classList.toggle("disparu");
}

// Creation FUNCTION [cartFunction]
export function cartFunction(dish) {

  // QUANTITY OF ITEM IN THE SHOPPING CART (part1)
  const fnTrouverPizza = (element) => element.name === dish.name;
  const elemePizza = arrayRespons.find(fnTrouverPizza)
  console.log(elemePizza);

  if (elemePizza !== undefined) {
    addFirstOfDishtoCart(dish, elemePizza);
  } else {
    moreThanOneInCart(dish);
  }
}

export function emptyOrBuyShoppingList(e) {
    disparuFunction();

    if (e.target.innerHTML == "Purchase" && achatsContainer.hasChildNodes()) {
      alert(
        "Commande enregistrée, vous allez être redirigé vers la page de votre banque pour effectuer le paiement.");
    } else if (e.target.innerHTML == "Empty cart" && achatsContainer.hasChildNodes()) {
      alert("Panier supprimé !");
    }
    refreshShoppingList();
};

function removeItemFromCart(itemInCart, dish) {
    itemInCart.remove();

    total = total - (dish.price * dish.quantity);
    totalDiv.innerHTML = `Your total: ${total}€`;

    dish.quantity = 1;

    arrayRespons.splice(arrayRespons.indexOf(dish), 1);
}

function refreshShoppingList() {
    let articleTest = document.querySelectorAll(".article-test"); // ? QUESTION POUR LE COACH

    for (let i = 0; i < articleTest.length; i++) {
      arrayRespons[i].quantity = 1;
      articleTest[i].remove();
    }

    total = 0;
    totalDiv.innerHTML = `Your total: ${total}€`;

    arrayRespons.splice(0);
}

function addFirstOfDishtoCart(dish, elemePizza) {
    // Modification TOTAL PRICE before modify quantity
    // total = total - (dish.price * arrayRespons[indexToModifyQuantity].quantity);

    // Modification QUANTITY
    let indexToModifyQuantity = arrayRespons.indexOf(elemePizza);
    let divQuantity = achatsContainer.children[indexToModifyQuantity];

    arrayRespons[indexToModifyQuantity].quantity++;
    divQuantity.children[0].innerHTML = arrayRespons[indexToModifyQuantity].quantity;

    // Modification TOTAL PRICE after modify quantity 
    // total = total + (dish.price * arrayRespons[indexToModifyQuantity].quantity);
    total += dish.price;
    totalDiv.innerHTML = `Your total: ${total}€`;
}

function moreThanOneInCart(dish) {
    // Copie de element clické dans arrayRespons
    arrayRespons.push(dish);

    // Creation article + Add class
    const newArticleCart = document.createElement("article");
    newArticleCart.classList.add("article-test");
    newArticleCart.classList.add("article-cart");

    // Creation 4 DIV pour flex: nombreitem/img/infos/removeBtn
    const newDivQuantity = document.createElement("div");
    newDivQuantity.innerHTML = dish.quantity;
    const newDivImg = document.createElement("div");
    const newDivInfos = document.createElement("div");
    const newDivRemoveBtn = document.createElement("div");

    // Creation image pour article + Add src
    const newImageCart = document.createElement("img");
    newImageCart.setAttribute("src", dish.image);
    newImageCart.classList.add("article-cart");

    // Creation titre pour article
    const newTitleCart = document.createElement("h6");
    newTitleCart.innerHTML = dish.name;
    newTitleCart.classList.add("article-cart");

    // Creation prix pour article + Add the item PRICE to the TOTAL
    const newPrixCart = document.createElement("h6");
    newPrixCart.innerHTML = "€" + dish.price;
    newPrixCart.classList.add("article-cart");
    total += dish.price;
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

      total = total - (dish.price * dish.quantity);
      totalDiv.innerHTML = `Your total: ${total}€`;

      dish.quantity = 1;

      arrayRespons.splice(arrayRespons.indexOf(dish), 1);
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