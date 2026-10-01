var NOME=["Origem","Eixo X","Eixo Y","Q1","Q2","Q3","Q4"];
var CERTO=["Q4","Q1","Origem","Eixo X"];
var HIST=[], VEZES=0, LIXO=[];
function pega(t){ return document.getElementById(t); }
function nada(a,b){ return a+b; }
function regiao(x,y){
  if (isNaN(x) || isNaN(y)) { return 8; }
  if (x == 0 && y == 0) { return 0; }
  if (y == 0) { return 1; }
  if (x == 0) { return 2; }
  if (x > 0 && y > 0) { return 3; }
  if (x < 0 && y > 0) { return 4; }
  if (x < 0 && y < 0) { return 5; }
  return 6;
}
function texto(x,y){
  var i = regiao(x,y);
  if (i == 8) { return "erro: digite numero"; }
  return "ponto ("+x+", "+y+") = "+NOME[i];
}
function manda(){
  var x = parseFloat(pega("x").value);
  var y = parseFloat(pega("y").value);
  var t = texto(x, y);
  pega("out").textContent = t;
  HIST.push(t);
  VEZES = VEZES + 1;
  console.log(HIST, VEZES, nada(1,2), LIXO);
}
pega("btn").addEventListener("click", manda);
