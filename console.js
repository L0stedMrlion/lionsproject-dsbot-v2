const fs = require('fs');
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
const logFileName = `logs/${formattedDate}_${formattedTime}.log`;

function logToConsoleAndFile(message) {
    console.log(message);
    fs.appendFile(logFileName, message + "\n", (err) => {
        if (err) {
            console.error("Chyba při zápisu do logu:", err);
        }
    });
}

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

logToConsoleAndFile("Loading commands from 'commands' directory...");
loadFilesFromDirectory('./commands');

logToConsoleAndFile("Loading modules from 'modules' directory...");
loadFilesFromDirectory('./modules');

logToConsoleAndFile("Additional initialization...");

logToConsoleAndFile("Initialization completed.");
