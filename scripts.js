function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var i = 0;
while (i < 10 ) 
{
  var intRand = randomNumber(6);
  document.write(intRand + ' ');
  i += 1;
}