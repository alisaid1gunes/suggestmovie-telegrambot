const telegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const port = process.env.PORT || '8000';
const hostname = process.env.YOUR_HOST || '0.0.0.0';
const express = require('express');
const app = express();

const token = process.env.TELEGRAM_TOKEN;

const bot = new telegramBot(token, { polling: true });

const films = [
  'The Shawshank Redemption (1994)',
  'The Godfather (1972)',
  'The Godfather: Part II (1974)',
  'The Dark Knight (2008)',
  '12 Angry Men (1957)',
  `Schindler's List (1993)`,
  'The Lord of the Rings: The Return of the King (2003)',
  'Pulp Fiction (1994)',
  'The Good, the Bad and the Ugly (1966)',
  'The Lord of the Rings: The Fellowship of the Ring (2001)',
  ' Fight Club (1999)',
  'Forrest Gump (1994)',
  'Inception (2010)',
  'The Lord of the Rings: The Two Towers (2002)',
  'Star Wars: Episode V - The Empire Strikes Back (1980)',
  'The Matrix (1999)',
  'Goodfellas (1990)',
  `One Flew Over the Cuckoo's Nest (1975)`,
  'Se7en (1995)',
];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.trim().toLowerCase();
  switch (message) {
    case 'öner':
      const random = Math.floor(Math.random() * 20);
      bot.sendMessage(chatId, films[random]);
      break;
    case 'seni kim yaptı':
      bot.sendMessage(
        chatId,
        'Beni Ali Said Güneş yaptı. Linekdin: https://www.linkedin.com/in/ali-said-güneş-990834186/'
      );
      break;
    case 'kodlar':
      bot.sendMessage(
        chatId,
        'Tabi ki reis senden mi esirgicem işte Github: https://github.com/alisaid1gunes/suggestmovie-telegrambot'
      );
      break;
  }

  console.log(JSON.stringify(msg));
});


  

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})


app.listen(port, hostname,() => {
  console.log('Server çalışıyor' );
});
