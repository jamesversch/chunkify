import $ from 'jquery';
import './style.scss';

let num = 0;

function increment() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
}

setInterval(increment, 1000);
