#splats

info = [
  'Ray Villalobos'
  'Beaner',
  'http://planetoftheweb.com'
  'http://authoredcontent.com'
  'http://iviewsource.com'
]


fillOut = (name, race, links...) ->
  $('#content').append "#{name}<br>"
  $('#content').append "#{race}<br>"
  for item in links
    $('#content').append "#{item}<br>"

fillOut(info...)
# fillOut("dog","cat", info...)


# Also use a splat (spread) to add array to anoter
parts = ['shoulders', 'knees']
lyrics = ['head', parts..., 'and', 'toes']
console.log lyrics
