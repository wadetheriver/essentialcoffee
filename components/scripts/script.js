//splats
var fillOut, info, lyrics, parts;

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

// fillOut("dog","cat", info...)

// Also use a splat (spread to add array to anoter)
parts = ['shoulders', 'knees'];

lyrics = ['head', ...parts, 'and', 'toes'];

console.log(lyrics);
