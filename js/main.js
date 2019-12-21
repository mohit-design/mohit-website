$(document).ready(function() {
  // Mobile Burger Menu JS
  $(".burger-menu").click(function() {
    // Sidebar JS
    $(".fixed-sidebar").toggleClass("active");
    // Mobile Burger Menu JS
    $(".hamburger-menu").toggleClass("active");
    // Body JS
    $("body").toggleClass("overflow-hidden");
    // Blur JS
    $(".bg-blur").toggleClass("active");
  });
  // Navigationbar active and inactive js
  $(".menu-listing > li > a").click(function() {
    $(".menu-listing > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
    // Mobile Active and Inactive Sidebar JS
    $(".fixed-sidebar").removeClass("active");
    // Mobile Hamburger Menu JS
    $(".hamburger-menu").removeClass("active");
    // Body JS
    $("body").removeClass("overflow-hidden");
    // Mobile Blur JS
    $(".bg-blur").removeClass("active");
  });
  // Smooth Animation On Click of Navigationbar Menu
  $(".menu-listing > li > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400);
    }
  });
  // OnScroll Active Class and Remove Class
  $('.menu-listing').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 1400,
    scrollThreshold: 0.10,
    filter: '',
    easing: 'swing'
  });
  // Portfolio Listing JS
  $(".portfolio-listing").on("click", "li", function() {
    var tabsId = $(this).attr("id");
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + tabsId + "-view").addClass("show-portfolio").siblings().removeClass("show-portfolio");
  });
  // Capitalize string every 1st chacter of word to uppercase
  $('#userFirstName').keyup(function() {
    var userName = $('#userFirstName').val(); 
    var nameSplit = userName.split(" ");
    for ( var i = 0; i < nameSplit.length; i++ ) {
      var j = nameSplit[i].charAt(0).toUpperCase();
      nameSplit[i] = j + nameSplit[i].substr(1);
    }
    $('#userFirstName').val(nameSplit.join(" "));
  });
  $('#userLastName').keyup(function() {
    var userName = $('#userLastName').val(); 
    var nameSplit = userName.split(" ");
    for ( var i = 0; i < nameSplit.length; i++ ) {
      var j = nameSplit[i].charAt(0).toUpperCase();
      nameSplit[i] = j + nameSplit[i].substr(1);
    }
    $('#userLastName').val(nameSplit.join(" "));
  });
  // Allow Only Character JS
  $('#userFirstName,#userLastName').keydown(function (e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;
      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
      }
    }
  });
  // Allow Only Numeric JS
  $("#userMobile").keypress(function (e) {
   //if the letter is not digit then display error and don't type anything
   if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
   }
 });
  // Water Ripple Effect js
  $('.bg-banner').ripples({
    resolution: 256,
    perturbance: 0.07
  });
  // Disabled Ctrl+U and Ctrl+C
  $(document).keydown(function(event) { 
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
      //disable key press porcessing
      return false; 
    }
  });
})
// When we refresh, page goes to the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
// Remove URL when we refresh the page JS
history.replaceState(null, null, ' ');
// When the user scrolls the page, Scroll width ( progress ) Increase 
window.addEventListener("scroll", event => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = 100*scrollTop/scrollHeight;
  document.querySelector(".display-progress").style.width = progress + "%";
});
// Disbaled Right Click
window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});