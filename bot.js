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

export default bot;
