// info = [
//   'Wade Spane',
//   'http://somewebsite.com',
//   'http://anotherwebsite.com',
//   'http://thirdsite.com'
// ]

// # splat
// fillout = (name, links...) ->
//   $('#content').append("#{name} </br>")
//   for item in links
//     $('#content').append("#{item} </br>")

// fillout(info...)
var fillOut, info;

info = ['Ray Villalobos', 'Beaner', 'http://planetoftheweb.com', 'http://authoredcontent.com', 'http://iviewsource.com'];

fillOut = function(name, race, ...links) {
  var i, item, len, results;
  $('#content').append(`${name}<br>`);
  $('#content').append(`${race}<br>`);
  results = [];
  for (i = 0, len = links.length; i < len; i++) {
    item = links[i];
    results.push($('#content').append(`${item}<br>`));
  }
  return results;
};

fillOut(...info);
