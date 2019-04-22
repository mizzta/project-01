document.addEventListener("DOMContentLoaded", function () {

  // All of your code goes inside here

  // Most-loved Products Carousel
  const flkty = new Flickity('.main-carousel', {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
  })



  // Subscribe
  const subscribeForm = document.getElementById("sub-btn");
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputText.mailformat = false) {
      alert('Please entered an invalid email address!');
    } else {
      alert('Thank you for your subscribe!');
    }


  });
});
//end of document ready