const UserController = require('./controllers/UserController');

module.exports = [
    {
        endpoit: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoit: '/products',
        method: 'GET',
        handler: UserController.listUsers,
    },
];