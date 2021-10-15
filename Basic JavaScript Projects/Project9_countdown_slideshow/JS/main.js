function countdown() {//function name
    var seconds = document.getElementById("seconds").value; //.value links to the value in html. (what is entered into the input box by user). Seconds variable is equal to the value

    function tick() {// function name
        seconds = seconds - 1; //seconds variable is equal to the amount enter and decreasing by increments of -1 (as written in the line code 58 after =)
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if(seconds == -1) { //if statement shows that if the clock is at -1 then output alert window with string. 
            alert("Time's up!"); // Pop up window notification of time up
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
