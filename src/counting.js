const Discord = require("discord.js");

// Funkce pro kontrolu, zda nové číslo sedí do řady
function kontrola(novy_cislo) {
    // Pokud je seznam prázdný, pak nové číslo vždy sedí do řady
    if (seznam.length === 0) {
        return true;
    }

    // Procházení seznamu
    for (const cislo of seznam) {
        // Pokud je nové číslo o 1 větší než předchozí číslo, pak sedí do řady
        if (cislo + 1 === novy_cislo) {
            return true;
        }
    }

    // Nové číslo nesedí do řady
    return false;
}

// Funkce pro smazání čísla ze seznamu
function smaz(cislo) {
    seznam.splice(seznam.indexOf(cislo), 1);
}

// Hlavní program
const seznam = [];

client.on("message", async (message) => {
    // Pokud zpráva pochází z určitého kanálu
    if (message.channel.id === "channel_id") {
        // Získání čísla ze zprávy
        const cislo = message.content;
        cislo = parseInt(cislo);

        // Kontrola, zda nové číslo sedí do řady
        if (!kontrola(cislo)) {
            // Pokud nové číslo nesedí do řady, pak se hráči odešle chybová zpráva
            await message.channel.send("Chyba! Číslo nesedí do řady.");
            // Číslo se ze seznamu smaže
            smaz(cislo);
            return;
        }

        // Číslo se přidá do seznamu
        seznam.push(cislo);

        // Seznam se odešle hráčům
        await message.channel.send("Seznam:", seznam);

        // Odešle se reakce
        await message.react("✅");
    }
});