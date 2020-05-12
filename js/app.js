'use strict';

var parent = document.getElementById('busMallImages');
var uniqueIndexArray = [];
var allProducts = [];
var totalVotes = 0;
var names = [];
var votes = [];
var views = [];

function ProductImages(name, extension){
  this.filePath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

ProductImages.prototype.render = function(){

  var imageElement = document.createElement('img');
  imageElement.src = this.filePath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;

  parent.appendChild(imageElement);
}

new ProductImages('bag', '.jpg');
new ProductImages('banana', '.jpg');
new ProductImages('bathroom', '.jpg');
new ProductImages('boots', '.jpg');
new ProductImages('breakfast', '.jpg');
new ProductImages('bubblegum', '.jpg');
new ProductImages('chair', '.jpg');
new ProductImages('cthulhu', '.jpg');
new ProductImages('dog-duck', '.jpg');
new ProductImages('dragon', '.jpg');
new ProductImages('pen', '.jpg');
new ProductImages('pet-sweep', '.jpg');
new ProductImages('scissors', '.jpg');
new ProductImages('shark', '.jpg');
new ProductImages('sweep', '.png');
new ProductImages('tauntaun', '.jpg');
new ProductImages('unicorn', '.jpg');
new ProductImages('usb', '.gif');
new ProductImages('water-can', '.jpg');
new ProductImages('wine-glass', '.jpg');


// render 3 random images
function getRandomIndex(){

  var index = randomNumber(allProducts.length);

  while(uniqueIndexArray.includes(index)){
    index = randomNumber(allProducts.length);
  }
  uniqueIndexArray.push(index);

  if(uniqueIndexArray.length > 6){
    uniqueIndexArray.shift();
  }

  return index;
}

// helper function
function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function displayImages(){
  var index = getRandomIndex();
  allProducts[index].render();
}

function handleClick(event){
  parent.textContent = '';

  var imageThatWasClickedOn = event.target.title;

  for (var i =0; i < allProducts.length; i++){
    if(imageThatWasClickedOn === allProducts[i].title){
      allProducts[i].votes++;
      allProducts[i].views++;
      totalVotes++;


      if (totalVotes === 25){
        parent.removeEventListener('click', handleClick);
        makeNamesArray();
      }
    }
  }
  displayImages();
  displayImages();
  displayImages();
}

displayImages();
displayImages();
displayImages();

//event listener
parent.addEventListener('click', handleClick);


function makeNamesArray(){
  for (var i=0; i <allProducts.length; i++){
    names.push(allProducts[i].title);
    votes.push(allProducts[i].votes);
  }
  generateChart();
}

function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
