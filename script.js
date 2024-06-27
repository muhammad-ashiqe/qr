let imgQr = document.getElementById("imgQr");

let inputText = document.getElementById("inputText");

let btn = document.getElementById("btn");
let imgBox = document.getElementById("imgBox");
let msg = document.getElementById("msg");

btn.addEventListener("click", function Qrgenerator() {
  imgQr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputText.value;
  imgBox.classList.add("show-img");
  if (inputText.value <= 0) {
    msg.innerHTML = "Please Provide a Text or a URL";
    msg.style.color = "red";
  } else {
    msg.innerHTML = "QR Generated Successfully...!";
    msg.style.color = "green";
  }
});
