const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "vote",
  description: i18n.__('vote.description'),
  execute(message, args) {
    var permissions = 70282305;

    let invite1 = new MessageEmbed()
      .setTitle(`**Here is the Invite Link **`)
      .setDescription(
        `**Then what are you waiting for? Vote me today!** \n\n [Vote Link](https://top.gg/bot/906095162244091904t)`
      )
      .setURL(
        `https://top.gg/bot/906095162244091904`
      )
      .setColor("RANDOM");
    return message.channel.send(invite1);
  }
};
