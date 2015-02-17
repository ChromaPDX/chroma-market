Deps.autorun(function() {
  Meteor.subscribe('campaigns');

  Template.market.campaigns = function(){
    return Campaigns.find({}).fetch();
  };

  Template.new_campaign.events({
    'submit form.new_campaign': function(event) {
      // amount = parseInt(event.target.elements.namedItem('amount').value);
      // Payments.insert({
      //   payer: Meteor.userId(),
      //   amount: amount
      // });
      // var cfi = Cfinstances.findOne();
      // Cfinstances.update({"_id": cfi._id}, {"total_contributions": cfi.total_contributions + amount});

      alert("Your campaign is being created. Look for an email for validation!");

      return false;
    }
  });

});
