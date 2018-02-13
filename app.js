'use strict'

const list = [];

function Product(name, file) {
    this.name = name;
    this.file = file;
    this.timesShown = 0;
    this.timesClicked = 0;

    list.push(this);

}

// console.log(list);

let bag = new Product('bag', 'images/bag.jpg'); 
let banana = new Product('banana','images/banana.jpg');
let bathroom = new Product('bathroom', 'images/bathroom.jpg');
let boots = new Product('boots','images/boots.jpg');
let breakfast = new Product('breakfast', 'images/breakfast.jpg');
let bubblegum = new Product('bubblegum', 'images/bubblegum.jpg');
let chair = new Product('chair', 'images/chair.jpg');
let cthulhu = new Product('cthulhu', 'images/cthulhu.jpg');
let dogDuck = new Product('dog-duck', 'images/dog-duck.jpg');
let dragon = new Product('dragon', 'images/dragon.jpg');
let pen = new Product('pen', 'images/pen.jpg');
let petSweep = new Product('pet-sweep','images/pet-sweep.jpg');
let scissors = new Product('scissors', 'images/scissors.jpg');
let shark = new Product('shark', 'images/shark.jpg');
let sweep = new Product('sweep', 'images/sweep.png');
let tauntaun = new Product('tauntaun', 'images/tauntaun.jpg');
let unicorn = new Product('unicorn', 'images/unicorn.jpg');
let usb = new Product('usb', 'images/usb.gif');
let waterCan = new Product('water-can', 'images/water-can.jpg');
let wineGlass = new Product('wine-glass', 'images/wine-glass.jpg');


// pick three random images
const getRandomProduct = function() {
    const randomProducts = [];
    while (randomProducts.length < 3) {
        const randomNumber = Math.floor(Math.random() * list.length); //multiplied by list.length to get random number between 0-20 (we need the index of the product in the array to display a random image)
        const image = list[randomNumber];

        if (!randomProducts.includes(image)){
            randomProducts.push(image);
        }
        
    }
    return randomProducts;  //return randomProducts(so it is available)
};

getRandomProduct(); //call getRandomProduct//

const insertPictures = function(){
    const imageHolder = document.getElementById('pictures');  //store reference to id = "pictures" in imageHolder
    const pictures = getRandomProduct();                      //store result of getRandomProduct() in pictures
    for(let i = 0; i < pictures.length; i++){               // loop that runs until the end of randomProducts....//
        let image = document.createElement('img');        //all three times the loop runs we crate an <img>
        image.src = pictures[i].file;                      // image.src (in html) is held in........
        imageHolder.appendChild(image);                     //append image to imageHolder (id = pictures)
        
        console.log(image);
    }

}
insertPictures();

const record = document.getElementById("pictures");   //attach event listener to section with id="pictures", contains
record.addEventListener('click', function() {         //imgs
    console.log('stuff was clicked', event.target);
    // erase();
    getRandomProduct();
    insertPictures();
    
});

// const erase = function(){
//     const imageHolder = document.getElementById('pictures');
//     for (let i = 0; i < imageHolder.length; i++) {
//         imageHolder[i].textContent = '';
//         c
//     }
// };