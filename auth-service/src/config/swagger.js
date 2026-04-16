const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Auth Service API',
            version: '1.0.0',
            description: 'Authentication Service with JWT & Refresh Tokens',
        },
        servers: [
            {
                url: 'http://localhost:5001',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // where API docs will be written
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;