SITE.module('Navbar', function(Module, App, Backbone, Marionette, $, _){
    'use strict';

    Module.addInitializer(function() {
        Module.controller = new Module.Controller();
        Module.controller.start();
    });


    Module.View = Marionette.ItemView.extend({
        events: {
            'click a': 'onClickLink',
        },

        onClickLink: function(e) {
            this.$('li.active').toggleClass('active', false); // turn previously-selected nav link off
            $(e.target).blur()
                .closest('li').toggleClass('active', true); // turn on new link
        },

        // override: don't really render, since this view just attaches to existing navbar html.
        render: function() {
            this.bindUIElements(); // wire up this.ui, if any
        },
    });


    Module.Controller = Marionette.Controller.extend({
        start: function() {
            this.view = new Module.View({el: $('#navbar-links')}); // attach to static html @ that element
            this.view.render();
        },
    });

});

