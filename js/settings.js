'use strict';


const settingsForm = document.getElementById('inputs');
settingsForm.addEventListener('submit', function(){
    event.preventDefault();
    const numProducts = this.numProducts.value;
    const numChoices = this.numChoices.value;

    console.log(numProducts, numChoices, 'yay!');

    const settings = {numProducts: numProducts, numChoices: numChoices};
    localStorage.setItem('settings', JSON.stringify(settings));



});