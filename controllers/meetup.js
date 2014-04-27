/*

get meet up
*/

exports.getMeetUp = function(req, res) {
 if (req.user) return res.redirect('/');
  res.render('meetUp', {
    title: 'Meet Ups'
  });
};
