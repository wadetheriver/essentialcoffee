// name = "wade"

// if name == 'wade'
// then name = 'wade spane'
// else name = 'Ellie Mae'

// if name == 'wade'
//   name = 'wade spane'
// else name = 'Ellie Mae'

// if name is 'wade'
//   name = 'wade spane'

// if name isnt 'wade'
//   name = 'unknown'
var dance, footprints, happy, someVar;

dance = function() {
  return alert('mambo');
};

happy = false;

if (happy !== true) {
  dance();
}

someVar = "Hello";

if (someVar != null) {
  $('#content').append(`${someVar}`);
}

// Check var undefined or null
// if var is not defined in script
if (typeof someOtherVar !== "undefined" && someOtherVar !== null) {
  console.log(someOtherVar);
}

footprints = typeof yeti !== "undefined" && yeti !== null ? yeti : "bear";
