'use strict'
const imageHolder = document.getElementById('pictures');
// const totalClicks = [];
// console.log('start');
const game = {
list: [],
counter: 0,
section: document.getElementById('pictures'),
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

    // console.log(this.list);
    this.showImages();
// console.log(this.showImages);
    
    const record = document.getElementById('pictures');   //attach event listener to section with id="pictures", contains
    
    record.addEventListener('click', function() {         //imgs
        console.log('stuff was clicked', event.target);
        for(let i = 0; i<game.list; i++) {               //increase the clicked products .timesClicked property
        }
        const url = event.target.src;
            for(let i = 0; i < game.list.length; i++){
                const array = game.list[i];
                const end = url.slice(url.indexOf(array.file), url.length);

             if(end === array.file){
                array.timesClicked++;
                console.table(array);

                game.counter ++;

              if(game.counter >= 25){
                 alert('YOU DID IT');

                 
              };

            }
        
        }
        game.erase();
        game.showImages();
    });
},
getRandomProduct: function () {
    const randomProducts = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * this.list.length); //multiplied by list.length to get random number between 0-20 (we need the index of the product in the array to display a random image)
        const image = this.list[randomNumber];
       randomProducts.push(image);
        if (!randomProducts.includes(image)){
            randomProducts.push(image);
        } 
        
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
    if (pictures.includes(block))continue;
        pictures.push(block);
   } 
    
    return pictures;
},

showImages: function (){

    const images = this.getRandomProduct();
    const show = this.insertPictures();
    // console.log('befor loop');
    // console.log('show length' + show);
    for (let i = 0; i < show.length; i++){
        imageHolder.appendChild(images[i].render());

        // console.log('in for loop');
    }


},
erase: function() {
            // const allImages = document.querySelector('div.four');
            // for (let i = 0; i < allImages.length; i++) {
                imageHolder.textContent = '';
                
            // }
        },

 end: function() {
     this.record.removeEventListener('click',  )


 },       


// drawChart: function () {
//     const chartCanvas = document.getElementById('chart');
//     const chartCtx = chartCanvas.getContext('2d');

//     const names = [];
//     const timesClick = [];
//     for(let i = 0; i<this.list.length; i++) {
//         names.push(this.list[i].name);
//         timesClick.push(this.list[i].timesClicked)
//     }

//      console.log('names', names);
//      console.log('timesClick', timesClick);

//      const chartCanvas = document.getElementById('chart');
//      const chartCtx = chartCanvas.getContext('2d');


//      const chart = new Chart(chartCtx, {  
//          type: 'bar',
//          data: {
//         labels: ['product 1', 'product 2'],
//         datasets: [{
//             label: 'number of times picked',
//             data: [21, 34]
//         }]

//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });


}



function Product(name, file) {
    this.name = name;
    this.file = file;
    this.timesShown = 0;
    this.timesClicked = 0;
};

Product.prototype.render = function(){
const ele = document.createElement('img');
ele.src = `images/${this.file}`;
// console.log("this is ele src", ele.src);
ele.setAttribute('alt', this.name);
return ele;
};

// console.log(ele.src);


game.start();
// game.getRandomProduct();
// game.insertPictures();
// console.log('anything');