// Global Variable

var plus = Array.from(document.querySelectorAll(".plus"));
var minus = Array.from(document.querySelectorAll(".minus"));
var heart = Array.from(document.querySelectorAll(".heart"));
var quantity = Array.from(document.querySelectorAll(".quantity"));
var unitprice = Array.from(document.querySelectorAll(".unitprice"));
var rmv = Array.from(document.querySelectorAll(".remove"));
var total = Array.from(document.querySelector(".total"));)

// Total

const mycard = () => {
  var somme = 0;
  for (let i = 0; i < quantity.length; i++) {
    somme += Number(quantity[i].innerHTML) * Number(unitprice[i].innerHTML);
  }
  total.innerHTML = somme;
};

// Increment

Array.from(plus).map(el =>
  el.addEventListener("click", () => {
    el.nextElementSibling.innerHTML =
      Number(el.nextElementSibling.innerHTML) + 1;
    mycard();
  })
);

// Decriment

Array.from(minus).map(el =>
  el.addEventListener("click", () => {
    if (Number(el.previousElementSibling.innerHTML) > 0)
      el.previousElementSibling.innerHTML =
        Number(el.previousElementSibling.innerHTML) - 1;
    mycard();
  })
);

// Favorit

Array.from(heart).map(el =>
  el.addEventListener("click", () => {
    el.style.color === "black"
      ? (el.style.color = "red")
      : (el.style.color = "black");
  })
);

// Remove

Array.from(rmv).map((el, i) =>
  el.addEventListener("click", () => {
    el.parentElement.parentElement.remove();

    mycard();
  })
);
