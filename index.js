let a;
let h;
let p;

document.getElementById("oblicz").onclick = function(){
    a = document.getElementById("a").value
    a = Number(a);
    h = document.getElementById("h").value
    h = Number(h);
    p = (a * h) / 2;
    document.getElementById("wynik").textContent = p + ' cm²';
}


