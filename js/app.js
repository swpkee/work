$(document).ready(function () {
  var prev = function () {
    var carousel = document.getElementById('carousel');
    carousel.prev();
  };

  var next = function () {
    var carousel = document.getElementById('carousel');
    carousel.next();
  };

  ons.ready(function () {
    var carousel = document.addEventListener('postchange', function (event) {
      console.log('Changed to ' + event.activeIndex)
    });
  });

  document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'home') {

      console.log("i");

      page.querySelector('#movie1').onclick = function () {
        console.log("i");
        document.querySelector('#myNavigator').pushPage('view/detailmovie1.html');
      };
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });
})

