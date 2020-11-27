/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */

	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this),
			// --------------   MY EVENT
			'resized.owl.carousel': $.proxy(function(e) {
				console.log("RESIZE");
				console.log(this);
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),

		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};



	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: true,
		autoHeightClass: 'owl-height'
	};
	

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		/*$.each(visible, function(index, item) {
			heights.push($(item).height());
		}); // были ток визибл элементы */

		// --------------   MY ARRAY: for ALL items, not only visible
		
		$.each(this._core.$stage.children(), function(index, item) {

			var innerH = 20;
			$.each($(item).children().children(), function(index1, item1) {
				innerH += $(item1).height();
				console.log('item1:  ' + $(item1).height());
			});
			console.log('inner: ' + innerH);

			$(item).height( innerH );
			console.log('item height:  ' + $(item).height( innerH ));

			// height or min-height для родиетля - разницы не увидела
			//$(item).css('min-height', innerH );
			//console.log('item height:  ' + $(item).css('min-height'));

			heights.push(innerH);
			
		});

		maxheight = Math.max.apply(null, heights);
		console.log(maxheight);
		console.log(heights);

		/*this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass); 
			// этому элту присваивать высоту - смысла не нашла*/

		// --------------   MY choose of elements to set height
		this._core.$stage.children().height(maxheight).addClass(this._core.settings.autoHeightClass);
		this._core.$stage.children().children().height(maxheight).addClass(this._core.settings.autoHeightClass);
		//console.log(this._core.$stage.children().children());
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);
