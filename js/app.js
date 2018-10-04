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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9yZXNwb25zaXZlLXByb2ZpbGUvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sUUFBUCxFQUFpQixLQUFqQixDQUF1QixZQUFVOztBQUU3QixZQUFRLEdBQVIsQ0FBWSwrQkFBWjs7QUFFQSxXQUFPLFNBQVAsRUFBa0IsS0FBbEIsQ0FBd0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sY0FBTjs7QUFFQSxZQUFJLFdBQVcsS0FBSyxJQUFwQjs7QUFFQSxZQUFJLFFBQVEsU0FBUyxLQUFULENBQWUsR0FBZixDQUFaO0FBQ0EsWUFBSSxPQUFPLE1BQU0sQ0FBTixDQUFYOztBQUVBLFlBQUksZ0JBQWdCLE9BQU8sTUFBSSxJQUFYLEVBQWlCLE1BQWpCLEVBQXBCO0FBQ0EsWUFBSSxhQUFhLGNBQWMsR0FBL0I7O0FBRUEsZUFBTyxZQUFQLEVBQXFCLE9BQXJCLENBQTZCLEVBQUMsV0FBVSxVQUFYLEVBQTdCLEVBQXFELEdBQXJEO0FBR0gsS0FkRDtBQWlCSCxDQXJCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUgYW5kIGZ1bGwgQ29kZSEnKTtcclxuXHJcbiAgICBqUXVlcnkoJy5zY3JvbGwnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiBcclxuICAgICAgICB2YXIgZnVsbF91cmwgPSB0aGlzLmhyZWY7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhcnRzID0gZnVsbF91cmwuc3BsaXQoJyMnKTtcclxuICAgICAgICB2YXIgdHJndCA9IHBhcnRzWzFdO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0X29mZnNldCA9IGpRdWVyeSgnIycrdHJndCkub2Zmc2V0KCk7XHJcbiAgICAgICAgdmFyIHRhcmdldF90b3AgPSB0YXJnZXRfb2Zmc2V0LnRvcDtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOnRhcmdldF90b3B9LCA1MDApO1xyXG5cclxuXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbn0pOyJdfQ==
