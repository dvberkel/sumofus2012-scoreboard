beforeEach(function(){
    this.addMatchers({
	toBeScore : function(expected){
	    var actual = this.actual;
	    var team = actual.get("team");
	    var points = actual.get("points");

	    return team === expected.team && points === expected.points;
	},

	toBeOfLength : function(expected){
	    return this.actual.length === expected;
	}
    });
});