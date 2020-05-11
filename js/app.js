'use strict';

var parent = document.getElementById('busMallImages');

var allProducts = [];

function ProductImages(url,alt,title){
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

new ProductImages('img/bag.jpg', 'bag', 'bag');
new ProductImages('img/banana.jpg', 'banana', 'banana');
new ProductImages('img/bathroom.jpg', 'bathroom', 'bathroom');
new ProductImages('img/boots.jpg', 'boots', 'boots');
new ProductImages('img/breakfast.jpg', 'breakfast', 'breakfast');
new ProductImages('img/bubblegum.jpg', 'bubblegum', 'bubblegum');
new ProductImages('img/chair.jpg', 'chair', 'chair');
new ProductImages('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new ProductImages('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new ProductImages('img/dragon.jpg', 'dragon', 'dragon');
new ProductImages('img/pen.jpg', 'pen', 'pen');
new ProductImages('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new ProductImages('img/scissors.jpg', 'scissors', 'scissors');
new ProductImages('img/shark.jpg', 'shark', 'shark');
new ProductImages('img/sweep.png', 'sweep', 'sweep');
new ProductImages('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new ProductImages('img/unicorn.jpg', 'unicorn', 'unicorn');
new ProductImages('img/usb.gif', 'usb', 'usb');
new ProductImages('img/water-can.jpg', 'water-can', 'water-can');
new ProductImages('img/wine-glass.jpg', 'wine-glass', 'wine-glass');

ProductImages.prototype.render = function(){
  var imageElement = document.createElement('img');
  imageElement.src = this.filePath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;

  parent.appendChild(imageElement);
}

// helper function
function randomNumber(min=0, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// render 3 random images
function getRandomImage(){
  parent.textContent = '';


  // call randomNumber function to get random index position
  var randomIndex = randomNumber(0, allProducts.length-1);
  var randomIndexTwo = randomNumber(0, allProducts.length-1);
  var randomIndexThree = randomNumber(0, allProducts.length-1);

  while(randomIndex === randomIndexTwo || randomIndex === randomIndexThree || randomIndexTwo === randomIndexThree){
    randomIndexTwo = randomNumber(0, allProducts.length-1);
    randomIndexThree = randomNumber(0, allProducts.length-1);
  }

  allProducts[randomIndex].render();
  allProducts[randomIndex].views++;

  allProducts[randomIndexTwo].render();
  allProducts[randomIndexTwo].views++;

  allProducts[randomIndexThree].render();
  allProducts[randomIndexThree].views++;
}

getRandomImage();

//event listener
parent.addEventListener('click', function(){
  var ImagaThatwasClickedOn = event.target.title;

  for (var i =0; i < allProducts.length; i++){
    if(ImagaThatwasClickedOn === allProducts[i].title){
      allProducts[i].votes++;
    }
  }

  getRandomImage();
});
