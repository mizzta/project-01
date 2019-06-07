document.addEventListener("DOMContentLoaded", function () {

  // All of your code goes inside here

  // Most-loved Products Carousel
  const flkty = new Flickity('.main-carousel', {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
  })



  // Subscription

    const subscribe = document.getElementById("subscribe-form");
    const inputText = document.getElementById("email");

  subscribe.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let inputVal = inputText.value;

    if (inputVal === "") {
      alert('Please entered an valid email address!');
    } else {
      alert('Thank you for your subscribe!');
    }
  
  });
});
//end of document ready

