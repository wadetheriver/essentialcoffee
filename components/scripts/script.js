var dog, i, j, k, key, l, len, len1, len2, name, names, plus, plusv2, plusv3, value;

names = ["Barot Bellingham", "Constance Smith", "Hassum Harrod", "Hillary Goldwynn", "Xhou Ta"];

for (j = 0, len = names.length; j < len; j++) {
  name = names[j];
  console.log(name);
}

// get index and name from array
for (i = k = 0, len1 = names.length; k < len1; i = ++k) {
  name = names[i];
  console.log(`${i} ${name}`);
}

for (i = l = 0, len2 = names.length; l < len2; i = ++l) {
  name = names[i];
  if (name !== "Xhou Ta" || "Hillary Goldwynn") {
    console.log(`${i} ${name}`);
  }
}

// Navigate an object
dog = {
  name: "Ellie",
  collar: "Pink",
  breed: "Redbone",
  info: function() {
    return console.log(`${this.name} ${this.collar} ${this.breed}`);
  }
};

for (key in dog) {
  value = dog[key];
  if (key !== "info") {
    console.log(`${key}: ${value}`);
  }
}

//arguments array and iterating forward and back
plus = function() {
  var sum;
  console.log("plus v2");
  sum = 0;
  for (var i = arguments.length-1; i>=0; i--) {
    sum += arguments[i]
    };
  return sum;
};

console.log(plus("bird", 0, 1, 2, 3, 65));

//  iterate forward
plusv2 = function() {
  var argument, len3, m, sum;
  console.log("plus v2");
  sum = 0;
  for (m = 0, len3 = arguments.length; m < len3; m += 1) {
    argument = arguments[m];
    sum += argument;
  }
  return sum;
};

console.log(plusv2(0, 1, 2, 3, 65, "bird"));

// iterate reverse as in original js
plusv3 = function() {
  var argument, m, sum;
  console.log("plus v3");
  sum = 0;
  for (m = arguments.length - 1; m >= 0; m += -1) {
    argument = arguments[m];
    sum += argument;
  }
  return sum;
};

console.log(plusv3(0, 1, 2, 3, 65, "bird"));
