'use strict';

/**
var now = new Date();

var logData = {
  page: window.location.href,
  timestamp: now.toISOString(),
  user_agent: navigator.userAgent,
  language: navigator.language,
  platform: navigator.platform,
  ip: window.location.href.split('/')[2]
};

var existingLogData = JSON.parse(localStorage.getItem('logData')) || [];
existingLogData.push(logData);

console.log(logData);
*/

window.onload = function () {

const switcher = document.querySelector('.theme-btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');


    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

}



function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);



var slideShow = document.getElementById("staticImage")

const img = [ 
  "hobbyimages/image1.jpg",
  "hobbyimages/image2.gif",
  "hobbyimages/image3.jpg",
  "hobbyimages/image4.png",
  "hobbyimages/image5.jpg",
  "hobbyimages/image6.jpg",
  "hobbyimages/image7.jpg",
  "hobbyimages/image8.jpg",
  "hobbyimages/image9.jpg",
  "hobbyimages/image10.jpg",
];

var counter = 0;

function loopTimer () {
  slideShow.src = img[counter];
  counter++;

  if (counter < img.length) {
    setTimeout(loopTimer, 10000);
  }
  else {
    counter = 0;
    setTimeout(loopTimer, 10000);
  }
}

loopTimer();

//slideShow.src = img[3];