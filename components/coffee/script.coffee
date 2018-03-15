names = [
  "Barot Bellingham",
  "Constance Smith",
  "Hassum Harrod",
  "Hillary Goldwynn",
  "Xhou Ta"
]

for name in names
  console.log name

# get index and name from array
for name, i in names
  console.log "#{i} #{name}"


for name, i in names when name isnt "Xhou Ta" or "Hillary Goldwynn"
  console.log "#{i} #{name}"


# Navigate an object

dog = {
  name: "Ellie"
  collar: "Pink"
  breed: "Redbone"
  info: ->
    console.log("#{this.name} #{this.collar} #{this.breed}")
}

for key, value of dog when key isnt "info"
  console.log ("#{key}: #{value}")

#arguments array and iterating forward and back
plus = () ->
  console.log "plus v2"
  sum = 0
  `for (var i = arguments.length-1; i>=0; i--) {
    sum += arguments[i]
    }`
  return sum

console.log plus("bird",0,1,2,3,65)

#  iterate forward
plusv2 = () ->
  console.log "plus v2"
  sum=0
  for argument in arguments by 1
    sum += argument
  return sum

console.log plusv2(0,1,2,3,65,"bird")

# iterate reverse as in original js
plusv3 = () ->
  console.log "plus v3"
  sum=0
  for argument in arguments by -1
    sum += argument
  return sum

console.log plusv3(0,1,2,3,65,"bird")
