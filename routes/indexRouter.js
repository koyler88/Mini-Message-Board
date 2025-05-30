const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function onClick() {
  res.render("message");
}

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages, onClick: onClick });
});
indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const author = req.body.author;
  messages.push({ text: messageText, user: author, added: new Date() });
  res.redirect("/");
});
indexRouter.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message_detail", { message });
});

module.exports = indexRouter;
