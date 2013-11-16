Times = new Meteor.Collection("times");
Rooms = new Meteor.Collection("rooms");

if (Meteor.isClient) {
  Template.room_list.rooms = function () {
    return Rooms.find({}, {sort: {name: 1}});
  };

  Template.room_form.events({
    'click #add-room' : function () {
      roomName = $('#room-name').val();
      Rooms.insert({name: roomName});
      $('#room-name').val('');
    },

    'keypress input#room-name': function (evt) {
      if (evt.which === 13) {
        roomName = $('#room-name').val();
        Rooms.insert({name: roomName});
        $('#room-name').val('');
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}