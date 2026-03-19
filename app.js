'use strict';

// Theme toggle
window.onload = function () {
  const switcher = document.querySelector('.theme-btn');
  if (switcher) {
    switcher.addEventListener('click', function () {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
    });
  }

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }
};

// Live clock
var timeDisplay = document.getElementById('time');
if (timeDisplay) {
  function refreshTime() {
    var dateString = new Date().toLocaleString();
    var formattedString = dateString.replace(', ', ' - ');
    timeDisplay.textContent = formattedString;
  }
  refreshTime();
  setInterval(refreshTime, 1000);
}

// Hobby slideshow with crossfade
var slideShow = document.getElementById('staticImage');
if (slideShow) {
  var img = [
    'hobbyimages/image1.jpg',
    'hobbyimages/image2.gif',
    'hobbyimages/image3.jpg',
    'hobbyimages/image4.png',
    'hobbyimages/image5.jpg',
    'hobbyimages/image6.jpg',
    'hobbyimages/image7.jpg',
    'hobbyimages/image8.jpg',
    'hobbyimages/image9.jpg',
    'hobbyimages/image10.jpg',
  ];

  var counter = 0;

  function showNextImage() {
    slideShow.classList.remove('loaded');

    setTimeout(function () {
      slideShow.src = img[counter];
      counter = (counter + 1) % img.length;
    }, 400);
  }

  slideShow.addEventListener('load', function () {
    slideShow.classList.add('loaded');
  });

  showNextImage();
  setInterval(showNextImage, 8000);
}
