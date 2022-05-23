// let imgWhite=document.querySelector("#box1")
// let imgBlack=document.querySelector("#box2")
// let imgAgua=document.querySelector("#box3")
// let myImg=document.querySelector("#myImg")
// let heat=document.querySelector("#heart")


// imgWhite.addEventListener("click",function(){
//     myImg.src="https://cdn2.fromae.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/8/1/81yiwkh9n1l._ac_sl1500_.jpg";

    
    
//     })

// imgBlack.addEventListener("click",function(){
// myImg.src="https://kontakt.az/media/catalog/product/1/0/1000-21_1.jpg?store=az&image-type=image";

// })

// imgAgua.addEventListener("click",function(){
//     myImg.src="https://strgimgr.umico.az/sized/840/84969-956f78c748ee662eb90ba9fed9559f0d.jpg";
    
//     })

//     heat.addEventListener("click",function(){
//         heart.style.color="red"
//     })

//     heat.addEventListener("dblclick",function(){
//         heart.style.color="black"
//     })

  

    // let text=document.querySelector("#box")

    let mybox="salam yardimli aaaaaaaaaa"
    let word=mybox.split('');
    for (let index = 0; index < word.length; index++) {
        if(word[index.length>8]){
            // console.log("word[index]")
            document.write(word[index])
            word[index].style.backgrounColor="red"
        }
        
    }