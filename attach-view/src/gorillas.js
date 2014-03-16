SITE.module('Page.Gorillas', function(Module, App, Backbone, Marionette, $, _){
    'use strict';

    Module.startWithParent = false;

    var moduleName = 'Page.Gorillas',
        router = new Backbone.Router();

    router.route('gorillas', moduleName, function() {
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
        template: '<p>And now the gorillas!</p>',
    });


    Module.Controller = Marionette.Controller.extend({
        start: function(){
            this.view = new Module.View();
            App.primaryRegion.show(this.view);
        },
    });

});

