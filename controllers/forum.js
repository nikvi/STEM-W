/*

get forum
*/

exports.getForum = function(req, res) {
 if (req.user) return res.redirect('/');
  res.render('forum', {
    title: 'Conversations'
  });
};
