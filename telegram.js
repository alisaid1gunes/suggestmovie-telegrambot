const telegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new telegramBot(token, {polling: true});

bot.on('message', msg => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'merhaba');
    console.log(JSON.stringify(msg));
})