const log = require('debug')('slackbot:server:controller');

class BotController {
    handleNewMessage(req, res) {
        log(`handling new message: ${JSON.stringify(req.body)}`);
        res.sendStatus(200);
        res.end('thanks');
    }

    handleHealthCheck(req, res) {
        res.sendStatus(200);
        res.end('OK');
    }
}

module.exports = new BotController();