const fs = require('fs');

// Nastavení logovacího souboru
const logFile = "logs/startuplog.log";

console.log("==================================");
console.log("   Discord Bot Initialization   ");
console.log("==================================");

// Funkce pro logování zpráv do souboru
function logToConsoleAndFile(message) {
    // Výpis zprávy do konzole
    console.log(message);

    // Zápis zprávy do logovacího souboru
    fs.appendFile(logFile, message + "\n", (err) => {
        if (err) {
            console.error("Chyba při zápisu do logu:", err);
        }
    });
}

console.log("Loading files and modules...");
logToConsoleAndFile("Loading files and modules...");

function loadFilesFromDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            const errorMessage = `Error reading directory: ${err}`;
            console.error(errorMessage);
            logToConsoleAndFile(errorMessage);
            return;
        }

        files.forEach((file) => {
            const filePath = `${directoryPath}/${file}`;
            try {
                require(filePath);
                const successMessage = `Loaded and executed file: ${file}`;
                console.log(successMessage);
                logToConsoleAndFile(successMessage);
            } catch (e) {
                const errorMessage = `Error loading and executing file ${file}: ${e}`;
                console.error(errorMessage);
                logToConsoleAndFile(errorMessage);
            }
        });

        const filesLoadedMessage = `Files loaded from directory: ${directoryPath}`;
        console.log(filesLoadedMessage);
        logToConsoleAndFile(filesLoadedMessage);
    });
}

console.log("Loading commands from 'commands' directory...");
logToConsoleAndFile("Loading commands from 'commands' directory...");
loadFilesFromDirectory('./commands');

console.log("Loading modules from 'modules' directory...");
logToConsoleAndFile("Loading modules from 'modules' directory...");
loadFilesFromDirectory('./modules');

console.log("Additional initialization...");
logToConsoleAndFile("Additional initialization...");

console.log("Initialization completed.");
logToConsoleAndFile("Initialization completed.");
