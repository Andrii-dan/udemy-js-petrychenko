'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');

const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.height = '200px';

box.style.cssText = 'background: blue; width: 500px; height: 500px;';

btns[1].style.borderRadius = '50px';
