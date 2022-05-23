/*STRINGLERIN YAZILIS FORMASI*/ 
/*
DOUBLE QUOTES(""),SINGLE QUOTES(''),BACTICK(``)
*/  

// DOUBLE QUOTE
// let fristName="My name is\"Elxan"
// let fristName1='My name is\'Elxan'
// console.log(fristName)
// console.log(fristName1)

// SINGLE QUOTE
// let fristName2='I\'m Elxan'
// console.log(fristName2)

// BACTICK 
// "https://source.unsplash.com/random"
let fristName3='Elxan'
let number=window.prompt("saklin nomesin daxil edin","1")
number=parseInt(number)

let link=`https://source.unsplash.com/random/${number+3}`
image1.src=link


// TASK
/* 10 SEKIL getirmek onu arreye daxil edib isdediyimiz seklin nomresin daxil etdikde hemen seklin gelmesi input olaraq yaz!*/


// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = './img/images1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = './img/images2.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = './img/images3.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = './img/images1.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = './img/images3.jpg';

// function nextImage(){
//     var img = document.getElementById("mainImage");
//     for(var i = 0; i < imgArray.length;i++){
//         if(imgArray[i].src == img.src){
//             if(i === imgArray.length){
//                 document.getElementById("mainImage").src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById("mainImage").src = imgArray[i+1].src;
//             break;
//         }
//     }
// }
// function previousImage(){
//     var img = document.getElementById("mainImage");
//     for(var i = imgArray.length-1; i >=0 ;i--){
//         if(imgArray[i].src == img.src){
//             if(i === imgArray.length){
//                 document.getElementById("mainImage").src = imgArray[4].src;
//                 break;
//             }
//             document.getElementById("mainImage").src = imgArray[i-1].src;
//             break;
//         }
//     }
// }