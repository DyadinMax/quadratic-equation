module.exports = function solveEquation(equation) {

  var solution = [];

  var array = equation.split(' ');

  let a = array[0];
  let b = array[4];
  let c = array[8];

  if (array[3] == '-'){
    b = -b;
  }
  if (array[7] == '-'){
    c = -c;
  }

  let D = Math.pow(b,2) - 4*a*c;
  let x1 = Math.round((-b + Math.sqrt(D))/(2*a));
  let x2 = Math.round((-b - Math.sqrt(D))/(2*a));

  if(x1 < x2){
    solution.push(x1, x2);
  } else {
    solution.push(x2, x1);
  }

  return solution;
}
