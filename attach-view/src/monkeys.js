SITE.module('Page.Monkeys', function(Module, App, Backbone, Marionette, $, _){
    'use strict';

    Module.startWithParent = false;

    var moduleName = 'Page.Monkeys',
        router = new Backbone.Router();

    router.route('', moduleName, function() {
        App.startSubApp(moduleName); // calls initializer, below
        Module.controller.start();
    });

    Module.addInitializer(function(){
        Module.controller = new Module.Controller();
    });

    Module.addFinalizer(function(){
        Module.controller.close();
        delete Module.controller;
    });



    Module.View = Marionette.ItemView.extend({
        template: '<p>Here are the monkeys!</p>',
    });


    var isFirstView = true;

    Module.Controller = Marionette.Controller.extend({
        start: function() {
            if (isFirstView) {
                isFirstView = false;
                this.view = new Module.View( {el: '#primary-view'} );
                App.primaryRegion.attachView(this.view);
            }
            else {
                this.view = new Module.View();
                App.primaryRegion.show(this.view);
            }
        },
    });

});

