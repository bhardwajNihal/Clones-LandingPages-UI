

let cursor = document.getElementById("cursor");
let blurcursor = document.getElementById("blurcursor");

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    blurcursor.style.left = dets.x + "px";
    blurcursor.style.top = dets.y + "px";

})