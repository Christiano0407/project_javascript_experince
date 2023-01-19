//** === Search Project && Web Component ===  */
const userTemplateCard = document.querySelector(`[data-user-template]`);
const userContainerCard = document.querySelector(`[data-user-cards-container]`);
const userSearchCard = document.querySelector(`[data-search]`);
let users = [];

//*! === Key writer search */
userSearchCard.addEventListener(`input`, (e) => {
  const value = e.target.value.toLowerCase();
  //console.log(users);
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle(`hide`, !isVisible);
  });
});
//*! ==> API */
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userTemplateCard.content.cloneNode(true).children[0];
      const header = card.querySelector(`[data-header]`);
      const body = card.querySelector(`[data-body]`);
      header.textContent = user.name;
      body.textContent = user.email;
      userContainerCard.append(card);
      //console.log(user);
      return { name: user.name, email: user.email, element: card };
    });
  });
