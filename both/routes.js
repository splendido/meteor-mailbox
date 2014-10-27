Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/', {
  name: 'messages.index'
});

Router.route('/messages/:_id', {
  name: 'messages.show'
});
