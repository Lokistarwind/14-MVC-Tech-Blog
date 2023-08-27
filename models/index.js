const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.hasMany(Comment, {

  foreignKey: 'blogpost_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Blogpost, Comment };
