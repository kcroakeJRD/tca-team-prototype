/* ========================================================================= */
/* BE SURE TO COMMENT CODE/IDENTIFY PER PLUGIN CALL */
/* ========================================================================= */

jQuery(function($){

	//Team Page Options

	$('.team-slider').slick({
		centerMode: true,
		slidesToShow: 3,
		centerPadding: '10px',
		arrows: false,
		dots: false,
		asNavFor: '.team-bios',
		responsive: [
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 1,
				}
			}
		]

	});

	$('.team-bios').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.team-slider',
		dots: true,
		fade: true,
		arrows: false,
		swipe: false
	});
	
	// Navigation Buttons
	$('button.prev').on('click', function(){
		$('.row-two').css('background-position', '-=400 0');
		$('.row-one').css('background-position', '-=200 0');
		$('.team-slider').slick('slickPrev');
		$('.team-bios').slick('slickPrev');
	});

	$('button.next').on('click', function(){
		$('.row-two').css('background-position', '+=400 0');
		$('.row-one').css('background-position', '+=200 0');
		$('.team-slider').slick('slickNext');
		$('.team-bios').slick('slickNext');
	});

	// Swipping Actions
	$('.team-slider').on('swipe', function(event, slick, direction){
 		 if(direction === 'left'){

 			$('.row-two').css('background-position', '-=400 0');
			$('.row-one').css('background-position', '-=200 0');

 		 } else if(direction === 'right'){

			$('.row-two').css('background-position', '+=400 0');
			$('.row-one').css('background-position', '+=200 0');

 		 }

	});

    // PARALLAX
/*
    $(document).scroll(function(){
        var nm = $("html").scrollTop();
        var nw = $("body").scrollTop();
        var n = (nm > nw ? nm : nw);

        $('#element').css({
            'webkitTransform' : 'translate3d(0, ' + n + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + n + 'px, 0)',
            'msTransform'     : 'translateY('     + n + 'px)',
            'OTransform'      : 'translate3d(0, ' + n + 'px, 0)',
            'transform'       : 'translate3d(0, ' + n + 'px, 0)',
        });

        // if transform3d isn't available, use top over background-position
        //$('#element').css('top', Math.ceil(n/2) + 'px');

    });    
*/



    /* ====== Twitter API Call ============================================= 
        Note: Script Automatically adds <li> before and after template. Don't forget to setup Auth info in /twitter/index.php */
    /*
    $('#tweets-loading').tweet({       
        modpath: '/path/to/twitter/', // only needed if twitter folder is not in root
        username: 'jackrabbits',
        count: 1,
		template: '<p>{text}</p><p class="tweetlink">{time}</p>' 
	});
    */

});

