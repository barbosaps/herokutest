const Discord = require('discord.js');
const client = new.Discord.Client();

client.on('ready', () => {
  console.log('I am Ready!');
});

client.on('message', message => {
  if (message.content == 'hello'
      message.reply('hi');
  }
  
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
