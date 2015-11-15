//------------------------------------------------
// @ Simple Accordion Plugin
//------------------------------------------------
$.fn.accordion = function(t) {
  var e = {
      title: "accord-title",
      desc: "accord-content",
      active: "active",
      expand: "expand",
      collapse: "collapse",
      showtxt: !0,
      placefortxt: "accord-toggle",
      duration: 400,
      started: 0
    },

    t = $.extend({}, e, t);

  $(function() {
      $("." + t.desc).hide(),
        $("." + t.title).each(function(e, a) {
          e == t.started && $(this)
            .addClass(t.active)
            .siblings("." + t.desc)
            .addClass(t.active)
            .slideDown(t.duration)
        })
    }),

    $("." + t.title).click(function() {
      var e = $(this),
        a = !0;
      return e.hasClass(t.active) && (a = !1),

        $("." + t.desc)
        .slideUp(t.duration)
        .removeClass(t.active),

        $("." + t.title).removeClass(t.active),
        a && (e.addClass(t.active),
          e.siblings("." + t.desc)
          .addClass(t.active).slideDown(t.duration)), !1
    })
};