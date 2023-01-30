//** ================================= ================== === Car Shop === ============ POO ================== ============================================== */
//**TODO === === === ======  Variables */
const app = document.querySelector(`#app`);
const menu = document.querySelector(`#menu`);
const shoppingCartContainer = document.querySelector(
  `#shopping-cart-container`
);
const storeContainer = document.querySelector(`#store-container`);

//** === Data Base Products === Simulation Frontend (A) */
const dataBase = {
  // ==> Methods
  methods: {
    // >= Search
    find: (id) => {
      return dataBase.items.find((item) => item.id === id);
    },
    // >= Remove
    remove: (items) => {
      items.forEach((item) => {
        const product = dataBase.methods.find(item.id);
        product.qty = product.qty - item.qty; // ===> quantity == Cantidad (property qty)
      });
      //console.log(dataBase);
    },
  },
  // ==> Products
  items: [
    {
      id: 0,
      title: 'Funko Pop',
      price: 250,
      qty: 5,
    },
    {
      id: 1,
      title: 'Harry Potter DVD',
      price: 345,
      qty: 50,
    },
    {
      id: 2,
      title: 'Phillips Hue',
      price: 1300,
      qty: 80,
    },
    {
      id: 3,
      title: 'Ipad Pro',
      price: 800,
      qty: 20,
    },
  ],
};
//console.log(dataBase);
//** === Shopping Cart / Functions In Objects / POO (B) */
const shoppingCart = {
  items: [],
  // = Methods
  methods: {
    // === Add
    add: (id, qty) => {
      const carItem = shoppingCart.methods.get(id);
      if (carItem) {
        if (shoppingCart.methods.hasInventory(id, qty + carItem.qty)) {
          carItem.qty++;
        }
      } else {
        shoppingCart.items.push({ id, qty });
        //alert(`Sorry! Not more Inventory`);
      }
    },
    // === Remove
    remove: (id, qty) => {
      const cartItem = shoppingCart.methods.get(id); // = Validation Get
      if (cartItem.qty - qty > 0) {
        shoppingCart.items = shoppingCart.items.filter(
          (item) => item.id !== id
        );
      }
    },
    // === count
    count: () => {
      // == Length or Reduce(acumulate  and item) ===
      return shoppingCart.items.reduce((acc, item) => acc + item.qty, 0);
    },
    // === get
    get: (id) => {
      const index = shoppingCart.items.findIndex((item) => item.id === id);
      return index >= 0 ? shoppingCart.items[index] : null;
    },
    // === Get Total
    getTotal: () => {
      const total = shoppingCart.items.reduce((acc, item) => {
        const found = dataBase.methods.find(item.id);
        return (acc += found.price * item.qty);
      });
      return total;
    },
    /*  getTotal: () => {
      let total = 0;
      shoppingCart.items.forEach((item) => {
        const found = db.methods.find(item.id);
        total += found.price * item.qty;
      });
      return total;
    }, */
    // === Inventory Quantity
    hasInventory: (id, qty) => {
      return dataBase.items.find((item) => item.id === id).qty - qty >= 0; // == <= 0 / - 0 => Sorry Inventory ==
    },
    // === Shop All
    purchase: () => {
      dataBase.methods.remove(shoppingCart.items);
      shoppingCart.items = []; // => Clear Shopping Cart
    },
  },
};

//** === Render Store === (C) */
// >> data-id => Reference "Id" => WebComponent <<
const renderStore = () => {
  const html = dataBase.items.map((item) => {
    return `
        <div class="item">
           <div class="title">${item.title}</div>
           <div class="price">Price: ${numberToCurrency(item.price)}</div>
           <div class="qty">${item.qty} Units</div>
           <div class="actions"><button class="add" data-id=${
             item.id
           }>Add To the Shopping Cart</button></div>
        </div>
        `;
  });
  storeContainer.innerHTML = html.join('');
  // == Buttons
  document.querySelectorAll(`.item .actions .add`).forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
      e.preventDefault();
      const id = parseInt(btn.getAttribute(`data-id`)); // = Shopping / Transform a Number
      const item = dataBase.methods.find(id); // = Data Base
      // === Validation & Add
      if (item && item.qty - 1 > 0) {
        // => Add a Shopping Cart
        shoppingCart.methods.add(id, 1);
        console.log(shoppingCart);
        renderShoppingCart();
      } else {
        console.log('Not Exist more Product && Not more in Inventory');
      }
    });
  });
};
renderStore();
//** === === === Render Shopping Cart (D) */
//**? = Add Shopping Cart Product = */
function renderShoppingCart() {
  const html = shoppingCart.items.map((product) => {
    const dataProduct = dataBase.methods.find(product.id); // == Call or Return DataBase Item
    return `
     <div class="item">
           <div class="title">${dataProduct.title}</div>
           <div class="price">Price: ${numberToCurrency(
             dataProduct.price
           )}</div>
           <div class="qty">${product.qty} Units</div>
           <div class="subtotal">Subtotal: ${numberToCurrency(
             product.qty * dataProduct.price
           )}</div>
           <div class="actions">
              <button class="addOne" data-id="${dataProduct.id}">+</button>
              <button class="removeOne" data-id="${dataProduct.id}">-</button>
           </div>
        </div>
     `;
  });
  // === Buttons && Custom Elements Add HTML ===
  const closeButton = `
    <div class="cart-header" >
        <button class="bClose" id="bClose">Close</button>
    </div>
  `;
  // == Finished Shop
  const purchaseButton =
    shoppingCart.items.length > 0
      ? `<div class="cart-actions">
    <button id="bPurchase">Terminar compra</button>
  </div>`
      : '';

  const total = shoppingCart.methods.getTotal();

  const totalContainer = `<div class="total">Total: ${numberToCurrency(
    total
  )}</div>`;

  shoppingCartContainer.innerHTML =
    closeButton + html.join(``) + totalContainer + purchaseButton;

  // === Buttons Event Add & Remove
  document.querySelectorAll(`.addOne`).forEach((button) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      const id = parseInt(button.getAttribute(`data-id`));
      shoppingCart.methods.add(id, 1);
      renderShoppingCart();
    });
  });
  document.querySelectorAll(`.removeOne`).forEach((button) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      const id = parseInt(button.getAttribute(`data-id`));
      shoppingCart.methods.remove(id, 1);
      renderShoppingCart();
    });
  });
  shoppingCartContainer.classList.remove(`hide`);
  shoppingCartContainer.classList.add(`show`);
  document.querySelector(`#bClose`).addEventListener(`click`, (e) => {
    // === Add & Remove ===
    shoppingCartContainer.classList.remove(`hide`);
    shoppingCartContainer.classList.add(`show`);
    //shoppingCartContainer.classList.toggle(`hide`);
  });
  // => Depending bPurchaseButton Add or Not
  const bPurchase = document.querySelector(`#bPurchase`);
  if (bPurchase) {
    bPurchase.addEventListener(`click`, (e) => {
      shoppingCart.methods.purchase();
      renderStore();
      renderShoppingCart();
    });
  }
}

//** === Price In Dollars === (C.1) */
// ==> Intl (Format / API) => U.S Dollars
function numberToCurrency(number) {
  return new Intl.NumberFormat(`en-US`, {
    maximumSignificantDigits: 2, // => Number Digits
    style: 'currency',
    currency: 'USD',
  }).format(number);
}
