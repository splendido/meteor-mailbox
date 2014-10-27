Template.messagesIndex.helpers({
  numberOfMessages: function() {
    if (this.messages) {
      return this.messages.count();
    }
  }
});
