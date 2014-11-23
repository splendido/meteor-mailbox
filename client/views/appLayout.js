var navDirection = 'right';

Template.appLayout.rendered = function() {
  this.find('#slide-container')._uihooks = {
    insertElement: function(node, next) {
      $(node).addClass('sliding-in sliding ' + navDirection);
      $(node).insertBefore(next);

      // start the animation:
      Meteor.setTimeout(function() {
        $(node).removeClass(navDirection);
      }, 10);

      Meteor.setTimeout(function() {
        $(node).removeClass('sliding-in sliding');
      }, 400);
    },

    removeElement: function(node) {
      var direction = navDirection === 'left' ? 'right' : 'left';
      $(node).addClass('sliding ' + direction);
      Meteor.setTimeout(function() {
        $(node).remove();
      }, 400);
    }
  };

};

Template.appLayout.events({
  'click [data-toggle-modal]': function (event) {
    var targetModalId = $(event.currentTarget).data('toggle-modal');
    var $targetModal = $('#' + targetModalId);
    $targetModal.toggleClass("active");
  },

  'click [data-nav-direction]': function(event) {
    navDirection = $(event.currentTarget).data('nav-direction');
  }
});
