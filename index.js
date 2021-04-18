const express = require('express');
const bot = require('bot');

const app = express()

app.get('/',function(req,res) {
    res.sendFile('index.html');
});

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))
