const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Bot foi iniciado`);
});

client.on('messageReactionAdd', (reaction, user) => {
    if(user.bot) return;

    reaction.users.remove(user.id);

    if(reaction.emoji.name === '🚀') {
        client.channels.cache.get(channel_id).send(`!changeNickname/${user.id}/${user.username}/🚀`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    } else if(reaction.emoji.name === '❌') {
        client.channels.cache.get(channel_id).send(`!changeNickname/${user.id}/${user.username}/❌`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    } else if(reaction.emoji.name === '🍴') {
        client.channels.cache.get(channel_id).send(`!changeNickname/${user.id}/${user.username}/🍴`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    } else if(reaction.emoji.name === '⏸') {
        client.channels.cache.get(channel_id).send(`!changeNickname/${user.id}/${user.username}/⏸`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    }
});

client.on("guildCreate", () => {
    console.log(`Bot entrou no servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("guildDelete", () => {
    console.log(`Bot saiu do servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("message", message => {
    try{
        const args = message.content.slice('!').trim().split("/")
        const command = args.shift().toLowerCase();

        if(command == "!start_charlie") {
            message.channel.bulkDelete(100);
            startCharlie();
        }

        if (command === "!changenickname") {
            if (args[2] == '🍴' || args[2] == '⏸') {
                message.guild.members.cache.get(args[0]).voice.setChannel(come_later);
            } else if (args[2] == '❌') {
                message.guild.members.cache.get(args[0]).send('Não se esqueça de pausar suas tarefas no RunRun. Bom descanço.');
            }
            message.guild.members.cache.get(args[0]).setNickname(args[1] + args[2]);
        }
    } catch(e) {
        console.log(e);
    }
});

client.login("NzM4MDkzMDYzMDc0ODczMzY0.XyG4uw.XP8l5iwPRU_buVEPmsP8DMCoie0");

function startCharlie() {
    const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#ff9933')
                                    .setAuthor('BOT', client.guilds.resolve('744606405566267482').members.resolve('738093063074873364').user.avatarURL())
                                    .addField('Lista de comandos', 'Reaja com 🚀 quando for iniciar o trabalho\nReaja com ❌ quando for finalizar o trabalho\nReaja com 🍴 quando for comer algo\nReaja com ⏸ em outros casos\n', true)
                                    .setThumbnail(client.guilds.resolve('744606405566267482').members.resolve('738093063074873364').user.avatarURL())
                                    .setTimestamp()

    client.channels.cache.get(channel_id).send(exampleEmbed).then((message) => {
        message.react("🚀")
        message.react("❌")
        message.react("🍴")
        message.react("⏸")
    }).catch((e) => { console.log(e); });
}