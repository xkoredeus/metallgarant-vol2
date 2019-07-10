$(function() {
  $('.begin__slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
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
  
	// tabs 
  $(document).ready(function () {
    $(".tabs-content__item:not(:first-child)").hide();
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
          zoom: 16
      });

      var placemarks = [
          {
              coords: [59.86663456, 30.47202250],
              icon: '/img/baloon.png',
              icon_size: [46, 52],
              icon_offset: [-23, -52], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
          },
          {
              coords: [59.82384206, 30.52547200],
              icon: '/img/baloon.png',
              icon_size: [46, 52],
              icon_offset: [-23, -52],
          },
          {
              coords: [60.54950006, 30.21664900],
              icon: '/img/baloon.png',
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
      $('.begin__nav-link-wrp').hover(function() {
        $(this).find('.begin__nav-sub').slideToggle();
        
      });
    };
    if ( $(window).width() < 1199 ) {
      $('.begin__nav-link').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings('.begin__nav-sub').slideToggle();
      })
    };
    //sidebar slice more than 3 items
    // $('.begin__nav-bot .begin__nav-link-wrp').slice(3).hide();
    // $('.begin__nav-more').on('click', function(){
    //   $('.begin__nav-link-wrp').slice(3).slideToggle();
    //   $(this).hide();
    // })
  //city dropdown
  $('.header__city-list').hide();
  if ( $(window).width() > 1199 ) {
    $('.header__city-wrp').hover(function(){
      $(this).children('.header__city-select').toggleClass('active');
      $(this).children('.header__city-list').slideToggle();
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
});