function solve() {
    console.log("x, y, z");
    let x = parseFloat(elementX.innerText);
    let y = parseFloat(elementY.innerText);
    let z = parseFloat(elementZ.innerText);
    console.log(x, y, z)
    if ((y + z <= x) || (x + z <= y) || (x + y <= z)) {
        result = "Треугольник с сторонами X, Y, Z не существует.";
         document.getElementById("result").innerText =  result;
        return;
    }
    if ((x * x + y * y == z * z) || (y * y + z * z == x * x) || (z * z + x * x == y * y)) {
        result = "Треугольник с сторонами X, Y, Z существует и он прямоугольний.";
         document.getElementById("result").innerText =  result;
    }
    else {
        result = "Треугольник с сторонами X, Y, Z существует, но он не прямоугольний.";
         document.getElementById("result").innerText =  result;
    }
}

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");
const elementZ = document.getElementById("z");

const elementVerify = document.getElementById("solve");
elementVerify.addEventListener('click', solve);
