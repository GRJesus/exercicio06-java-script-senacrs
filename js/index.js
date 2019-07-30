//valores de entrada
//a=1
//b=12
//c=-13
//x1=1
//x2=-13
//delta=196

var a = parseInt(prompt("Digite o primeiro valor"));
var b = parseInt(prompt("Digite o segundo valor"));
var c = parseInt(prompt("Digite o terceiro valor"));
var delta = b * b - 4 * a * c;

if (delta<0) {
  document.body.append ("Não existem valores");
} else if (delta>0) {
  document.body.append ("x1 = " + ((-b + Math.sqrt(delta)) / (2*a)));
  document.body.append ("x2 = " + ((-b - Math.sqrt(delta)) / (2*a)));
}
