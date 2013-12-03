Demandes = new Meteor.Collection('demandes');

Demandes.allow({
  insert: function(){ return true; }
});
