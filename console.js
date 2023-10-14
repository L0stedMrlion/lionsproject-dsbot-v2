// load.js
const fs = require('fs');

console.log("==================================");
console.log("   Discord Bot Initialization   ");
console.log("==================================");

console.log("Loading files and modules...");

function loadFilesFromDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach((file) => {
            const filePath = `${directoryPath}/${file}`;
            try {
                require(filePath); // Načte a spustí soubor
                console.log(`Loaded and executed file: ${file}`);
            } catch (e) {
                console.error(`Error loading and executing file ${file}: ${e}`);
            }
        });

        console.log(`Files loaded from directory: ${directoryPath}`);
    });
}

// Load files from the 'commands' directory
console.log("Loading commands from 'commands' directory...");
loadFilesFromDirectory('./commands');

// Load files from the 'modules' directory
console.log("Loading modules from 'modules' directory...");
loadFilesFromDirectory('./modules');

console.log("Additional initialization...");

console.log("Initialization completed.");
