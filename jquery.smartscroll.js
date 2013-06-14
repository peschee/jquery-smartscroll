// http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function($, sr){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;

            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    // smartscroll
    jQuery.fn[sr] = function(fn, threshhold){  return fn ? this.bind('scroll', debounce(fn, threshhold)) : this.trigger(sr); };

})(jQuery,'smartscroll');

