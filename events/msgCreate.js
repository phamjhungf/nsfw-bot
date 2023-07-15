const { PermissionsBitField, EmbedBuilder } = require('discord.js');
const client = require('../index');

module.exports={
    name:"msgcreate"
}

client.on('messageCreate', async (message) => {
    let prefix = '$';
    if (message.channel.type !== 0) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;

    let command = client.commands.get(cmd);

    if (!command) command = client.commands.get(client.aliases.get(cmd))

    if (command) {
        if(command.nsfwOnly) {
            if(message.channel.nsfw) return message.reply('NOPE')
        }



        try {
            command.run(client, message, args);
        } catch (err) {
            console.log(err);
        }
    }
})