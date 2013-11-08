exports = module.exports;


exports.index = function(req, res) {
  var name = req.param('name', '');
  
  var context = {
    site_title: "Pokésearch"
  }

  var template = '../lib/index/views/index';
  res.render(template, context);

  // More elaborate res.render() format:
  //res.render(template, context, function(err, html) {
  //  console.dir(err);
  //  res.send(html);
  //});

  // Just responding with a string, without any template:
  // res.send('Hello World');
};