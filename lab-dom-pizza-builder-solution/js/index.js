// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  // solution is just like in the function renderPepperoni() ->

  //check out what the comment on line 46 is telling us 👆🏾

  // find out what is `<section class="mushroom">` by logging it using querySelectorAll()

  // select all the elements with the class="mushroom"

  // if their state is true, give them style property with visibility = 'visible'
  //otherwise 'hidden' (inspekt the page to see the syle changing)

  // this and everthing in this lab is determined only by the state object
  // we don't we toggle here because if we toggle, we base the result on what was the state in dom
  //but in the case here, the only source of "state" for us is the state object

  document.querySelectorAll('.mushroom').forEach(function(oneMushroom) {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(eachGreenPepper) {
    if (state.greenPeppers) {
      eachGreenPepper.style.visibility = 'visible';
    } else {
      eachGreenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  //check out what the comment on line 77 is telling us 👆🏾

  //find out what is `<section class="sauce">` by logging it using querySelectorAll()

  // if the state is true, select the element and add the class 'sauce-white' to it
  // otherwise remove this class
  // (why add this class? -> check the style.css)
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

// function renderButtons() {
//   //Iteration 3: add/remove the class "active" of each `<button class="btn">`

//   // the long solution using if statements:

//   if (state.pepperoni) {
//     document.querySelector('.btn-pepperoni').classList.add('active');
//   } else {
//     document.querySelector('.btn-pepperoni').classList.remove('active');
//   }

//   if (state.mushrooms) {
//     document.querySelector('.btn-mushrooms').classList.add('active');
//   } else {
//     document.querySelector('.btn-mushrooms').classList.remove('active');
//   }

//   if (state.greenPeppers) {
//     document.querySelector('.btn-green-peppers').classList.add('active');
//   } else {
//     document.querySelector('.btn-green-peppers').classList.remove('active');
//   }

//   if (state.glutenFreeCrust) {
//     document.querySelector('.btn-crust').classList.add('active');
//   } else {
//     document.querySelector('.btn-crust').classList.remove('active');
//   }

//   if (state.whiteSauce) {
//     document.querySelector('.btn-sauce').classList.add('active');
//   } else {
//     document.querySelector('.btn-sauce').classList.remove('active');
//   }

//   // alternative solution/ shorter solution:

//   // identify what part of this long code do we keep on repeating?👇🏾

//   // if (state of ingredient is true) {
//   //   document.querySelector(class of the btn of this specific ingredient ).classList.add('active')
//   // } else {
//   //   document.querySelector('class of the btn of this specific ingredient').classList.remove('active')
//   // }

//   // in case of pepperoni and mushrooms we could've iterated over the keys of state object like so:

//   // for (let ingredient in state) {
//   //   if (state[ingredient]) {
//   //     document.querySelector('.btn-' + ingredient).classList.add('active')
//   //   } else {
//   //     document.querySelector('.btn-' + ingredient).classList.remove('active')
//   //   }
//   // }

//   // BUT we have the problem when it comes to .btn-green-peppers for example ( because of different naming in the state object)
// }

// that is why in this case we create this object👇🏾
//name the keys exactly like in the states object and the values are the classes
const ingredientClasses = {
  pepperoni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'
};

function renderButtons() {
  // then we ietarte over the states object
  for (let ingredient in state) {
    // now we need to access the button using querySelector
    const button = document.querySelector(ingredientClasses[ingredient]);
    // check state and add/ remove class
    if (state[ingredient]) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //check the documentation at top of code for references: basePrice, ingredients

  // to understand this solution, let's check the console.log ingredientsList down here 👇🏾
  // what iteration 4 wants us to do, is to loop over the list of ingredients and check their state (s. state object)
  // then if the state of the ingredient is true (the keys in the state object)
  // then we need to add the ingredient (from the object of ingredients on line 5) to the price list
  // (render them in <li> tags)
  // AND keep track of the total price to render it at the end of the list too

  let totalPrice = basePrice;
  let ingredientsList = '';
  for (let ingredient in state) {
    if (state[ingredient]) {
      ingredientsList += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      totalPrice += ingredients[ingredient].price;
    }

console.log('ingredientsList:', ingredientsList);

  }
  // identify where we want to render this list, select the element and add text/ html to it
  document.querySelector('.panel.price strong').innerText = `$${totalPrice}`;
  document.querySelector('.panel.price ul').innerHTML = ingredientsList;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

//check out what the comment on line 180 is telling us 👆🏾

// we can either use onclick() OR addEventListener() 👈🏾 just be consistant with what you use in all functions

// this button click / event listener just changes the state of the ingredient in the state object
// but the click doesn't automatically update the page, we need to call renderEverything() again,
// then renderEverything() checks the states of every ingredient and renders everything on the screen

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
