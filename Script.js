var messagearray=["Hi,I am Prem Kumar...!"];
var textpsotion=0;
var speed=80;

typewriter = () => {
   
document.querySelector("#message").
innerHTML = messagearray [0].substring(0,textpsotion)+
"<span>\u25ae</span";

if(textpsotion++ !=messagearray[0].length)
setTimeout(typewriter,speed);
}
window.addEventListener("load",typewriter)

