(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

jQuery(document).ready(function () {

    console.log('Made with love and full Code!');

    jQuery('.scroll').click(function (event) {
        event.preventDefault();

        var full_url = this.href;

        var parts = full_url.split('#');
        var trgt = parts[1];

        var target_offset = jQuery('#' + trgt).offset();
        var target_top = target_offset.top;

        jQuery('html, body').animate({ scrollTop: target_top }, 500);
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTAyLXJlc3BvbnNpdmUtcHJvZmlsZS9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxRQUFQLEVBQWlCLEtBQWpCLENBQXVCLFlBQVU7O0FBRTdCLFlBQVEsR0FBUixDQUFZLCtCQUFaOztBQUVBLFdBQU8sU0FBUCxFQUFrQixLQUFsQixDQUF3QixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxjQUFOOztBQUVBLFlBQUksV0FBVyxLQUFLLElBQXBCOztBQUVBLFlBQUksUUFBUSxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQVo7QUFDQSxZQUFJLE9BQU8sTUFBTSxDQUFOLENBQVg7O0FBRUEsWUFBSSxnQkFBZ0IsT0FBTyxNQUFJLElBQVgsRUFBaUIsTUFBakIsRUFBcEI7QUFDQSxZQUFJLGFBQWEsY0FBYyxHQUEvQjs7QUFFQSxlQUFPLFlBQVAsRUFBcUIsT0FBckIsQ0FBNkIsRUFBQyxXQUFVLFVBQVgsRUFBN0IsRUFBcUQsR0FBckQ7QUFHSCxLQWREO0FBaUJILENBckJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSBhbmQgZnVsbCBDb2RlIScpO1xyXG5cclxuICAgIGpRdWVyeSgnLnNjcm9sbCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuIFxyXG4gICAgICAgIHZhciBmdWxsX3VybCA9IHRoaXMuaHJlZjtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGFydHMgPSBmdWxsX3VybC5zcGxpdCgnIycpO1xyXG4gICAgICAgIHZhciB0cmd0ID0gcGFydHNbMV07XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRfb2Zmc2V0ID0galF1ZXJ5KCcjJyt0cmd0KS5vZmZzZXQoKTtcclxuICAgICAgICB2YXIgdGFyZ2V0X3RvcCA9IHRhcmdldF9vZmZzZXQudG9wO1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6dGFyZ2V0X3RvcH0sIDUwMCk7XHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxufSk7Il19
