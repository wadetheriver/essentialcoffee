fill = (item) ->
  $("#content").append "#{item} </br>"

  # # returns window
  # console.log this

  # returns the fill function
  console.log @fill

fill 'Ellie'

# immediately invokes closure
do fill2 = (item = 'Maggie') ->
  $("#content").append "#{item} </br>"
  console.log @fill2

fill2 'marlin'
