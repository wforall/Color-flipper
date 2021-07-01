const colors=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

var color=document.querySelector('.color');
var btn=document.querySelector('.btn_Changecolor');

btn.addEventListener('click',()=>{

var hexcolor='#';
for (let index = 0; index < 6; index++) {
    hexcolor+=colors[getRandomNumber()]
    
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
}

});

function getRandomNumber() {
     return Math.floor(Math.random()*colors.length)
}