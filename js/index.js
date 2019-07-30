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

var p1 = document.createElement ("p");
var p2 = document.createElement ("p");

if (delta<0) {
  document.body.append ("Não existem valores");
} else if (delta>0) {
  var x1 = ((-b + Math.sqrt(delta)) / (2*a));
  p1.append ("Valor de X1 = " + x1);

  var x2 = ((-b - Math.sqrt(delta)) / (2*a));
  p2.append ("Valor de X2 = " + x2);

  document.body.appendChild (p1);//aqui manda escrever dentro do html
  document.body.appendChild (p2);//aqui manda escrever dentro do html
}
