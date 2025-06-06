const pool = require("./pool")


async function addMessage(author, message, date) {
    await pool.query("INSERT INTO messages ( name, message, date ) VALUES ($1, $2, $3)",
        [author, message, date]
    );
}

async function getMessage(id) {
    const message = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return message.rows[0];
}

async function getMessages() {
    const messages = await pool.query("SELECT * FROM messages")
    return messages.rows;
}


module.exports = {
    addMessage,
    getMessage,
    getMessages
}