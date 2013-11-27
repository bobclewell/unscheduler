Times = new Meteor.Collection("times");
Rooms = new Meteor.Collection("rooms");

if (Meteor.isClient) {
  Template.room_list.rooms = function () {
    return Rooms.find({}, {sort: {position: 1}});
  };

  Template.time_list.times = function () {
    return Times.find({}, {sort: {name: 1}});
  };

  Template.room_form.events({
    'click #add-room' : function () {
      // position is automatically set as the length of the Rooms array.
      var allRooms = Rooms.find();

      roomName = $('#room-name').val();
      Rooms.insert({ name: roomName, position: allRooms.count() });
      $('#room-name').val('');
    },

    'keypress input#room-name': function (evt) {
      if (evt.which === 13) {
        var allRooms = Rooms.find();

        roomName = $('#room-name').val();
        Rooms.insert({name: roomName, position: allRooms.count() });
        $('#room-name').val('');
      }
    }
  });

  Template.time_form.events({
    'click #add-time' : function () {
      timeName = $('#time-name').val();
      Times.insert({name: timeName});
      $('#time-name').val('');
    },

    'keypress input#time-name': function (evt) {
      if (evt.which === 13) {
        timeName = $('#time-name').val();
        Times.insert({name: timeName});
        $('#time-name').val('');
      }
    }
  });  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  // Other server code.
}