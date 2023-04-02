// const {EmbedBuilder} = require('@discordjs/builders');
// const {GuildMemeber} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, client) {
        if (message.toString().toLowerCase().startsWith('ping')) {
            message.channel.send('Pong.');
        }
    }
}
