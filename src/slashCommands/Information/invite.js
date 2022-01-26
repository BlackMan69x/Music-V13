const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Get my invite link to join your servers!",

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

         const mainPage = new MessageEmbed()
             .setColor(client.embedColor)
            .setDescription(`click [this link](https://discord.com/api/oauth2/authorize?client_id=933000331531530251&permissions=8&scope=bot%20applications.commands)`)
           await interaction.followUp({embeds: [mainPage]})
    }
		}
