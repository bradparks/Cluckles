(function (window) {
    "use strict";

    /**
     * Allows modification of the General Button Component Styling.
     * 
     * @class ButtonBase
	 * @extends ThemeModifier
	 * 
	 * @param {ThemeEditor} editor instance which manages the less modifications.
     * 
     * @property {string} fontWeight The @btn-font-weight variable which sets the Font weight of Button Components.
     * @property {string} disabledLinkColor The @btn-link-disabled-color variable which sets the Disabled Link color of Button Components.
     * 
     * @returns {ButtonBase}
     */
    var ButtonBase = function (editor) {
        ThemeModifier.call(this, editor); // Call parent constructor

        // Configure the Modifiers
        this.fontWeight = {
            variable: '@btn-font-weight',
            value: null
        };
        this.disabledLinkColor = {
            variable: '@btn-link-disabled-color',
            value: null
        };

        // Configure the modifiers so they can be extracted easier
        this.modifiers = {
            fontWeight:         this.fontWeight,
            disabledLinkColor:  this.disabledLinkColor
        };
    };

    // Inherit from parent Prototype and preserve constructor
    ButtonBase.prototype = Object.create(ThemeModifier.prototype);
    ButtonBase.constructor = ButtonBase;

    /**
     * Gets the Font Weight of the Button Component.
     * 
     * @returns {string}
     */
    ButtonBase.prototype.getFontWeight = function () {
        return this.modifiers.fontWeight;
    };

    /**
     * Sets the Font Weight of the Button Component.
     * 
     * @param {string} buttonFontWeight The Button Font Weight to set.
     * 
     * @returns {undefined}
     */
    ButtonBase.prototype.setFontWeight = function (buttonFontWeight) {
        this.modifiers.fontWeight = buttonFontWeight;
        this.editor.queueModifications();
    };

    /**
     * Gets the Disabled Link Color of the Button Components.
     * 
     * @returns {string}
     */
    ButtonBase.prototype.getDisabledLinkColor = function () {
        return this.modifiers.disabledLinkColor;
    };

    /**
     * Gets the Disabled Link Color of the Button Components.
     * 
     * @param {string} disabledLinkColor The Button Disabled Link Color to set.
     * 
     * @returns {undefined}
     */
    ButtonBase.prototype.setDisabledLinkColor = function (disabledLinkColor) {
        this.modifiers.disabledLinkColor = disabledLinkColor;
        this.editor.queueModifications();
    };

    window.ButtonBase = ButtonBase;
})(window);
