'use strict';
const imageHolder = document.getElementById('pictures');
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


        this.showImages();

        const record = document.getElementById('pictures');   //attach event listener to section with id="pictures", contains

        record.addEventListener('click', function() {         //imgs
            console.log('stuff was clicked', event.target);
            for(let i = 0; i < game.list; i++) {               //increase the clicked products .timesClicked property
            }
            const url = event.target.src;
            for(let i = 0; i < game.list.length; i++){
                const array = game.list[i];
                const end = url.slice(url.indexOf(array.file), url.length);

                if(end === array.file){
                    array.timesClicked++;
                    console.table(array);

                    game.counter ++;
                    game.erase();
                    if(game.counter < 25){
                        game.showImages();
                    } else if (game.counter === 25){
                        game.drawChart();
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

        const names = [];
        const timesClick = [];
        for(let i = 0; i < this.list.length; i++) {
            if(this.list[i].timesClicked > 0){
                names.push(this.list[i].name);
                timesClick.push(this.list[i].timesClicked);
            }

        }
        console.log('names', names);
        console.log('timesClick', timesClick);

        const chart = new Chart(chartCtx, {  //eslint-disable-line
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'number of times picked',
                    data: timesClick
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
    ele.setAttribute('alt', this.name);
    return ele;
};
game.start();
