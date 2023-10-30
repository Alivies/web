$(".set")
  .children("button")
  .each(function (index) {
    $(this).on("click", function () {
        var soundName = this.getAttribute('data-sound');
        var audio = new Audio('sounds/' + soundName + '.mp3');
        audio.play();
    });
  });