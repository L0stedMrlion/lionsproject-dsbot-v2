const fs = require('fs');
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
const logFileName = `logs/log_${formattedDate}_${formattedTime}.log`;

fs.writeFile(logFileName, '', (err) => {
    if (err) {
        console.error(`Failed to create a startup log ${err}`);
    }
});

const logStream = fs.createWriteStream(logFileName, { flags: 'a' });
console.log = function(message) {
    logStream.write(message + '\n');
    process.stdout.write(message + '\n');
};

// Console log
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log(" Lion's Project™ - Discord bot ", process.env.DSBOTVERSION)
console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
setTimeout(() => {
    console.log(" Lion's Project™ - Loading...");
}, 3000);
setTimeout(() => {
    console.log(" Lion's Project™ - Loading modules...");
}, 6000);
setTimeout(() => {
    console.log(" Lion's Project™ - Loading commands...");
}, 9000);
client.on('ready', () => {
    console.log(`Lion's Project™ - Bot is successfully enabled!`);
});
