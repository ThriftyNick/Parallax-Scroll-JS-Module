# Parallax Scroll Module

This is an easy way to apply a parallax scrolling effect to any DOM element.  Use it on a background image to give your webpage an illusion of depth.

Usage:
1. include parallax.js in the head or near the bottom, before the `</body>` of your HTML document:
`<script src="path/to/parallax.js"></script>`  

2. Somewhere below the target element to apply the effect to, or before the `</body>`:

```javascript
<script>
    var tgtElem = document.querySelector('css_selector');
    var scrollSpeedPercentage = 20; //tgtElem will move at 20% relative to normal scroll speed.
    var scrollDirectionDown = false; //optional argument, default is false.  Shown here for clarity.
    ParallaxScroller.init(tgtElem, scrollSpeedPercentage, scrollDirectionDown);
</script>
```
