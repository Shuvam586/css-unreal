const pins = {
    1: {name: 'Brain Strain Trivia Event Promotion - Easil', value: 'https://i.pinimg.com/236x/66/ac/8b/66ac8ba96b153d44443cfb4b480d6003.jpg'},
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6
}

scrolls = document.getElementsByClassName('scroll');

setInterval(() => {
    scrolls.forEach(e => {
        e.classList.toggle('opor');
    });
}, 40000);

document.querySelector('.scroll-1').classList.add('opor');
document.querySelector('.scroll-2').classList.add('opor');
document.querySelector('.scroll-3').classList.add('opor');
