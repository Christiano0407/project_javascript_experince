//** ================================= ================== === Car Shop === ============ POO ================== ============================================== */
//**TODO === === Variables */
const app = document.querySelector(`#app`);
const menu = document.querySelector(`#menu`);
const shoppingCartContainer = document.querySelector(
  `#shopping-cart-container`
);
const storeContainer = document.querySelector(`#store-container`);
//let shopping = [];

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
  ],
};
//console.log(dataBase);
//** === Shopping Cart (B) */
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
        alert(`Sorry! Not more Inventory`);
      }
    },
    // === Remove
    remove: (id, qty) => {},
    // === count
    count: () => {},
    // === get
    get: (id) => {
      const index = shoppingCart.findIndex((item) => item.id === id);
      return index >= 0 ? shoppingCart.items[index] : null;
    },
    // === Get Total
    getTotal: () => {},
    // === Inventory Quantity
    hasInventory: (id, qty) => {
      return dataBase.items.find((item) => item.id === id).qty - qty >= 0; // == <= 0 / - 0 => Sorry Inventory ==
    },
    // === Shop All
    purchase: () => {},
  },
};
