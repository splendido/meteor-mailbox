Meteor.startup(function() {
  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      var from = Fake.user();
      Messages.insert({
        subject: Fake.sentence(),
        body: Fake.paragraph(),
        from: {
          name: from.fullname,
          email: from.email
        }
      });
    });
  }
});
