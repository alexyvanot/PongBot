const { Client, Collection, Partials, GatewayIntentBits } = require('discord.js');

const {Guilds, GuildMessages, GuildMembers, DirectMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Channel} = Partials;

const {loadEvent} = require('./Handlers/eventHandler.js');


const client = new Client({
    intents: [Guilds, GuildMessages, GuildMembers, DirectMessages],
    partials: [User, Message, GuildMember, ThreadMember, Channel],
});

const { token } = require('./config.json');
client.login(token).then(() => {
    loadEvent(client);
});