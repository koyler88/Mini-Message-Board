const db = require("../db/queries.js")

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  res.render("index", { messages: await db.getMessages()});
});
indexRouter.post("/new", async (req, res) => {
  const messageText = req.body.messageText;
  const author = req.body.author;
  await db.addMessage(author, messageText, new Date())
  res.redirect("/");
});
indexRouter.get("/message/:id", async (req, res) => {
  const message = await db.getMessage(Number(req.params.id) + 1)
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message_detail", { message });
});

module.exports = indexRouter;
