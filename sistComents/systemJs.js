//**TODO === === === ======================== System Comments ================================== === === ===  */
//** ==== Variables ==== */
//**? === Comments */
let comments = [];
const app = document.querySelector(`#app`);
const commentsContainer = document.querySelector(`#comments-container`);
//**? === Create DOM  */
const inputContainer = document.createElement(`div`);
const input = document.createElement(`input`);
//** === */
input.classList.add(`input`);
input.addEventListener(`keydown`, (e) => {
  handleEnter(e, null); // >= Call Other Function / Recursion (Recursividad) <=
});
//** === */
commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

//** === new & Add Comment === (A) */
const handleEnter = (e, current) => {
  // === Validation ===
  if (e.key === `Enter` && e.target.value !== ``) {
    const newComment = {
      text: e.target.value,
      likes: 0,
      response: [],
    };

    if (current === null) {
      comments.unshift(newComment); // ==> Firs List
    } else {
      current.response.unshift(newComment);
    }
    // == Clear Interphase ===
    e.target.value = ``;
    commentsContainer.innerHTML = ``;
    commentsContainer.appendChild(inputContainer);
    //console.log(comments);
    // === Render Comments
    renderComments(comments, commentsContainer);
  }
};

//** === Render Comments && Create Response Comment === (B) */
const renderComments = (arr, parent) => {
  arr.forEach((element) => {
    // == Add Comment
    const commentContainer = document.createElement(`div`);
    commentContainer.classList.add(`comment-container`);
    // === Response comment
    const responseContainer = document.createElement(`div`);
    responseContainer.classList.add(`response-container`);
    // === Create => Other Option: Custom Element ===
    const replyButton = document.createElement(`button`);
    replyButton.classList.add(`btn-reply`);
    const likeButton = document.createElement(`button`);
    likeButton.classList.add(`btn-like`);
    const actionContainer = document.createElement(`div`);
    actionContainer.classList.add(`btnAction-response`);
    // === TextContent Response
    const textContainer = document.createElement(`div`);
    textContainer.textContent = element.text;
    // ===>
    replyButton.textContent = `Reply`;
    likeButton.textContent = `
      ${element.likes > 0 ? `${element.likes} likes` : ``} likes
    `;
    // === Events Btn
    replyButton.addEventListener(`click`, (e) => {
      // > Clone Input <
      const newInput = inputContainer.cloneNode(true);
      newInput.value = ``; // = Clean
      newInput.focus(); // > Focus in reply
      newInput.addEventListener(`keydown`, (e) => {
        handleEnter(e, element); // element == current => ultimate comment
      });
      commentContainer.insertBefore(newInput, responseContainer);
    });
    likeButton.addEventListener(`click`, (e) => {});

    // === append
    commentContainer.appendChild(textContainer);
    commentContainer.appendChild(actionContainer);
    actionContainer.appendChild(replyButton);
    actionContainer.appendChild(likeButton);
    commentContainer.appendChild(responseContainer);
    // === Validation Recursion Response
    if (element.response.length > 0) {
      renderComments(element.response, responseContainer);
    }
    // === Add parent
    parent.appendChild(commentContainer);
  });
};
