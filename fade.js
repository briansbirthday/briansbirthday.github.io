// jQuery script copied and pasted from Keith's answer at https://stackoverflow.com/questions/45844357/call-function-repeatedly-for-fade-in-and-fade-out-jquery?answertab=active#tab-top

$(function() {

  var showText = ["Brian's birthday is:", "August 14, 1997"];

  var
    showNum = 0,
    $showText = $('.showtext');

  function doShow() {
    $showText.text(showText[showNum]);
    $showText.fadeIn(1800, function() {
      $showText.fadeOut(1800, function() {
        //lets make it so it wraps back to the start
        showNum = (showNum + 1) % showText.length;
        doShow();
      });
    });

  }

  doShow();
});
