(function(Backbone, SumOfUs){
    var Score = Backbone.Model.extend({
	defaults : { team: "unknown", points: 0 }
    });
    
    SumOfUs.Score = Score;
})(Backbone, SumOfUs);