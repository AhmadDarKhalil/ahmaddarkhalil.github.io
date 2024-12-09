window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
    // Carousel options
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 12000,
    };

    // Initialize all carousels
    var carousels = bulmaCarousel.attach('.carousel', options);
	

    // Attach slider
    bulmaSlider.attach();

    // Reset video when the slide changes
    carousels.forEach(carousel => {
        carousel.on('before:show', state => {
            // Reset all videos
            carousel.slides.forEach(slide => {
                const video = slide.querySelector('video');
                if (video) {
                    // video.pause();          // Pause the video
                    video.currentTime = 0; // Reset to the start
                }
            });
        });

        carousel.on('after:show', state => {
            // Optionally autoplay video if the current slide has a video
            const currentSlide = carousel.slides[state.index];
            const video = currentSlide.querySelector('video');
            if (video) {
                video.play();
            }
        });
    });
});


$(document).ready(function () {
    // Carousel options
    var options = {
        slidesToScroll: 1,
        slidesToShow: 2,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
    };

    // Initialize all carousels
    var carousels = bulmaCarousel.attach('.carousel2', options);
	

    // Attach slider
    bulmaSlider.attach();

    // Reset video when the slide changes
    carousels.forEach(carousel => {
        carousel.on('before:show', state => {
            // Reset all videos
            carousel.slides.forEach(slide => {
                const video = slide.querySelector('video');
                if (video) {
                    // video.pause();          // Pause the video
                    video.currentTime = 0; // Reset to the start
                }
            });
        });

        carousel.on('after:show', state => {
            // Optionally autoplay video if the current slide has a video
            const currentSlide = carousel.slides[state.index];
            const video = currentSlide.querySelector('video');
            if (video) {
                video.play();
            }
        });
    });
});


$(document).ready(function () {
    // Carousel options
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 13000,
    };

    // Initialize all carousels
    var carousels = bulmaCarousel.attach('.carousel3', options);
	

    // Attach slider
    bulmaSlider.attach();

    // Reset video when the slide changes
    carousels.forEach(carousel => {
        carousel.on('before:show', state => {
            // Reset all videos
            carousel.slides.forEach(slide => {
                const video = slide.querySelector('video');
                if (video) {
                    // video.pause();          // Pause the video
                    video.currentTime = 0; // Reset to the start
                }
            });
        });

        carousel.on('after:show', state => {
            // Optionally autoplay video if the current slide has a video
            const currentSlide = carousel.slides[state.index];
            const video = currentSlide.querySelector('video');
            if (video) {
                video.play();
            }
        });
    });
});


$(document).ready(function () {
    // Carousel options
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Initialize all carousels
    var carousels = bulmaCarousel.attach('.carousel4', options);
	

    // Attach slider
    bulmaSlider.attach();

});

