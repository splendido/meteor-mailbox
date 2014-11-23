Router.configure({
  layoutTemplate: 'appLayout'
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
	only: ['messages.index', 'messages.show']
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
