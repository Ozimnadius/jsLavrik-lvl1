(function ($) {

    $.fn.sliderN = function (settings) {

        var sl = $(this);

        console.log(sl);

        var defaults = {
            images: sl.find('img'),
            btnPrev: sl.find('.prev'),
            btnNext: sl.find('.next'),
            auto: false,
            rate: 1000
        };

        var options = $.extend(defaults, settings);

        this.each(function () {

            sl.images = options.images;
            sl.btnPrev = options.btnPrev;
            sl.btnNext = options.btnNext;
            sl.auto = options.auto;
            sl.rate = options.rate;

            function move(direction) {

                if (isRun) {
                    return
                }

                isRun = true;

                sl.images.eq(i)
                    .animate({
                            left: '-100' * direction + '%'
                        }, 1000,
                        function () {
                            $(this).css({opacity: 0})
                        });


                i += direction;

                if (i >= sl.images.length) {
                    i = 0;
                }

                else if (i < 0) {
                    i = sl.images.length - 1;
                }


                sl.images.eq(i)
                    .css({
                        left: '100' * direction + '%',
                        opacity: 1
                    })
                    .animate({
                            left: 0
                        }, 1000,
                        function () {
                            isRun = false;
                        });
            }

            var i = 0;

            var isRun = false;

            sl.prev = function () {
                move(-1);
            };

            sl.next = function () {
                move(1);
            };

            sl.btnPrev.on('click', function () {
                sl.prev();
            });

            sl.btnNext.on('click', function () {
                sl.next();
            });

            if (sl.auto) {
                setInterval(sl.next, sl.rate);
            }

        });

        return this;

    };

})(jQuery);

