const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Bu komutu kullanabilmek için öncelikle **Rolleri Yönet** yetkiniz olmalı.")


    let user = message.mentions.users.first();
    let rol = message.mentions.roles.first();

    if(!user) return message.reply("Lütfen Rolün Verileceği Kullanıcıyı Belirt.")
    
    if(!rol) return message.reply("Lütfen Verilecek Rolü Belirt.")
    
    message.guild.members.cache.get(user.id).roles.add(rol)
    const embed = new EmbedBuilder()
    .setColor("#007fff")
    .setDescription(`${user}, adlı kullanıcıya ${rol} adlı rol başarılı bir şekilde verildi.`)

    message.reply({embeds:[embed]})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "rol-ver"
};
