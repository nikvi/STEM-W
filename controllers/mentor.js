exports.getMentors = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('mentor', {
    title: 'Find a mentor'
  });
};