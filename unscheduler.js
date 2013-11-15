Times = new Meteor.Collection("times");
Rooms = new Meteor.Collection("rooms");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to unscheduler.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.room_list.rooms = function () {
    return Rooms.find({}, {sort: {name: 1}});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
