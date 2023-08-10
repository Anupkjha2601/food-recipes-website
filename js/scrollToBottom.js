$(document).ready(function () {
  var scrollDownButton = $("#scrollDownButton");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollDownButton.fadeIn();
    } else {
      scrollDownButton.fadeOut();
    }
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      scrollDownButton.hide();
    }
  });
  scrollDownButton.click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow"); 
    return false;
  });
  if ($(window).scrollTop() === 0) {
    scrollDownButton.hide();
  }
});