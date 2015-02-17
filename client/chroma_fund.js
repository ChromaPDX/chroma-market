Deps.autorun(function() {
  Meteor.subscribe('campaigns');

  Template.market.campaigns = function(){
    return Campaigns.find({}).fetch();
  };

});
