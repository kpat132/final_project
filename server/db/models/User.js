const bookshelf = require('./bookshelf');

class User extends bookshelf.Model{
  get tableName(){return 'users'}

}

module.exports = bookshelf.model('User',User);