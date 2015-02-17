Meteor.publish('campaigns', function() {
  return Campaigns.find({});
});

Meteor.startup(function () {
  if (Campaigns.find().count() == 0) {
    Campaigns.insert({
      name: "Facebook 4 Dogs",
      blurb: "Now your pet can stalk his ex's photo feed and ignore friend requests from old classmates.",
      url: "http://Facebook4Dogs.chroma.io"
    });
    Campaigns.insert({
      name: "3d printed bitcoins",
      blurb: "In exchange for bitcoins, we will use a novel metal-sintering technique to maufacture uniform units of gold and other precious metals.",
      url: "http://3dPrintedBitcoins.chroma.io"
    });
    Campaigns.insert({
      name: "Uber XXX",
      blurb: "Sex delivered on demand by quadrocopter, provided you live in international waters or San Fransisco.",
      url: "http://UberXXX.chroma.io"
    });
    Campaigns.insert({
      name: "BootFunder",
      blurb: "A crowdsourced fundraising platforms funded by other crowdsourced fundraising platoforms. A meta-Ponzi scheme!",
      url: "http://bootfunder.chroma.io"
    });
  }
});
