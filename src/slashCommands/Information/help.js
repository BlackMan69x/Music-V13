const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "help",
    description: "Replies with help on how to use this bot",
    owner: false,


    run: async (client, interaction, prefix) => {
        await interaction.deferReply({
          ephemeral: false
        });
  const embed = new MessageEmbed()
    .setTitle("**Carlo - Help Menu**")
    .setDescription(`Created By <@637299944939585576> if you need help join our [Community](https://discord.gg/gGzf9t3d6G)`)
    .addField("İnformation","`setprefix`, `invite`, `status`") 
    .addField("Music","`play`, `skip`, `stop`, `pause`, `resume`, `shuffle`, `seek`, `skipto`, `loop`, `remove`, `queue`, `filters`, `nowplaying`, `clearqueue`, `24/7`, `leave`") 
    .addField("Filter","`party`, `bass`, `radio`, `pop`, `trablebass`, `soft`, `custom`, `off`")
    .setColor("RANDOM")
   await interaction.followUp({embeds: [embed]})
  }
}
