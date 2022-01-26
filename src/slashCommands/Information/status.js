const { MessageEmbed, version, CommandInteraction, Client } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    description: "Show status of Carlo Music",
    run: async (client, interaction) => {

      await interaction.deferReply({
            ephemeral: false
        });

       const duration1 = moment.duration(interaction.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const about = interaction.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
        const embed = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .setDescription(`**Application Information**\n❯ **Creator**: <@906113950058422293>\n❯ **Guilds**: ${scount}\n❯ **Discord.js**: v${version}\n❯ **Uptime**: ${duration1}\n❯ **Speed**: ${os.cpus()[0].speed} MHz\n❯ **Memory**: ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mbps`)
        
      interaction.followUp({embeds: [embed]});
    }
}
