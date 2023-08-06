$(document).ready(function () {
  var scrollDownButton = $("#scrollDownButton");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollDownButton.fadeIn();
    } else {
      scrollDownButton.fadeOut();
    }
    // Hide button when it reaches the end of the page
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      scrollDownButton.hide();
    }
  });
  scrollDownButton.click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow"); // Scroll to the end of the page
    return false;
  });
  // Initially hide the button when at the top
  if ($(window).scrollTop() === 0) {
    scrollDownButton.hide();
  }
});

// Bottom button added by preksha mahajan