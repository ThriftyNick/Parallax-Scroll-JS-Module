/**
* File parallax.js
* Author: Thriftynick
* Author URI: https://thriftynick.com
* Version: 1.0.0
*
* Parallax scrolling effect applied to a background image
*/

var ParallaxScroller = (function() {
  var _scrollDirectionDown;
  var _speedPercentage = 0;
  var _tgtElem = null;

  /*
  * @param tgtElem - The DOM element to apply the effect to
  * @param speedPercentage - The speed in percentage relative to the main scroll speed to scroll the target element
  * @param scrollDirectionDown - (optional) set to true to scroll the element from top to bottom.  Default direction
  *  is bottom to top.
  */
  var init = function(tgtElem, speedPercentage, scrollDirectionDown = false) {
    _tgtElem = tgtElem;
    _speedPercentage = speedPercentage;
    _scrollDirectionDown = scrollDirectionDown;

    _tgtElem.style.position = 'fixed';
    _tgtElem.style.top = '0';
    _tgtElem.style.left = '0';

    window.requestAnimationFrame = window.requestAnimationFrame
     || window.mozRequestAnimationFrame
     || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame
     || function(f){setTimeout(f, 1000/60)};

      window.addEventListener('scroll', function(){ // on page scroll
       requestAnimationFrame(_run) // call _run() on next available screen paint
      }, false);
  };

  var _run = function() {
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
    var direction = _scrollDirectionDown ? 1 : -1;
    _tgtElem.style.top = direction * (scrolltop * (_speedPercentage / 100)) + 'px'; // move element at _speedPercentage% of scroll rate
  }

  return {
    init: init
  };
})();
