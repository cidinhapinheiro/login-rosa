
var btnentrar= document.querySelector("#entrar");
var btninscrição= document.querySelector("#inscrição");

var body= document.querySelector("body");


btnentrar.addEventListener("click", function(){
    body.className= "entrar-js";
});

btninscrição.addEventListener("click", function (){
    body.className= "inscrição-js"
})