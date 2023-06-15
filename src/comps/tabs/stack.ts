var tabs = $(".tabs > li");

tabs.on("click", function () {
  tabs.removeClass("active");
  $(this).addClass("active");
});
