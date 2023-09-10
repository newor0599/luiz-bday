var imgs = ["another orange","baby","badminton","black white","di tou","black","insta pic","mrt","mrt2","orange","popular 2","popular 3","popular","run","school","school1","school2","school3","white"]
var index = 0
const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

setInterval(()=>{
    pic = document.querySelector("img");
    pic.src = `${imgs[index]}.jpeg`
    if (index == imgs.length-1){
        index = 0
        imgs = shuffle(imgs);
    }else{
        index++
    }
},700)