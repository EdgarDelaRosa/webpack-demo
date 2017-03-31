import sloth from '../assets/sloth.jpg';
import cheeatah from '../assets/cheetah.jpg';

console.log(sloth);
console.log(cheeatah);

import $ from 'jquery';

const body = $('body');

const displayCheetah = () => {
    const cheetahImage = $('<img></img>', {src: cheeatah});
    cheetahImage.appendTo(body);
};

const displaySloth = () => {
    const slothImage = $('<img></img>', {src: sloth});
    slothImage.appendTo(body);
};

export {
    displaySloth,
    displayCheetah
};