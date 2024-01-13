let a1;
let h1;
let p1;

document.getElementById("oblicz1").onclick = function(){
    a1 = document.getElementById("a1").value
    a1 = Number(a1);
    h1 = document.getElementById("h1").value
    h1 = Number(h1);
    p1 = (a1 * h1) / 2;
    document.getElementById("wynik1").changeTextContent = p1 + ' cm²';
}


