const ENV = {
    TEST: 'test',
    PROD: 'prod',
    DEBUG: 'debug',
};

const configs = {
    [ENV.TEST]: {
        server: {
            port: 8080,
            host: '0.0.0.0',
        }
    },
    [ENV.DEBUG]: {
        server: {
            port: 8080,
            host: '0.0.0.0',
        }
    },
    [ENV.PROD]: {
        server: {
            port: 80,
            host: '0.0.0.0',
        }
    }
}

const env = process.env.NODE_ENV || 'test'
module.exports = configs[env] || configs[ENV.DEBUG];