const dotenv = require(dotenv);

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env`});

module.exports = {
    token: "process.env.DISCORD_TOKEN",
    prefix: "process.env.PREFIX",
    ownerID: "process.env.OWNER_ID" // Mrlion (710549603216261141)
};
