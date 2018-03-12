append = (item) ->
  $("#content").append "#{item}"

color = 'red'

switch color
  when 'pink' then append 'Ellie'
  when 'green' then append 'Juno'
  when 'red', 'orange' then append 'Mattie'
  else append 'Unknown Dog'
