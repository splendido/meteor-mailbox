SplashController = RouteController.extend({
  layoutTemplate: 'splashLayout',
  action: function() {
    this.render('splash');
    Meteor.setTimeout(function() {
      Router.go('messages.index');
    }, 2000);
  }
});

MessagesIndexController = RouteController.extend({
  data: function() {
    return {
      messages: Messages.find({})
    };
  }
});

MessagesShowController = RouteController.extend({
  data: function() {
    return {
      message: Messages.findOne({_id: this.params._id})
    };
  }
});
