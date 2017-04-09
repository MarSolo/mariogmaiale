// Loader
//*******************
// Wait for window load
$(window).load(function() {
// Animate loader off screen
$(".loading").fadeOut("slow");;
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 200, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Portfolio and Portfolio Filter Styles 
//*******************
// Portfolio Masonry
$(window).load(function(){
if ( $('#portfolio-masonry').length > 0 ) {
		// Call to Masonry plugin
		var portfoliomasonry = $('#portfolio-masonry').isotope({
			itemSelector: '.single-item',
			layoutMode: 'fitRows',
			transitionDuration: '.6s',
			hiddenStyle: {
				opacity: 0,
				transform: "scale(.85)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		});

// Filtering the portfolio items
$('#portfolio-masonry-sort a').on( 'click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ( $this.parent('li').hasClass('active') ) {
				return false;
			} else {
				$this.parent('li').addClass('active').siblings('li').removeClass('active');
			}
			var filterValue = $this.data('target');
			portfoliomasonry.isotope({ filter: filterValue });
			return $this;
		});


// Portfolio details modals
$('#portfolioModal').on('show.bs.modal', function (event) {
			var button = $(event.relatedTarget),
			title = button.data('title'),
			description = button.data('description'),
			imageSrc = button.data('image'),
			link = button.data('link'),
			modal = $(this);
			if ( title ) {
				modal.find('.modal-title').text(title);
			}
			if ( description ) {
				modal.find('.modal-body .description').html("<p>"+description+"</p>");
			}
			if ( imageSrc ) {
				modal.find('.modal-body .portfolio-image').attr('src', imageSrc);
			}
			if ( link ) {
				modal.find('.js-portfolio-link').show().attr('href', link);
			} else {
				modal.find('.js-portfolio-link').hide();
			}
		});
	}
});

// Owl Carousel for Testimonials
$(document).ready(function() {
      $("#owl-testimonials").owlCarousel({
      slideSpeed : 300,
      pagination: true,
      singleItem : true,
	  stopOnHover:false,
	  autoPlay: 5000,
	  navigation : false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
      });
	  
	     $("#owl-features").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  pagination:true,
	   navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
 
  });
  
  	    $("#owl-clients").owlCarousel({
 		navigation : false,
		pagination:false,
      autoPlay: 8000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3]
 
  });
  
     $("#owl-folio").owlCarousel({
 		navigation : false,
		pagination:true,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3]
 
  });
  
        $("#owl-header").owlCarousel({
     slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: true,
    rewindNav: true,
	  stopOnHover:true,
	  navigation : true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
      });
  
// Easy Pie Chart for Skills Section	  
$(function() {
  $('.chart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 5,
    lineCap: 'round',
    barColor: '#4AA8D3',
    trackColor:	"#ecf0f1",
    size: 120,
    animate:2000
  });
});	  
    });
	

// Nav Affix Adjustment
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	



// Adjustment for the Map embed (diabling pointer events when scrolling)
$(document).ready(function() {
    $('#map').click(function () {
        $('section#map iframe').css("pointer-events", "auto");
    });
    
    $( "#map" ).mouseleave(function() {
      $('section#map iframe').css("pointer-events", "none"); 
    });
	  $('#contact').click(function () {
        $('section#contact iframe').css("pointer-events", "auto");
    });
    
    $( "#contact" ).mouseleave(function() {
      $('section#contact iframe').css("pointer-events", "none"); 
    });
 });                  
 
// Counter  
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Bootstrap Modal for Job Applications
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// WOW.JS connected with Animate.css to animate content 
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       50,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();


// Magnific Popup Gallery
//*******************
$('.gallery-item').magnificPopup({
  fixedContentPos: false,
  type: 'image',
  gallery:{
    enabled:true
  },
  image: {
    // options for image content type
    titleSrc: 'title'
  }
});

// Hover
//*******************
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


// Fixes Dropdown Bug
//*******************
