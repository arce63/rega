const Discord = require("discord.js");
const mapping = {
       "0": "<a:say_0:874411487014318080>",
        "1": "<a:say_1:874411530874130464>",
        "2": "<a:say_2:874411573035286568>",
        "3": "<a:say_33:874411678605905960>",
        "4": "<a:say_4:874411727515688960>",
        "5": "<a:say_5:874411772700917821>",
        "6": "<a:say_6:874411971284447242>",
        "7": "<a:say_7:874412247957504001>",
        "8": "<a:say_8:874412292798828594>",
        "9": "<a:say_9:874412330014896128>",
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {

  
  let toplam = message.guild.memberCount;
  let sunucu = 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let online =
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let tag = message.guild.members.cache.filter(m => m.user.username.includes("✫")).size;
  let tagdakiler = 
      `${tag}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let ses =
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let boost = message.guild.premiumSubscriptionCount
  let boostcuk = `${boost}`.split("").map(a => mapping[a] || '0')
  .join("")
  const say = new Discord.MessageEmbed()
  .setDescription(`\`˃\` Sunucuda toplam **${sunucu}** üye bulunmakta
  \`˃\` Sunucuda **${online}** aktif üye bulunmakta
  \`˃\` Sunucuda toplam tagımızı alan **${tagdakiler}**
  \`˃\` Sunucuda **${boostcuk}** adet boost bulunmakta
  \`˃\` Sunucuda sesli sohbetlerde toplam **${ses}** üye bulunmakta`).setFooter("Arcenio 💖 Aiakos");
  message.channel.send(say)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};//say.#1687 