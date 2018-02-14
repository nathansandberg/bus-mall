'use strict'
const imageHolder = document.getElementById('pictures');
console.log('start');
const game = {
list: [],
start: function (){

    this.list.push(
        new Product('bag', 'bag.jpg'),
        new Product('banana','banana.jpg'),
        new Product('bathroom', 'bathroom.jpg'),
        new Product('boots','boots.jpg'),
        new Product('breakfast', 'breakfast.jpg'),
        new Product('bubblegum', 'bubblegum.jpg'),
        new Product('chair', 'chair.jpg'),
        new Product('cthulhu', 'cthulhu.jpg'),
        new Product('dog-duck', 'dog-duck.jpg'),
        new Product('dragon', 'dragon.jpg'),
        new Product('pen', 'pen.jpg'),
        new Product('pet-sweep','pet-sweep.jpg'),
        new Product('scissors', 'scissors.jpg'),
        new Product('shark', 'shark.jpg'),
        new Product('sweep', 'sweep.png'),
        new Product('tauntaun', 'tauntaun.jpg'),
        new Product('unicorn', 'unicorn.jpg'),
        new Product('usb', 'usb.gif'),
        new Product('water-can', 'water-can.jpg'),
        new Product('wine-glass', 'wine-glass.jpg')
    );

    console.log(this.list);
    this.showImages();
console.log(this.showImages);
    
    const record = document.getElementById('pictures');   //attach event listener to section with id="pictures", contains
    
    record.addEventListener('click', function() {         //imgs
        console.log('stuff was clicked', event.target);
        const url = event.target.src;
            for(let i = 0; i < game.list.length; i++){
                const array = game.list[i];
                 const end = url.slice(url.indexOf(array.file), url.length);

             if(end === array.file){
                array.timesClicked++;
            }
            
            game.erase();
            game.showImages();
        }
    });
    


  
  


},
getRandomProduct: function () {
    const randomProducts = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * this.list.length); //multiplied by list.length to get random number between 0-20 (we need the index of the product in the array to display a random image)
        const image = this.list[randomNumber];
       randomProducts.push(image);
        // if (!randomProducts.includes(image)){
        //     randomProducts.push(image);
        // }
        
    }
    
    return randomProducts;  //return randomProducts(so it is available)
},

insertPictures: function () {
                                                      //store reference to id = "pictures" in imageHolder
    const allImages = document.querySelector('div.four');
    const pictures = [];                      //store result of getRandomProduct() in pictures
   while (pictures.length < 3) {
    const randomNumber = Math.floor(Math.random() * game.list.length);
    const block = game.list[randomNumber];
    if (pictures.includes(block)) continue;
        pictures.push(block);
   } 
    
return pictures;
},

showImages: function (){

    const images = this.getRandomProduct();
    const show = this.insertPictures();
    console.log('befor loop');
    console.log('show length' + show);
    for (let i = 0; i < show.length; i++){
        imageHolder.appendChild(images[i].render());

        console.log('in for loop');
    }


},
erase: function() {
            // const allImages = document.querySelector('div.four');
            // for (let i = 0; i < allImages.length; i++) {
                imageHolder.textContent = '';
                
            // }
        }
};


function Product(name, file) {
    this.name = name;
    this.file = file;
    this.timesShown = 0;
    this.timesClicked = 0;
};

Product.prototype.render = function(){
const ele = document.createElement('img');
ele.src = `images/${this.file}`;
console.log("this is ele src", ele.src);
ele.setAttribute('alt', this.name);
return ele;
};

// console.log(ele.src);


game.start();
// game.getRandomProduct();
// game.insertPictures();
console.log('anything');