var randomNumber1=Math.random();
var randomNumber2=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomdice1="Dice-"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice1);
var randomdice2="Dice-"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 win";
}
else if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Match Draw";
}
else 
{
  document.querySelector("h1").innerHTML="Player 2 win";
}