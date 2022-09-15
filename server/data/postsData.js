const database = require('../infra/database');

exports.getPosts = function () {
  return database.query('select * from blog.post');
};
exports.getPost = function (id, post) {
  return database.query('select * from blog.post where id = $1', [id]);
};
exports.deletePost = function (id) {
    return database.none('delete from blog.post where id = $1',[id]);
}

exports.savePost = function (post) {
  return database.none('insert into blog.post values (default, $1, $2, default)',[post.title,post.content]);
}
exports.updatePost = function (id,post) {
  return database.none('update blog.post set title = $1, content = $2 where id=$3',[post.title,post.content,id]);
}
