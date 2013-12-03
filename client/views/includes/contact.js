Session.set('demandeSent', false);

Template.contact.helpers({
  demandeSent: function(){
    return Session.get('demandeSent');
  }
});

Template.contact.events({
  'submit #demandeForm': function(e){

    e.preventDefault();
    var email = $(e.target).find("[name=inputEmail]").val();
    var content = $(e.target).find("[name=#inputContent]").val();

    if (email != '' && content != ''){
      var demande = {
        email: email,
        content: content,
        submitedAt: new Date().getTime()
      }
      var demandeId = Demandes.insert(demande);
      clearForm($("#demandeForm"));
      throwError("Merci ! Nous répondrons à votre demande dans les plus brefs délais");
    }
  }
});
