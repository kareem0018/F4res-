const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");



bot.user.setActivity("skillz 5ra");


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bcall')){
if(!message.author.id === '474573718967025665') return;
message.channel.sendMessage('#DONE')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login('NDk2MzAzNTYxNjIyMjkwNDQy.DpPevQ.Lq5US5CcgN6CJ3uY1DI-o6ntikM')
