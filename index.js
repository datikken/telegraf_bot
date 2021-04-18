const express = require('express');
const bot = require('bot');

const app = express()

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))
