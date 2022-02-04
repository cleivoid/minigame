const { Client, Message, MessageEmbed, Invite } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../../config/config.json')

module.exports = {
    name: 'sketchhead',
    aliases: ['skh' ,'sketch'],
    categories : 'minigames',
    description: 'Play Letter Tile in Discord Voice Channel',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const channel = message.member.voice.channel

        if (!channel) return message.channel.send(
            new MessageEmbed()
                .setDescription("You must join a voice channel first.")
                .setColor("#ff0000")
        )

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "902271654783242291",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send(
                new MessageEmbed()
                    .setDescription("Error.")
                    .setColor("#ff0000")
            )
            message.channel.send(`**Click on this link to open Sketch Heads** \nhttps://discord.com/invite/${invite.code}`)
        })
    }
}
