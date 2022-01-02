const { Client, Message, MessageEmbed } = require('discord.js');
const config = require("../../config/config.json");

module.exports = {
  name: 'ping',
  aliases: ['api'],
  categories : 'info',
  description: 'Get Bot Ping..',
  useage: 'ping',
  /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  run: async (client, message, args) => {
    message.channel.send(
      new MessageEmbed()
        .setColor("BLACK")
        .setFooter("Coded By Clei")
        .setTitle(`${'🎈'} Pinging....`)
    ).then(msg => {
      msg.edit(
        new MessageEmbed()
          .setColor("BLACK")
          .setFooter("Coded By Clei")
          .setDescription(`🎈 Ping : ${client.ws.ping}ms`)
      )
    })
  }
}