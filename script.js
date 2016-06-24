var textOver = document.createElement('div');
var myTarget = document.querySelector('.firstitem');
var hoverToTextOver = document.createElement('p');
var newText = document.createTextNode("Restaurante");
hoverToTextOver.appendChild(newText);
textOver.appendChild(hoverToTextOver);
myTarget.appendChild(textOver);

document.querySelector('.firstitem').addEventListener("mouseover", function(){
  textOver.style.visibility = 'visible';
  textOver.style.display = 'table';
  textOver.style.position = 'absolute';
});
document.querySelector('.firstitem').addEventListener("mouseout", function(){
  textOver.style.visibility = 'hidden';
  textOver.style.display = 'table';
  textOver.style.position = 'absolute';
});

var textOver2 = document.createElement('div');
var myTarget2 = document.querySelector('.seconditem');
var hoverToTextOver2 = document.createElement('p');
var newText2 = document.createTextNode("Pet Store");
hoverToTextOver2.appendChild(newText2);
textOver2.appendChild(hoverToTextOver2);
myTarget2.appendChild(textOver2);

document.querySelector('.seconditem').addEventListener("mouseover", function(){
  textOver2.style.visibility = 'visible';
  textOver2.style.display = 'table';
  textOver2.style.position = 'absolute';
});
document.querySelector('.seconditem').addEventListener("mouseout", function(){
  textOver2.style.visibility = 'hidden';
  textOver2.style.display = 'table';
  textOver2.style.position = 'absolute';
});

var textOver3 = document.createElement('div');
var myTarget3 = document.querySelector('.thirditem');
var hoverToTextOver3 = document.createElement('p');
var newText3 = document.createTextNode("JavaScript Labyrinth");
hoverToTextOver3.appendChild(newText3);
textOver3.appendChild(hoverToTextOver3);
myTarget3.appendChild(textOver3);

document.querySelector('.thirditem').addEventListener("mouseover", function(){
  textOver3.style.visibility = 'visible';
  textOver3.style.display = 'table';
  textOver3.style.position = 'absolute';
});
document.querySelector('.thirditem').addEventListener("mouseout", function(){
  textOver3.style.visibility = 'hidden';
  textOver3.style.display = 'table';
  textOver3.style.position = 'absolute';
});
