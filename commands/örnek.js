const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Test Komutu")
    .setDescription("**https://discord.gg/1456**")
    .setThumbnail("https://cdn.discordapp.com/attachments/1002610359166849116/1003000072763617400/1456_pp.png")
    .setColor("#007fff")
    .setTimestamp()
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "test"
};
