text= "Legasa Kgagara";
document.getElementById("typewriter");
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
window.addEventListener("load", type);