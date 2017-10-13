/*
* Autores:  Martín Alejandro Pérez Güendulain
*           Ángel Roberto Móntez Murgas
*/

let canvas = document.getElementById('canvas');
let width = canvas.width;
let height = canvas.height;
let ctx = canvas.getContext("2d");
let keys = new Map();

let img_pianos = [];
img_pianos[0] = document.getElementById("img_piano");
img_pianos[1] = document.getElementById("img_piano_do");
img_pianos[2] = document.getElementById("img_piano_re");
img_pianos[3] = document.getElementById("img_piano_mi");
img_pianos[4] = document.getElementById("img_piano_fa");
img_pianos[5] = document.getElementById("img_piano_sol");
img_pianos[6] = document.getElementById("img_piano_la");
img_pianos[7] = document.getElementById("img_piano_si");

var socket;
window.onload = function() {
    socket = io();
    drawPiano();
}

function drawPiano() {
    ctx.drawImage(img_pianos[0], 0, 0);
}

document.addEventListener("keydown", (event) => {
    if(event.key == 'a' || event.key == 's' || event.key == 'd' || event.key == 'f' || event.key == 'g' || event.key == 'h' || event.key == 'j') {
        if(keys[event.key] != true) {
            keys[event.key] = true;

            switch (event.key) {
                case 'a':
                    ctx.drawImage(img_pianos[1], 0, 0);
                    break;
                case 's':
                    ctx.drawImage(img_pianos[2], 0, 0);
                    break;
                case 'd':
                    ctx.drawImage(img_pianos[3], 0, 0);
                    break;
                case 'f':
                    ctx.drawImage(img_pianos[4], 0, 0);
                    break;
                case 'g':
                    ctx.drawImage(img_pianos[5], 0, 0);
                    break;
                case 'h':
                    ctx.drawImage(img_pianos[6], 0, 0);
                    break;
                case 'j':
                    ctx.drawImage(img_pianos[7], 0, 0);
                    break;
                default:
                    ctx.drawImage(img_pianos[0], 0, 0);
            }


            socket.emit('teclaOn', event.key);
        }
    }
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
    ctx.drawImage(img_pianos[0], 0, 0);
    socket.emit('noTone');
});
