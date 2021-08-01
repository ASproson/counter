// Globals
let counter = 0;
let web_counter = document.getElementById('counter');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');
let title = document.getElementById('title');

// Action on click events

function minus () {
  web_counter.innerHTML = counter -= 1;
  if (counter < 0) {
    title.style.color = '#EC7063';
  }
}

function zero () {
  counter = 0;
  web_counter.innerHTML = 0;
  title.style.color = '#5DADE2';
}

function plus () {
  web_counter.innerHTML = counter += 1;
  if (counter > 0) {
    title.style.color = '#58D68D';
  }
}

//  Event listeners

decrease.addEventListener('click', minus);
reset.addEventListener('click', zero);
increase.addEventListener('click', plus);
