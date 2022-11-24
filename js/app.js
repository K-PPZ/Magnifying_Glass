let img = document.getElementById("img");
let img_hidden = document.getElementById("img_hidden");
const rect = img.getBoundingClientRect();

img.addEventListener("mousemove", (e) => {
    let X = e.clientX - rect.x;
    let Y = e.clientY - rect.y;
    X = X * 100 / img.offsetWidth - 50;
    Y = Y * 100 / img.offsetHeight - 50;
    console.log(X + " " + Y);

    img_hidden.style.transform = `translateX(${-X}%) translateY(${-Y}%)`;
});