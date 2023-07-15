const fs = require('fs');

module.exports = (client) => {
    fs.readdirSync('./events').forEach(dir => {
        const commands = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../events/${file}`);
            if(pull.name) {
                client.events.set(pull.name, pull);
                console.log(`Loaded a file : ${pull.name}`)
            }
            else return console.log('Error!')
        }
    })
}