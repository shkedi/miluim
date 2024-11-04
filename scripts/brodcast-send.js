const {Client, LocalAuth} = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false
    }
});
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

const plogaBGroupId = '120363200382020923@g.us'
const msg = "שלום, תוכל בבקשה לשלוח לי את המידה של החולצה שלך (באזרחי), תודה מראש."

client.on('ready', async () => {
    console.log('Client is ready!');
    const chat = await client.getChatById(plogaBGroupId);
    const participants = chat.groupMetadata.participants;
    participants.map(({id}) => id)
        .map(({_serialized}) => _serialized)
        .forEach(val => {
            console.log(`sending msg to ${val}`)
            client.sendMessage(val, msg)
                .catch(err => console.error(`error for ${val}`, err))
        })

})

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

console.log('Starting the app');
client.initialize();