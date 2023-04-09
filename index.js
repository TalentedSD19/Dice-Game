var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
var image1_src="images/dice"+randomNumber1+".png";
var image2_src="images/dice"+randomNumber2+".png";
var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");
image1.setAttribute("src",image1_src);
image2.setAttribute("src",image2_src);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}