const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {



    if (!message.member.permissions.has("KICK_MEMBERS")){
        const yetliyok = new EmbedBuilder()
        .setDescription(`Bu komutu kullanabilmek için öncelikle **Üyeler At** yetkiniz olmalı.`)
        .setColor('#007fff')
        
        
        return message.reply({embeds:[yetkiyok]})
    }
    
    let kullanici = message.mentions.members.first();
    let sebep = args.slice(1).join(' ');
    
    if(!kullanici){
        const kullanicihata = new EmbedBuilder()
        .setDescription(`${message.author} **Lütfen Sunucudan Atılacak Kullanıcı Belirt.**`)
        .setColor('#007fff')
        return message.reply({embeds:[kullanicihata]})
    }
    if(!sebep){
        const sebephata = new EmbedBuilder()
        .setDescription(`${message.author} **Lütfen bir sebep belirt.**`)
        .setColor('#007fff')
        return message.reply({embeds:[sebephata]})
    }
    
    if(kullanici && sebep){
        kullanici.kick()
    
        const kick =  new EmbedBuilder()
        .setDescription(`${kullanici} Adlı kullanıcı ${message.author} tarafından **${sebep}** sebebiyle sunucudan başarılı bir şekilde atıldı.`)
        .setAuthor(`${message.author.username} - Başarılı Kick`, message.author.avatarURL({dynamic: true}))
        .setColor('#007fff');
        message.reply({embeds:[kick]})
    }    


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kick"
};
