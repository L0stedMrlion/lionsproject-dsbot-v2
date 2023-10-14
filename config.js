const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env` });

module.exports = {
    token: process.env.DISCORD_TOKEN,
    prefix: process.env.PREFIX,
    ownerID: process.env.OWNER_ID,
};

function loadFilesInDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Chyba při čtení adresáře:', err);
            return;
        }

        for (const file of files) {
            const filePath = path.join(directoryPath, file);

            if (file.endsWith('.js')) {
                try {
                    require(filePath); 
                    console.log(`Soubor ${file} byl úspěšně načten a spuštěn.`);
                } catch (e) {
                    console.error(`Chyba při načítání a spouštění souboru ${file}:`, e);
                }
            }
        }
    });
}

const commandsDirectoryPath = './commands';
loadFilesInDirectory(commandsDirectoryPath);

const modulesDirectoryPath = './modules';
loadFilesInDirectory(modulesDirectoryPath);

// System
require('./status.js');
require('./reload.js');
