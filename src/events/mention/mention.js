// TODO - Fix this to make it work

module.exports = (client) => {
  client.on('message', async (event) => {
    if (event.resource.type() === 'message') {
      if (event.message.includes('<@1018249171720998983>')) {
        console.log('Zpráva obsahuje cílený ID.');
      }
    }
  });
};