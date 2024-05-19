let noBtn = document.querySelector('.no-btn');
let yesBtn = document.querySelector('.yes-btn');
let noTexts = ['No', 'Are u sure?', 'Really sure?'];
let noIndex = 0;
let currentWidth = 0; // add a variable to track the current width
let currentHeight = 0; // add a variable to track the current height

noBtn.addEventListener('click', () => {
  currentWidth += 50; // increase the width by 50px each click
  currentHeight += 50; // increase the height by 50px each click
  yesBtn.style.width = `${currentWidth}px`; // set the width of yesBtn
  yesBtn.style.height = `${currentHeight}px`; // set the height of yesBtn
  if (currentWidth >= 500) { // check if the width reaches 500px
    currentWidth = 500; // stop increasing the width
  }
  if (currentHeight >= 500) { // check if the height reaches 500px
    currentHeight = 500; // stop increasing the height
  }
  noBtn.textContent = noTexts[noIndex];
  noIndex = (noIndex + 1) % noTexts.length;
});

let container = document.querySelector('.container');
let otherDiv = document.querySelector('.container-2'); // assuming you have a div with class "other-div"

yesBtn.addEventListener('click', () => {
  container.style.display = 'none'; // hide the container
  otherDiv.style.display = 'flex'; // show the other div
});