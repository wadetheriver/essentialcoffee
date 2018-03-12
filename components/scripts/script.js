var fill, fill2;

fill = function(item) {
  $("#content").append(`${item} </br>`);
  // # returns window
  // console.log this
  // returns the fill function
  return console.log(this.fill);
};

fill('Ellie');

// immediately invokes closure
(fill2 = function(item) {
  $("#content").append(`${item} </br>`);
  return console.log(this.fill2);
})('Maggie');

fill2('marlin');
