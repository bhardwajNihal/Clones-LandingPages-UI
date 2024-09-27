
let arrayofImages = [
    {name: "badgirl", url: "https://i.pinimg.com/564x/ed/82/a5/ed82a5971e86fc7338fc2c273345bfd4.jpg"},
    {name: "pinkpanther", url: "https://i.pinimg.com/736x/4c/35/a1/4c35a178ac9b02dd3f5c64142ec8cb54.jpg"},
    {name: "shinchan", url: "https://i.pinimg.com/564x/c2/80/e3/c280e346ff236580be61fa3a9475c7c6.jpg"},
    {name: "bunglow", url: "https://i.pinimg.com/736x/1b/17/a4/1b17a4779e89c0559bac903640d36435.jpg"},
    {name: "girlanime", url: "https://i.pinimg.com/564x/ce/c9/2a/cec92a68a14de24c21d532bc71312327.jpg"},
    {name: "messi", url: "https://i.pinimg.com/564x/1e/55/4e/1e554e93bd1ea811eeadc04f98afd5a0.jpg"},
    {name: "teddybear", url: "https://i.pinimg.com/564x/99/96/c8/9996c806c207dbc3028038d54c72420d.jpg"},
    
];

function createcards(){
    let collector = "";

    arrayofImages.forEach( function(element) {
        let randomheight1 = Math.floor(Math.random()* (400 -200 +1)) + 200;
        let randomheight2 = Math.floor(Math.random()* (400 -200 +1)) + 200;
        collector += `<div class="image" style = "height : ${randomheight1}px; width : ${randomheight2}px""><img src="${element.url}" alt=""></div>`;
    });
    
    document.querySelector(".mainbody").innerHTML = collector;
}

createcards();


let inputvalue = document.querySelector(".searchbar input");
let searcharea = document.querySelector(".searcharea");


function searchbareffect(){

    inputvalue.addEventListener("focus",()=>{
        document.querySelector(".overlay").style.display = "block";
        searcharea.style.display = "block";
    })
    inputvalue.addEventListener("blur",()=>{
        setTimeout(() => {
            document.querySelector(".overlay").style.display = "none";
        searcharea.style.display = "none";
        }, 200);
    })
    
    inputvalue.addEventListener("input", ()=>{

        let collector2 = "";
        let newarray = arrayofImages.filter(ele => ele.name.toLowerCase().startsWith(inputvalue.value));
        
        newarray.forEach(function(ele){
            collector2 += `<div class="searchtext">
            <div class="searchicon"><i style="color: grey; margin-top: 5px;" class="fa-solid fa-magnifying-glass"></i></div>
            <div class="searchcontent">${ele.name}</div>
        </div>`

        searcharea.innerHTML = collector2;
        })
})
}
searchbareffect();