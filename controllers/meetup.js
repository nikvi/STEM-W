/*

get meet up
*/

exports.getMeetUp = function(req, res) {
  res.render('meetUp', {
    title: 'Meet Ups'
  });
};
