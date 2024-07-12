/** @type {HTMLCanvasElement} */

import Player from './player.js';

window.addEventListener('load', e => {
    const loading = document.getElementById('loading');

    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log('width: ' + canvas.width);
    console.log('heigth: ' + canvas.height);
});