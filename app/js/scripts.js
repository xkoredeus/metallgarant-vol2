$(function() {
  //preloader
  // $(window).on('load', function () {
  //     $('.preloader').fadeOut();
  // });
  $('.begin__slider').owlCarousel({
      nav: true,
      items: 1,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      smartSpeed: 800,
      dots: true,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"]
	});
  $('.trust__in').owlCarousel({
      nav: true,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1,
            nav: false,
            dots: true,
        },
        380 : {
            items: 2,
            nav: false,
            dots: true,
        },
        480 : {
            items: 2,
            nav: false,
            dots: true,
        },
        768 : {
            items: 3,
            nav: true,
            dots: false,
        },
        1040 : {
            items: 4
        },
        1100 : {
            items: 5
        }
      }
  });
  $('.sale-list__in').owlCarousel({
      nav: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
  });
  $('.rev__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        },
        1100 : {
            items: 5
        }
      }
  });
  $('.corp__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
  });
  $('.steel-descr__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
  });
  $('.serv__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        },
        1100 : {
            items: 5
        }
      }
  });
  $('.rev__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        },
        1100 : {
            items: 5
        }
      }
  });
  $('.team__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
  });
  $('.succ__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1,
            autoHeight: true
        },
        380 : {
            items: 1,
            autoHeight: true
        },
        570 : {
            items: 1,
            autoHeight: true
        },
        768 : {
            items: 1
        },
        1040 : {
            items: 3,
            autoWidth:true
        }
      }
  });
  $('.hot__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      autoplay: false,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1,
            nav: false,
            autoplay: true,
            dots: true,
        },
        768 : {
            items: 2
        },
        1040 : {
            items: 3
        }
      }
  });
  $('.del__banner').owlCarousel({
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      smartSpeed: 800,
      margin: 10,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
      responsive : {
        0   : {
            items: 1,
            dots: true,
            nav: false,
        },
        768 : {
            items: 2,
            dots: false
        },
        1040 : {
            items: 3,
            dots: false
        }
      }
  });
  //login/reg popups
  $('.header__cab').on('click', function(e) {
    e.preventDefault();
    $('.header__cab-in-wrp_log').slideToggle(50);
  })
  $('.header__cab-show-reg').on('click', function(e){
    e.preventDefault();
    $('.header__cab-in-wrp_log').slideToggle(50);
    $('.header__cab-in-wrp_reg').slideToggle(50);
  });
  $('.header__cab-ttl-btn').on('click', function(){
    $(this).parents('.header__cab-in-wrp').slideToggle(50);
  });
  $('.header__cab-show-log-link').on('click', function(e){
    e.preventDefault();
    $('.header__cab-in-wrp_reg').slideToggle(50);
    $('.header__cab-in-wrp_log').slideToggle(50);
  });
  

  //catalog list|tab view
  if ( $(window).width() > 1200 ) {
    $('.roll__list').addClass('view__row');
  };
  $('.roll__view').on('click', function(){
    var view = $(this).attr('data-view');
    $('.roll__view').removeClass('active');
    $('.roll__view[data-view="'+view+'"]').addClass('active');
    console.log(view);
    $('.roll__list').removeClass('view__col view__row').addClass(view);
  });
	// tabs 
  if ( $(window).width() > 600 ) {
    $(document).ready(function () {
      $(".tabs__content-item:not(:first-child)").hide();
      $(".tabs__container div.tabs__content-item.active-tab").show();
      $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
          var thisLi = $(this);
          var numLi = thisLi.index();
          thisLi.addClass('active').siblings().removeClass('active');
          thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
      });
    });
  };
  if ( $(window).width() < 600 ) {
    $('.tabs-acc__btn').on('click', function(){
      $(this).toggleClass('active').siblings('.tabs-acc__cnt').slideToggle();
    })
  };
  $('.car__acc-item-top').on('click', function(){
    $(this).parent('.car__acc-item').toggleClass('active').find('.car__acc-item-cnt').slideToggle();
  });
  $('.cab-table__det').on('click', function(){
    $(this).toggleClass('active').parents('.cab-table__item').find('.cab-table__item-bot').slideToggle();
  });
  $('.cab-pers__item-change').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active').parents('.cab-pers__item').find('.cab-pers__item-cnt').slideToggle();
  });
  // $('.cart__item-next').on('click', function(e){
  //   e.preventDefault();
  //   $(this).parents('.cart__item-cnt').slideToggle().parents('.cart__item').toggleClass('active checked').next('.cart__item').find('.cart__item-cnt').slideToggle();
  // });
  
  

  //Стилизованный input type file
  $(".upload__file").change(function() {
    var filename = [];
    for (var i = 0; i < $(this).get(0).files.length; ++i) { // Запускаем цикл и перебираем все файлы
      filename.push($(this).get(0).files[i].name.slice(0, 18) + '...'); // Добавляем имена файлов в массив
    }
    $(this).next(".filename").text(filename.join(", "));
    $(this).parent().next('.upload__file-status').css('display','none');
  });
  //roll page slider
  var sync1 = $('.roll-page__img-top');
  var sync2 = $('.roll-page__img-bot');

  var thumbnailItemClass = '.owl-item';

  var slides = sync1.owlCarousel({
    // video:true,
    startPosition: 1,
    items:1,
    loop:true,
    margin:10,
    nav: false,
    navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
    dots: false,
    smartSpeed: 700,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
  }
  var thumbs = sync2.owlCarousel({
    startPosition: 1,
    items:4,
    loop:false,
    margin: 15,
    autoplay:false,
    navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
    dots: false,
    responsive : {
      0   : {
          items: 3,
          // autoHeight: true
      },
      768 : {
          items: 4,
      },
      1040 : {
          items: 5,
          mouseDrag: false
      }
    },
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });
  //map
  // $('.contact__pan-item:not(:last-child)').hide();
  $(document).ready(function () {
    var myMap;

    $('.js-tab-contact').on('click', function(){
        if (!$(this).hasClass('contact__item_active')) {
            $(this).addClass('contact__item_active').siblings().removeClass('contact__item_active')
            var arCoord = $(this).data('coord');
            myMap.panTo(arCoord, {
                delay: 3500
            });
        }

          // $('.contact__pan-item').hide();
          // $('.contact__pan-item[data-tab="' + $(this).attr('data-tab') + '"]').slideToggle();
    });

    ymaps.ready(init);
    function init(){
      myMap = new ymaps.Map("ymap_tabs", {
          center: [59.86663456, 30.47202250],
          zoom: 16,
          // scrollZoom: false,
          controls: ["typeSelector"],
      });
      myMap.behaviors.disable('drag');
      myMap.behaviors.disable('scrollZoom'); 
      var placemarks = [
          {
              coords: [59.86663456, 30.47202250],
              icon: 'img/baloon.svg',
              icon_size: [46, 52],
              icon_offset: [-23, -52], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
          },
          {
              coords: [59.82384206, 30.52547200],
              icon: 'img/baloon.svg',
              icon_size: [46, 52],
              icon_offset: [-23, -52],
          },
          {
              coords: [60.54950006, 30.21664900],
              icon: 'img/baloon.svg',
              icon_size: [46, 52],
              icon_offset: [-23, -52],
          }
      ];

      placemarks.forEach(function(item){
          var obj = new ymaps.Placemark(
              item.coords,
              {},
              {
                  iconLayout: 'default#image',
                  iconImageHref: item.icon,
                  iconImageSize: item.icon_size,
                  iconImageOffset: item.icon_offset,
              }
          );
          myMap.geoObjects.add(obj);
      });
    };
  });
  //sales timer
  function makeTimer() {

    var endTime = new Date("29 September 2019 9:56:00 GMT+04:00");      
      endTime = (Date.parse(endTime) / 1000);

      var now = new Date();
      now = (Date.parse(now) / 1000);

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400); 
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }

      $("#days").html("<div>" + days + "</div>" + "<span>дни</span>");
      $("#hours").html("<div>" + hours + "</div>" + "<span>часы</span>");
      $("#minutes").html("<div>" + minutes + "</div>" + "<span>минуты</span>");
      $("#seconds").html("<div>" + seconds + "</div>" + "<span>секунды</span>");
  }

  setInterval(function() { makeTimer(); }, 1000);
  //mobile menu
  $(".banner__hamburger").on('click',function() {
      $(this).toggleClass("active");
      $('.banner__nav').toggleClass("active");
      // $('body').toggleClass("fixed");
  });
  //sidebar
    //sidebar nav
    $('.begin__nav-sub').hide();
    if ( $(window).width() > 1199 ) {
      $('.begin__nav-link-wrp').hover( function() {
        $(this).siblings('.begin__nav-link-wrp').find('.begin__nav-sub').hide(0);
        $(this).find('.begin__nav-sub').slideToggle(50);
      });
    };
    if ( $(window).width() < 1199 ) {
      $('.begin__nav-link').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings('.begin__nav-sub').slideToggle();
      })
    };
  //sidebar slice more than 3 items
  $('.begin__nav_1 .begin__nav-link-wrp').slice(3).hide();
  $('.begin__nav_2 .begin__nav-link-wrp').slice(3).hide();
  $('.begin__nav_3 .begin__nav-link-wrp').slice(3).hide();
  $('.begin__nav_4 .begin__nav-link-wrp').slice(3).hide();
  $('.begin__nav-more').on('click', function(){
    // $(this).hide();
    $(this).parent('.begin__nav-bot').toggleClass('active').find('.begin__nav-link-wrp').slice(3).slideToggle();
  });
  //city dropdown
  $('.header__city-list').hide();
  if ( $(window).width() > 1199 ) {
    $('.header__city-wrp').hover(function(){
      $(this).children('.header__city-select').toggleClass('active');
      $(this).children('.header__city-list').slideToggle(50);
    });
  };
  if ( $(window).width() < 1199 ) {
    $('.header__city-list').hide();
    $('.header__city-wrp').on('click', function(){
      $(this).children('.header__city-select').toggleClass('active');
      $(this).children('.header__city-list').slideToggle();
    });
  };
  //footer dropdown
  if ( $(window).width() < 600 ) {
    $('.footer__link').hide();
    $('.footer__ttl_mobile').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active').next('div').find('.footer__link').slideToggle();
    });
  };
  //hide filter in sidebar
  if ( $(window).width() < 1200 ) {
    $('.begin__nav_filter .begin__nav-bot').hide();
    $('.begin__nav_filter .begin__nav-top').on('click', function(e){
      e.preventDefault();
      $(this).next('.begin__nav-bot').slideToggle().parent().toggleClass('active');
    });
  };
  //filter float submit
  // $('.begin__nav_filter select').on('change', function() {
  //   console.log($(this).position());
  // });
  // $('.begin__nav_filter input').on('change', function() {
  //   console.log($(this).offset());
  // });
  //input type number
  $( '.quantity' ).on( 'click', '.quantity-minus, .quantity-plus', function (e) {
    e.preventDefault();
  var input = $( this ).siblings( '.quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });
  //del calc
    //distance
    $(".del-calc__input_dis").on('input', function () {
      var x = $(this).val();
      // console.log(x);
      $(this).css({'background': 'linear-gradient(left ,#134284 0%,#134284 ' + x/10 + '%,#C4C4C4 ' + x/10 + '%, #C4C4C4 100%)'});
      $(this).css({'background': '-webkit-linear-gradient(left ,#134284 0%,#134284 ' + x/10 + '%,#C4C4C4 ' + x/10 + '%, #C4C4C4 100%)'});
      $(this).css({'background': '-moz-linear-gradient(left ,#134284 0%,#134284 ' + x/10 + '%,#C4C4C4 ' + x/10 + '%, #C4C4C4 100%)'});
      $('.del-calc__res_dis-num').html(x-1);
    });
    //mass
    $(".del-calc__input_mas").on('input', function () {
      var x = $(this).val();
      // console.log(x);
      $(this).css({'background': 'linear-gradient(left ,#134284 0%,#134284 ' + x + '%,#C4C4C4 ' + x + '%, #C4C4C4 100%)'});
      $(this).css({'background': '-webkit-linear-gradient(left ,#134284 0%,#134284 ' + x + '%,#C4C4C4 ' + x + '%, #C4C4C4 100%)'});
      $(this).css({'background': '-moz-linear-gradient(left ,#134284 0%,#134284 ' + x + '%,#C4C4C4 ' + x + '%, #C4C4C4 100%)'});
      $('.del-calc__res_mas-num').html(x-1);
    });
    //result
    $('.del-calc__in input[type="range"]').on('change', function(){
      var dis = $('.del-calc__input_dis').val();
          dis = dis-1;
      var mas = $('.del-calc__input_mas').val();
          mas = mas-1;
      var res = $('.del-calc__res-item_sum-num');
      res = res.text(dis*mas);
      
      console.log(res);
    });
    //form
    $('.del-calc__form-wrp').hide();
    $('.del-calc__btn').on('click', function(){
      $(this).css('display','none').siblings('.del-calc__form-wrp').slideToggle();
    })
  // Самописный placeholder
  $(function () {
  var placeholderText = [
    "Арматура",
    "Катанка",
    "Труба",
    "Круг",
    "Балка",
    "Швеллер",
    "Профнастил",
  ];
    var $pls = $('.banner__search-input');
    $pls.placeholderTypewriter({
      text: placeholderText,
      delay: 150,
      pause: 1500,
    });
  });
  $('.feed__bot').hide();
  $('.feed input').change(function() {
    $(this).parents('.feed').find('.feed__bot').slideDown();
  });
  if ( $(window).width() < 1200 ) {
    $('.banner__test-list').removeClass('row').addClass('owl-carousel');
    $('.banner__test-item-wrp').removeClass('col-xl-3 col-sm-6 mb-5 mb-xl-3');

    $('.banner__test-list').owlCarousel({
      nav: false,
      autoplay: true,
      loop: true,
      smartSpeed: 700,
      margin: 20,
      dots: true,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 2
        },
        800 : {
            items: 3
        }
      }
   });
    new Mmenu( "#menu", {
       "slidingSubmenus": false
    });

      document.addEventListener( 'click', ( evnt ) => {
        let anchor = evnt.target.closest( 'a[href^="#/"]' );
        if ( anchor ) {
          alert('Thank you for clicking, but that\'s a demo link.');
          evnt.preventDefault();
        }
      });
    };

});