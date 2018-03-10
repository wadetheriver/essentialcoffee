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

for key, value of dog when key isnt info
  console.log ("#{key}: #{value}")
