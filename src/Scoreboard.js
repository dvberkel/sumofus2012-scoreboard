(function($, _, Backbone, SumOfUs, undefined){
    var ScoreView = Backbone.View.extend({
	initialize : function(){
	    this.render();
	},

	render : function(){
	    var $li = $("<li></li>");
	    $li.append(this.model.get("team"));
	    $li.appendTo(this.$el);
	}
    });

    var Scoreboard = Backbone.View.extend({
	initialize : function(){
	    this.model.on("change", this.render, this);
	    this.render();
	},
	
	render : function(){
	    var $list = this.list();
	    this.model.forEach(function(score){
		new ScoreView({ model: score, el : $list });
	    });
	},

	list : function(){
	    if (this.$list === undefined) {
		this.$list = $("<ol></ol>");
		this.$list.appendTo(this.$el);
	    }
	    return this.$list;
	}
    });

    SumOfUs.Scoreboard = Scoreboard;
})(jQuery, _, Backbone, SumOfUs);