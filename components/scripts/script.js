var array, names, ref,
  splice = [].splice;

array = [1, 2, 3, 4, 5];

names = ['Wade Spane', 'Ellie Mae', 'June Bug', 'Sonny Boy'].slice(0, 3);

splice.apply(names, [1, 2].concat(ref = ['bob', 'pete'])), ref;

console.log(names);
