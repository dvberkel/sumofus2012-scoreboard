(function(Backbone, SumOfUs){
    var Scores = Backbone.Collection.extend({
	model : SumOfUs.Score,

	comparator : function(score){
	    return -1 * score.get("points");
	}
    });
    
    SumOfUs.Scores = Scores;
})(Backbone, SumOfUs);