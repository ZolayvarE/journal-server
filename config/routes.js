var entryController = require('../controllers/entryController.js');
var userController = require('../controllers/userController.js');

module.exports = function(app, express) {
  app.post('/api/entries', entryController.createEntry);
  app.get('/api/entries', entryController.getEntries);
  app.post('/api/users', userController.createUser);
  app.get('/api/users', userController.findUser);

}