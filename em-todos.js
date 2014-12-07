Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  Template.TodosPanel.helpers({
    items: function(){
      return Todos.find();
    }
  });
}

if (Meteor.isServer) {

}
