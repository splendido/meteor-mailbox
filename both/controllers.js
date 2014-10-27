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
