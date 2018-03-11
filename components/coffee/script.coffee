# info = [
#   'Wade Spane',
#   'http://somewebsite.com',
#   'http://anotherwebsite.com',
#   'http://thirdsite.com'
# ]
#
# # splat
# fillout = (name, links...) ->
#   $('#content').append("#{name} </br>")
#   for item in links
#     $('#content').append("#{item} </br>")
#
# fillout(info...)

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

fillOut info...
