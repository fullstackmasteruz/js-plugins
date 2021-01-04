let offsetTop = 16;
let changerHeight = 0;
function _message(text, type) {
  const body = document.body;
  const message = document.createElement("div");
  message.innerText = text;
  message.classList.add("message", `message--${type}`);

  body.insertAdjacentElement("beforeend", message);

  message.style.top = `${offsetTop}px`;
  offsetTop += message.clientHeight + 16;

  setTimeout(() => {
    message.classList.add("close");
  }, 2500);

  setTimeout(() => {
    const insertedMessage = document.querySelectorAll(".message");
    changerHeight = message.offsetTop;
    message.remove();

    for (let i = 1; i < insertedMessage.length; i++) {
      let offset = insertedMessage[i].offsetTop;
      insertedMessage[i].style.top = `${changerHeight}px`;
      changerHeight = offset;
    }
    if (insertedMessage.length === 1) {
      offsetTop = 16;
    }
  }, 3000);
}

this.$message = _message;

const prmryButton = document.querySelector("#primaryButton");
const scsButton = document.querySelector("#successButton");
const dngrButton = document.querySelector("#dangerButton");

prmryButton.addEventListener("click", () => {
  this.$message("Nima gap", "primary");
});

scsButton.addEventListener("click", () => {
  this.$message("Nima gap", "success");
});

dngrButton.addEventListener("click", () => {
  this.$message("Nima gap", "danger");
});
