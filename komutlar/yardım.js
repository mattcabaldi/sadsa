const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const umutbey = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(`murat`, client.user.avatarURL) 
      .addField('** k!balıktut  **', ' Balık Tutarsınız')
      .addField('** k!ban  **', 'Ban Atarsınız')  
      .addField('** k!düello  **', 'Düello Atarsınız')
      .addField('** k!efkarım  **', 'Efkar Oranınızı Ölçer') 
      .addField('** k!fakemesaj  **', 'Fake Bot Mesajı Gönderir ') 
      .addField('** k!hapishane  **', 'Hapishane efekti ')
      .addField('** k!hesapla  **', 'Belirtilen işlemi yapar.')
      .addField('** k!kartopu  **', 'kartopu Atarsanız ')
      .addField('** k!pixel  **', 'pixel efekti') 
      .addField('** k!rip  **', 'rip efekti') 
      .addField('** k!servericon  **', 'Serverin iconunu gösterir') 
      .addField('** k!stresçarkı  **', 'Sizin için bir stres çarkı çevirir.') 
      .addField('** k!bayrak  **', 'tr efekti') 
      .addField('** k!wasted efekti  **', 'wasted efekti') 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'yardım',
      description: 'yardım',
};