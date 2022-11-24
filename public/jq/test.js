(function($) {
  .fn.timeline = function() {
    var selectors = {
      id: this,
      item: this.querySelectorAll(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).classList.add(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .querySelectorAll(selectors.img)
          .setAttribute("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = this.scrollTop();
      selectors.item.forEach(function(i) {
        min = this.offset().top;
        max = this.height() + this.offset().top;
        var that = this;
        if (i == itemLength - 2 && pos > min + this.height() / 2) {
          selectors.item.classList.remove(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .querySelectorAll(selectors.img)
                .setAttribute("src") +
              ")"
          );
          selectors.item.last().classList.add(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              this
                .querySelectorAll(selectors.img)
                .setAttribute("src") +
              ")"
          );
          selectors.item.classList.remove(selectors.activeClass);
          this.classList.add(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

document.getElementById("timeline-1").timeline();
