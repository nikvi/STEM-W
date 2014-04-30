/*

get forum
*/

exports.getForum = function(req, res) {
  res.render('forum', {
    title: 'Conversations'
  });
};
