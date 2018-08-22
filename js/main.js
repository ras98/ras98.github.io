$(document).ready(function(){
	setTimeout(function(){
		$(".loader").css("opacity", "0");
		setTimeout(function(){$(".loader").hide();}, 300);
	}, 3000);
	
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
	});
	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 5,
		margin: 10,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			1400: {
				items: 5,
				dots: false
			},
			1300: {
				items: 4,
				dots: false
			},
			850: {
				items: 3
			},
			550: {
				items: 2
			},
			300: {
				items: 1
			}
		}



	});

	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
					labels: ["HTML 5", "CSS 3", "Sass", "Java Script", "JQery", "Gulp"],
					datasets: [{
							data: [20, 20, 15, 10, 20, 15],
							backgroundColor: [
									'rgba(237, 94,38,.3)',
									'rgba(42,166,228,.3)',
									'rgba(198,83,140,.3)',
									'rgba(247,223,30,.3)',
									'rgba(27,117,187,.3)',
									'rgba(232,76,80,.3)'
							],
							borderColor: [
								'rgba(237, 94,38,1)',
								'rgba(42,166,228,1)',
								'rgba(198,83,140,1)',
								'rgba(247,223,30,1)',
								'rgba(27,117,187,1)',
								'rgba(232,76,80,1)'
							],
							borderWidth: 1
					}]
			},
			options: {
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 0,
							bottom: 0
						}
					},
					legend: {
						display: false
					}
			}
	});
	$('.parallax-window').parallax({imageSrc: 'images/parallax-3.jpeg'});
});


