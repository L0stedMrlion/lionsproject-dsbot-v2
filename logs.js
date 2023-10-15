const fs = require('fs');
const path = require('path');
const logDirectory = 'logs';

function deleteOldLogs() {
    const logs = fs.readdirSync(logDirectory);
    const today = new Date();

    logs.forEach((logFile) => {
        const logPath = path.join(logDirectory, logFile);
        const stats = fs.statSync(logPath);
        const daysAgo = Math.floor((today - stats.mtime) / (1000 * 60 * 60 * 24));

        if (daysAgo > 7) {
            fs.unlinkSync(logPath);
        }
    });

    console.log('Logs older than 7 days have been deleted.');
}

setInterval(deleteOldLogs, 24 * 60 * 60 * 1000);

deleteOldLogs();
