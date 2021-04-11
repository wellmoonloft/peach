  // fancybox js
  let fancyTimer = setInterval(function(){
  if(!window.$){
    return;
  }
  $(document).ready(function() {
    $(".markdown-body img").each(function () {
      if($(this).parent().get(0).tagName.toLowerCase() === "a") {
        return;
      }
      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("style", "text-decoration: none; outline: none; border: 0px none transparent;");
      if ($(this).attr("data-original")) {
        $(element).attr("href", $(this).attr("data-original"));
      } else {
        $(element).attr("href", $(this).attr("src"));
      }
      $(this).wrap(element);
    });

    clearInterval(fancyTimer);
  });
  }, 10); 
