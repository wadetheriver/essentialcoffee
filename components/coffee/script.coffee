myList = ['Wade', 3, {dog1:"Ellie"}]

myObject = {
  myList: myList
  invincible: "true"
  name: "Wade"
  Heroes: [
        {
          name: "Thor"
          title: "God of Thunder"
        }
        {
          name: "Loki"
          title: "God of Mischief"
        }
  ]
}

do addStuff = ->
  addALittle = "whoa Thor God of Thunder"
  a=true
  $('#content').append(addALittle)

console.log myObject
console.log JSON.stringify(myObject)
console.log myObject.myList[2].dog1
console.log myObject.Heroes[0].name + " is the " +
  myObject.Heroes[0].title
