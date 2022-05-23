var phoneImg = document.querySelector("#phone-img");
var model_p = document.querySelector("#model_p");
var color_p = document.querySelector("#color_p");
var price_p = document.querySelector("#price_p");
var camera_p = document.querySelector("#camera_p");
var storage_p = document.querySelector("#storage_p");

var phones = [];

var phone_1 = {
  model: "Iphone",
  storage: 128,
  color: "black",
  price: "2064$",
  camera: "48mgpx",
};

var phone_2 = {
  model: "Samsung",
  storage: 64,
  color: "black",
  price: "1034$",
  camera: "16mgpx",
};

var phone_3 = {
  model: "Redmi",
  storage: 32,
  color: "black",
  price: "968$",
  camera: "48mgpx",
};

phones = [phone_1, phone_2, phone_3];

var prompt_data = prompt("Enter phone model");
for (var i = 0; i < phones.length; i++) {

(phones[i].model == prompt_data);
{

    
}
}
// model_p.innerText = "Model:" + phones[i].model;
// color_p.innerText = "Color:" + phones[i].color;
// price_p.innerText = "Price:" + phones[i].price;
// camera_p.innerText = "Camera:" + phones[i].camera;
// storage_p.innerText = "Storage:" + phones[i].storage;
// phoneImg.src = "img/"+phones[i] +jpg;
