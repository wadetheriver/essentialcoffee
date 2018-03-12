var append, color;

append = function(item) {
  return $("#content").append(`${item}`);
};

color = 'red';

switch (color) {
  case 'pink':
    append('Ellie');
    break;
  case 'green':
    append('Juno');
    break;
  case 'red':
  case 'orange':
    append('Mattie');
    break;
  default:
    append('Unknown Dog');
}
