const client = require('../index');

module.exports = {
    name: "ready"
};

client.once('ready', async () => {
    console.log(` ${client.user.tag} is up and ready to go.`)
})