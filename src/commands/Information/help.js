const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
      const embed = new MessageEmbed()

       .setTitle("**Carlo - Help Menu**")
       .setDescription(`Created By <@637299944939585576> if you need help join our [Community](https://discord.gg/gGzf9t3d6G)`)
    .addField("İnformation","`setprefix`, `invite`, `status`") 
    .addField("Music","`play`, `skip`, `stop`, `pause`, `resume`, `shuffle`, `seek`, `skipto`, `loop`, `remove`, `queue`, `filters`, `nowplaying`, `clearqueue`, `24/7`, `leave`") 
    .addField("Filter","`party`, `bass`, `radio`, `pop`, `trablebass`, `soft`, `custom`, `off`")
    .setColor("RANDOM")

    message.channel.send({ embeds: [embed] }); 
  }
}
