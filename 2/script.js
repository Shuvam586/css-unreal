const pins = {
    1: {name: 'Brain Strain Trivia Event Promotion - Easil', value: 'https://i.pinimg.com/236x/66/ac/8b/66ac8ba96b153d44443cfb4b480d6003.jpg'},
    2: {name: 'Winson', value: 'https://i.pinimg.com/564x/d4/80/10/d48010c085db87aa898073a4406cccd1.jpg'},
    3: {name: 'GRM HRT', value: 'https://i.pinimg.com/564x/9c/a9/8f/9ca98f06fe9cecf4aa0c77d9881a20f7.jpg'},
    4: {name: 'ma do re ', value: 'https://i.pinimg.com/564x/d5/44/5e/d5445ef8eb8fd3dea86860b20fd0e411.jpg'},
    5: {name: 'im ok', value :'https://i.pinimg.com/564x/86/e6/fc/86e6fc0a5a1722f54896d9fdee53a53a.jpg'},
    6: {name: 'design is not some buttons in your photoshop', value: 'https://i.pinimg.com/564x/b2/8e/c3/b28ec37b2112a4a355f27bf01796f86d.jpg'},
    7: {name: 'poster de cactus', value: 'https://i.pinimg.com/736x/7d/e2/f0/7de2f0d42617666579e3d9f808a44163.jpg'},
    8: {name: 'doggo', value: 'https://i.pinimg.com/564x/e5/5e/43/e55e439d69bb1a5a46c38280fd8b8a88.jpg'},
    9: {name: 'avenir', value: 'https://i.pinimg.com/564x/1b/96/1f/1b961fe2249ac41a5484deeade93e560.jpg'},
    10: {name: 'an old man in a yelow raincoat eating watermelon', value: 'https://i.pinimg.com/564x/79/e9/2d/79e92d71e7eced540ba96fb8af0a0c79.jpg'}
}

setInterval(() => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0 ; j < 60; j++) {
            chosen = pins[Math.floor(Math.random() * 10) + 1];
            document.querySelector(`.scroll-${i+1}`).innerHTML += `<div class="scroll-item">
            <div class="scroll-item-heading">${chosen.name}</div>
            <img src="${chosen.value}" alt="${chosen.name}" class="scroll-item-img">
            </div>`
        }
    } 
}, 4000);



document.querySelector('.scroll-1').classList.add('opor');
document.querySelector('.scroll-2').classList.add('opor');
document.querySelector('.scroll-3').classList.add('opor');
