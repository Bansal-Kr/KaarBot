//importing libraries
const Discord = require('discord.js');
const client = new Discord.Client();
var ga = Math.random();


//event listener when a user connects to the server 
client.on('ready',()=>{console.log('logged in as ${client.user.tag}!');});

//event listener when a user sends a message in the chat
client.on('message',msg=>{
//we check the message content for ping
if(msg.content=='ping'){
msg.reply('pong');
}
  //second funtion
  if(msg.content=='gae'){
  ga=Math.random();
  ga=ga%10;
  switch(ga){
    case 1: msg.reply('me gae');
  break;
    default: msg.reply('u gae');}}
});

client.login(process.env.Bot_Token);
