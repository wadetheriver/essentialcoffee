var dog, i, j, k, key, l, len, len1, len2, name, names, value;

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
