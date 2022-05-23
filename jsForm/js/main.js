// let myButton=document.querySelector("#myButton")
// let usename=document.querySelector("#username")
// let passwor=document.querySelector("#password")

// myButton.addEventListener("click",function() {
//    if(username.value==""){
//    username.nextElementSibling.innerHTML="bu xana bos ola bilmez"
//    }

//    if(passwor.value==""){
//        passwor.nextElementSibling.innerHTML="bu xana bos ola bilmez"
//    }

//    if(passwor.value.length<8) {
//        passwor.nextElementSibling.innerHTML="bu xana 8 sinvoldan ibaret olmalidir"
//    }

// })

// username.addEventListener("keyup",function(){
//     usename.nextElementSibling.innerHTML=""
//     if(username.value==""){
//         usename.nextElementSibling.innerHTML="bu xana bos ola bilmez"
//     }
// })

// passwor.addEventListener("keyup",function(){
// passwor.nextElementSibling.innerHTML=""
// if(passwor.value==""){
//     passwor.nextElementSibling.innerHTML="bu xana bos ola bilmez"
// }
// if(passwor.value.length>=8){
// passwor.style.boxShadow="  0 0 0 0.25rem green"
// }
// if(passwor.value.length<5){
//     passwor.style.boxShadow="  0 0 0 0.25rem red"
//     }
   
// })


let myButton=document.querySelector("#myButton")
let myName=document.querySelector("#myName")
let mySurname=document.querySelector("#mySurname")
let myEmail=document.querySelector("#myEmail")
let myPassword=document.querySelector("#myPassword")

myButton.addEventListener("click",function(){
    if(myName.value==""){
     myName.nextElementSibling.innerHTML="xanani bos qoymayin"
    }

    if(mySurname.value==""){
        mySurname.nextElementSibling.innerHTML="xanani bos qoymayin"
       }
       if(myEmail.value==""){
        myEmail.nextElementSibling.innerHTML="xanani bos qoymayin"
       }
       if(myPassword.value==""){
        myPassword.nextElementSibling.innerHTML="xanani bos qoymayin"
       }
      else if(myPassword.value.length<8){
        myPassword.nextElementSibling.innerHTML="min 8 simboldan ibaret olmalidir"
    }
})

myName.addEventListener("keyup",function(){
    myName.nextElementSibling.innerHTML=""
    if(myName.value==""){
        myName.nextElementSibling.innerHTML="xanani doldur"
    }
})

myName.addEventListener("mouseover",function(){
    myName.style.backgroundColor="green"
   
})

myName.addEventListener("mouseout",function(){
    myName.style.backgroundColor="white"
})

mySurname.addEventListener("keyup",function(){
    mySurname.nextElementSibling.innerHTML=""
    if(mySurname.value==""){
        mySurname.nextElementSibling.innerHTML="xanani doldur"
    }
})
mySurname.addEventListener("mouseover",function(){
    mySurname.style.backgroundColor="green"
   
})

mySurname.addEventListener("mouseout",function(){
    mySurname.style.backgroundColor="white"
})

myEmail.addEventListener("keyup",function(){
    myEmail.nextElementSibling.innerHTML=""
    if(myEmail.value==""){
        myEmail.nextElementSibling.innerHTML="xanani doldur"
    }
})

myEmail.addEventListener("mouseover",function(){
    myEmail.style.backgroundColor="green"
   
})

myEmail.addEventListener("mouseout",function(){
    myEmail.style.backgroundColor="white"
})



myPassword.addEventListener("keyup",function(){
    myPassword.nextElementSibling.innerHTML=""
    if(myPassword.value==""){
        myPassword.nextElementSibling.innerHTML="xanani doldur"
    }

    if(myPassword.value.length>=8){
        myPassword.style.boxShadow="0 0 0 0.20rem green"
    }

    
})
myPassword.addEventListener("mouseover",function(){
    myPassword.style.backgroundColor="green"
   
})

myPassword.addEventListener("mouseout",function(){
    myPassword.style.backgroundColor="white"
})