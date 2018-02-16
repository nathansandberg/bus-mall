'use strict';
const imageHolder = document.getElementById('pictures');



const game = {
    list: [],
    names: [],
    clickCounter: 0,
    timesClick: [],
    timesShown: 0,
    section: document.getElementById('pictures'),
    start: function (){

        this.list.push(
            new Product('Star Wars Themed Luggage', 'bag.jpg'),
            new Product('Plastic Banana Slicer','banana.jpg'),
            new Product('iPod TP Holder', 'bathroom.jpg'),
            new Product('Impractical Boots','boots.jpg'),
            new Product('Double Decker Toaster', 'breakfast.jpg'),
            new Product('Meatball Flavoured Chewing Gum', 'bubblegum.jpg'),
            new Product('Modern Design Chair', 'chair.jpg'),
            new Product('Cthulhu Action Figure', 'cthulhu.jpg'),
            new Product('Animal Abuse', 'dog-duck.jpg'),
            new Product('Canned Dragon Meat', 'dragon.jpg'),
            new Product('Writing Implement Cutlery Attachment', 'pen.jpg'),
            new Product('Ridiculous Pet Attachment','pet-sweep.jpg'),
            new Product('Pizza Shears', 'scissors.jpg'),
            new Product('Shark Sleeping Bag', 'shark.jpg'),
            new Product('Child Abuse', 'sweep.png'),
            new Product('Tauntaun Sleep Sack', 'tauntaun.jpg'),
            new Product('Tinned Unicorn Meat', 'unicorn.jpg'),
            new Product('USB Tentacle', 'usb.gif'),
            new Product('Self Fulfilling Watering Can', 'water-can.jpg'),
            new Product('Impractical Wine Glass', 'wine-glass.jpg')
        );


        this.showImages();

        const record = document.getElementById('pictures');   //attach event listener to section with id="pictures", contains

        record.addEventListener('click', function() {         //imgs
            // console.log('stuff was clicked', event.target);
            for(let i = 0; i < game.list; i++) {               //increase the clicked products .timesClicked property
            }
            const url = event.target.src;
            for(let i = 0; i < game.list.length; i++){
                const array = game.list[i];
                const end = url.slice(url.indexOf(array.file), url.length);

                if(end === array.file){
                    array.timesClicked++;
                    // console.table(array);

                    game.clickCounter ++;
                    game.erase();
                    if(game.clickCounter < 25){
                        game.showImages();
                    } else if (game.clickCounter === 25){
                        game.drawChart();
                        game.makeList();
                    };
                }
            }
        });


    },
    getRandomProduct: function () {
        const randomProducts = [];
        while (randomProducts.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.list.length); //multiplied by list.length to get random number between 0-20 (we need the index of the product in the array to display a random image)
            const image = this.list[randomNumber];


            if (!randomProducts.includes(image)){
                randomProducts.push(image);

            }

        }
        return randomProducts;  //return randomProducts(so it is available)
    },

    insertPictures: function () {
        const pictures = [];
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

        for (let i = 0; i < show.length; i++){

            imageHolder.appendChild(images[i].render());

        }


    },
    erase: function() {
        imageHolder.textContent = '';

    },
    drawChart: function () {
        const chartCanvas = document.getElementById('chart');
        const chartCtx = chartCanvas.getContext('2d');


        for(let i = 0; i < this.list.length; i++) {
            if(this.list[i].timesClicked > 0){
                this.names.push(this.list[i].name);
                this.timesClick.push(this.list[i].timesClicked);
            }
        }
        // console.log('names', names);
        console.log('timesClick', this.timesClick);

        const chart = new Chart(chartCtx, {  //eslint-disable-line
            type: 'bar',
            data: {
                labels: this.names,
                datasets: [{
                    label: 'Most Popular Products',
                    data: this.timesClick
                }]

            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });


    },
    makeList: function() {
        const uList =  document.getElementById('list');

        for(let i = 0; i < this.names.length; i++) {
            const ele = document.createElement('li');
            ele.textContent = (this.names[i] + ' : ' + this.timesClick[i]);

            uList.appendChild(ele);
        }
        console.log('names', this.names);


    },
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
    ele.setAttribute('alt', this.name);
    return ele;
};

localStorage.setItem('Tally', JSON.stringify(game.list));
JSON.parse(localStorage.getItem('Tally'));

if(localStorage.getItem('Tally')){
    localStorage.setItem('Tally', JSON.stringify(game.list));
} else {
    localStorage.getItem('Tally', JSON.stringify(game.list));
}
game.start();
