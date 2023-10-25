String.prototype.format = function () {
  var formatted = this;
  for (var arg in arguments) {
    formatted = formatted.replace('{' + arg + '}', arguments[arg]);
  }
  return formatted;
};
// console.log('rex1'.split('∬'));
// console.log('rex1∬rex2'.split('∬'));
// console.log(...'rex1∬rex2'.split('∬'));
// console.log('{0}{1}'.format(...'rex1∬rex2'.split('∬')));
// console.log('{0}{1}'.format('rex1'));
// console.log('{0}{0}'.format('rex1').format('rex2'));
// console.log('{0}{1}'.format('rex1').format('rex2', 'rex3'));
// console.log('기호{0}'.format('[{0}]'.format(1)));

console.log('123'.substring(0, 1));
