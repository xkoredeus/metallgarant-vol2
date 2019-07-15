$(function() {
  $('.begin__slider').owlCarousel({
      nav: true,
      items: 1,
      autoplay: true,
      autoplayHoverPause: true,
      loop: true,
      smartSpeed: 800,
      dots: true,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
	});
  $('.trust__in').owlCarousel({
      nav: true,
      loop: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
  $('.sale-list__in').owlCarousel({
      nav: true,
      smartSpeed: 800,
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        570 : {
            items: 1
        },
        768 : {
            items: 2,
            autoWidth:true
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
      margin: 20,
      dots: false,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
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
  //catalog list|tab view
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
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
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
    nav: true,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
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
              icon: 'img/baloon.png',
              icon_size: [46, 52],
              icon_offset: [-23, -52], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
          },
          {
              coords: [59.82384206, 30.52547200],
              icon: 'img/baloon.png',
              icon_size: [46, 52],
              icon_offset: [-23, -52],
          },
          {
              coords: [60.54950006, 30.21664900],
              icon: 'img/baloon.png',
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
    $(this).hide();
    $(this).parent('.begin__nav-bot').find('.begin__nav-link-wrp').slice(3).slideToggle();
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
  //filter float submit
  // $('.begin__nav_filter select').on('change', function() {
  //   console.log($(this).position());
  // });
  // $('.begin__nav_filter input').on('change', function() {
  //   console.log($(this).offset());
  // });
  //input type number
  $( '.quantity' ).on( 'click', '.quantity-minus, .quantity-plus', function () {
  var input = $( this ).siblings( '.quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });
});