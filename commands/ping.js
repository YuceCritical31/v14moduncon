const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Ping")
    .setDescription(`Botun Anlık Pingi : **${client.ws.ping}** MS`)
    .setColor("#007fff")
    .setTimestamp()
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};
