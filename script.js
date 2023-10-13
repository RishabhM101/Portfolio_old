
//viewport dimensions
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

console.log("Viewport width: " + viewportWidth + ", Viewport height: " + viewportHeight);


/*
window.addEventListener('load', function() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    document.body.classList.add('loaded');
}); 
*/
window.addEventListener('load', function() {
  var overlay = document.querySelector('.overlay');
  var loadedImages = 0;

  function checkIfImagesLoaded() {
      loadedImages++;
      if (loadedImages === 2) {
          overlay.style.display = 'none';
          document.body.classList.add('loaded');
      }
  }

  var img1 = new Image();
  img1.src = "images/bg_final1.png"
  img1.onload = checkIfImagesLoaded;

  var img2 = new Image();
  img2.src = "images/rocket_final.png";
  img2.onload = checkIfImagesLoaded;
});



window.addEventListener('scroll', function () {
  var menuContainer = document.querySelector('.menu-toggle')
 
  if (window.scrollY >= window.innerHeight) {
      menuContainer.style.opacity = 1;}
   

});



                        //Toggle Menu

function toggleMenuOff(){
  toggleMenu()
}
function toggleMenu() {

  // Toggle overlay
  var overlay = document.getElementById('menu-overlay');
  var menucont = document.getElementById('menu-container');

  if (overlay) {
    if (overlay.style.opacity == 0) {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        menucont.style.visibility = 'visible';
        
    } else {
        
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
        menucont.style.visibility = 'hidden';
    }
}

  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.classList.toggle('active');
  
  const menuContainer = document.getElementById('menu-container');
  menuContainer.classList.toggle('hidden');
  menuContainer.style.opacity = 1;

 
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item, index) => {
      setTimeout(() => {
          item.classList.toggle('active');
      }, index * 100);
  });
}


                        //Animated Text

window.onload = function() {

  let animationContainer = document.querySelector('.animated-title');
  let textData = animationContainer.getAttribute('aria-label');

  function splitWords() {
    let splitedText = textData.split(' ');
  
    splitedText.join('& &').split('&').forEach(function(e){
      let span = document.createElement('span');
      span.classList.add('animated-word');
      span.setAttribute('data-text', e); 
      animationContainer.appendChild(span);
    });
    splitLetters();
  }

  function splitLetters() {
    let animatedWords = document.querySelectorAll('.animated-word');
    animatedWords.forEach(function(e, i){
      e.getAttribute('data-text').split('').forEach(function(f, j) {
        f = f == ' ' ? '&#32;' : f;
        let span = document.createElement('span');
        span.classList.add('animated-element');
        span.setAttribute('aria-hidden', 'true'); 
        span.innerHTML = f;
        e.appendChild(span);
      });
      animate(e, i);
    })
  }

  function animate(e, i) {
    let wordCount = e.getAttribute('data-text').length;
    e.style.opacity = 1;
    e.classList.add('animate');
  }
  /*
  // Replay Button - For Demo purpose only
  window.replay = function() {
    let animatedWords = document.querySelectorAll('.animated-word');
    animatedWords.forEach(function(e, i){
      e.classList.remove('animate');
      e.style.opacity = 0;
      setTimeout(() => {
        animate(e, i);
      }, 500);
    })
  }
  */
  // Trigger the animation after the window has fully loaded
  splitWords();

                        
  
                                //Animated Paragraph

  function animateParagraphs() {
    let paragraphs = document.querySelectorAll('.animated-paragraph');
    let delay = 0;

    paragraphs.forEach(function(p, i){
        setTimeout(function() {
            p.style.opacity = 1;
        }, delay);
        delay += 1500; 
    });
}

// Trigger the animation after the window has fully loaded and animated-title is complete
setTimeout(function() {
    animateParagraphs();
}, 4000); //
}


                       //Scroll Button
/*
$(document).ready(function() {
  $('#scroll-button').click(function() {
    $('html, body').animate({
      scrollTop: $('.my_work_cont').offset().top - 30
    }, 1000);
  });
});


*/

                      // hidden my work box
window.onscroll = function() {
  var logo = document.querySelector('.logo');
  var textBox = document.querySelector('.text-box');
  var logoPosition = logo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3; // Adjust as needed

  if(logoPosition < screenPosition) {
      textBox.style.opacity = '1';
  } else {
      textBox.style.opacity = '0';
  }
};

                      //rocket launch
var rocketImage
var rocketImage;
function preloadImage() {
    rocketImage = new Image();
    if (window.matchMedia("(max-width: 768px)").matches) {
        // The viewport is less than 768 pixels wide, load mobile image
        rocketImage.src = 'images/Rocket_launch_final_mobile.png';
    } else {
        // The viewport is greater than or equal to 768 pixels wide, load desktop image
        rocketImage.src = 'images/Rocket_launch_final.png';
    }
    rocketImage.onload = function() {
        console.log('Image preloaded');
    }
}
preloadImage();

                    

function animateBackground() {

  var countdownContainer = document.getElementById('countdown');
  var rocketContainer = document.getElementById('rocketContainer');
  var headingElement = document.getElementById('headingText');

  // Hide the countdown container
  countdownContainer.style.display = 'none';

  // Add a class to trigger the jitter animation
  rocketContainer.classList.add('jitter-animation');

  // Change the text to 'Launched!'

  setTimeout(function() {
    document.getElementById('headingText').style.display = 'none';
}, 1100);

setTimeout(function() {
    document.getElementById('launchText').style.display = 'block';
}, 1500);


  var fixedBackground = document.querySelector('.fixed-background');
  var body = document.body;

  //fixedBackground.style.backgroundImage = "url('images/bg_final1.png')";

  if (window.matchMedia("(max-width: 768px)").matches) {
    // The viewport is less than 768 pixels wide, set mobile background image
    fixedBackground.style.backgroundImage = "url('images/bg_final_mobile.png')";
} else {
    // The viewport is greater than or equal to 768 pixels wide, set desktop background image
    fixedBackground.style.backgroundImage = "url('images/bg_final1.png')";
}
  //body.style.backgroundImage = "url('images/Rocket_launch_final.png')";
  body.style.backgroundImage = 'url(' + rocketImage.src + ')';

  //moving rocket up
  var element = document.getElementsByTagName("body")[0];
  element.style.animationName = "moveUp";
  element.style.animationDuration = "1s";
  element.style.animationTimingFunction = "linear";
  element.style.animationFillMode = "forwards";

  var keyframes = "@keyframes moveUp { 0% { background-position-y: 0px; } 100% { background-position-y: calc(-100vh + 100%); } }";
  var styleSheet = document.createElement("style");
  //styleSheet.type = "text/css";

  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

}



function startCountdown() {
  var button = document.querySelector('.big-button');
  var countdownContainer = document.getElementById('countdown');
  var countdownTimer = document.getElementById('countdownTimer');

  // Hide the button
  button.style.display = 'none';

  // Show the countdowncontainer
  countdownContainer.style.display = 'block';

  // Start countdown
  var count = 4;

  var countdownInterval = setInterval(function() {
      count--;
      if (count >= 0) { // Change from > to >=
          countdownTimer.textContent = count;
      } else {
          countdownTimer.textContent = 'Launch';
          clearInterval(countdownInterval);

          // Call the new function after countdown ends
         
          animateBackground()
          
      }
  }, 700);
}


