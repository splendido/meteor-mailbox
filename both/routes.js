Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/', {
  name: 'splash'
});

Router.route('/messages', {
  name: 'messages.index'
});

Router.route('/messages/:_id', {
  name: 'messages.show'
});
