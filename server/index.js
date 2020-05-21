const express = require('express');
const config = require('../config');
const log = require('debug')('slackbot:server:index');
const controller = require('./controller');
const bodyParser = require('body-parser');

const app = express();

const loggerMiddleware = (req, res, next) => {
    log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} {${req.ip}}`);
    next();
};

// middlewares
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.post('/', controller.handleNewMessage);
app.get('/health', controller.handleHealthCheck);

const { port, host } = config.server;
app.listen(port, host, () => {
    log(`listening on: ${host}:${port}`);
});