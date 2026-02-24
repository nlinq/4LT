(function ($) {
	"use strict";

       // Preloader
        $(".preloader").delay(1600).fadeOut("slow");
        

       // Sticky Menu
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
                $(".header-menu-area").addClass("sticky");
            } else {
                $(".header-menu-area").removeClass("sticky");
            }
        });


            
        // Mobile menu
        $('.hamburger').click(function (event) {
            $(this).toggleClass('h-active');
            $('.main-nav').toggleClass('slidenav');
        });
        $('.header-home .main-nav ul li  a').click(function (event) {
            $('.hamburger').removeClass('h-active');
            $('.main-nav').removeClass('slidenav');
        });

        $(".main-nav .fl").on('click', function(event) {
            var $fl = $(this);
            $(this).parent().siblings().find('.sub-menu').slideUp();
            $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
            if($fl.hasClass('flaticon-plus')){
                $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
            }else{
                $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
            }
            $fl.next(".sub-menu").slideToggle();
        });




        // Magnific Popup gallery
        $('.popup-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        gallery: {
          enabled: true
        },
        type: 'image'
        // other options
        });
          
        // Counter
         $('.counter').counterUp({
              delay: 10,
              time: 1000
          });

        //Mixitup
        $('.work-mixi').mixItUp();



        // Owl Carousel Service
        $('.service-all-slide').owlCarousel({
            
            items: 3,
            loop: true,
            margin:25,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: true,
            navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    autoplay: true
                },
                600:{
                    items:2,
                    nav:false,
                    autoplay: true
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true
                }
            } 
        });



        // Owl Carousel Team
        $('.team-all-slide').owlCarousel({
            
            items: 4,
            loop: true,
            margin:25,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: true,
            navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav: false,
                    autoplay: true
                },
                600:{
                    items:1,
                    nav: false,
                    autoplay: true
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            } 
        }); 


        // Owl Carousel Testimonial
        $('.testimonial-slide').owlCarousel({
            
            items: 1,
            loop: true,
            margin:25,
            smartSpeed: 1500,
            autoplay: false,
            dots: true,
            nav: false,
            navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                },
                1200:{
                    items:1
                }
            } 
        });  



      



      // Pricing Toggle

      var checkBox = document.querySelectorAll("#checbox")

      for(let i = 0; i < checkBox.length; i++){
        checkBox[i].addEventListener("click", ()=>{
          var text1 = document.querySelectorAll(".text1")
          var text2 = document.querySelectorAll(".text2")
          
          if(checkBox[i].checked == true){
            console.log(text2)
            text1.forEach((e)=>{
              e.style.display = "block";
            })
            text2.forEach((e)=>{
              e.style.display = "none";
            })
          } else if (checkBox[i].checked == false) {
            text1.forEach((e)=>{
              e.style.display = "none";
            })
            text2.forEach((e)=>{
              e.style.display = "block";
            })
          }

        })
      }



      // Contact Form

      // Get the form.
      var form = $('#contact-form');

      // Get the messages div.
      var formMessages = $('.form-message');

      // Set up an event listener for the contact form.
      $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
        })
        .done(function(response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Oops! An error occured. Message could not be sent.');
          }
        });
      });






    jQuery(window).load(function(){

            //wow Animation
            new WOW().init();
            window.wow = new WOW(
                          {
                          boxClass:     'wow',      // default
                          animateClass: 'animated', // default
                          offset:       0,          // default
                          mobile:       true,       // default
                          live:         true,        // default
                          offset: 100
                        }
                        )
                        window.wow.init();

        
    });





}(jQuery));	