require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const Telegraf = require("telegraf");
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply(`
Hello! Its echo bot!!!
`);
});

bot.help((ctx) => {
    ctx.reply(`
Send any message and i will copy it
  `);
});

bot.on("message", (ctx) => {
    ctx.telegram.sendCopy(ctx.chat.id, ctx.message);
});
bot.launch()
    .then((res) => {
        console.log("Run");
    })
    .catch((err) => {
        comsole.log(err);
    });
