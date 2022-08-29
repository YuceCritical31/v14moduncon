const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {




    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Bu komutu kullanabilmek için öncelikle **Üyeler Engelle** yetkiniz olmalı.")


    let user = message.mentions.users.first();


    if(!user) return message.reply("Lütfen Sunucudan Banlanacak Kullanıcı Belirt.")


const üye = message.guild.members.cache.get(user.id)


üye.ban()


const ban = new EmbedBuilder()
.setColor("#007fff")
.setDescription(`**${user}, adlı kullanıcı başarılı bir şekilde sunucudan banlandı!**`)


message.channel.send({embeds:[ban]})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban"
};
