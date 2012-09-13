describe("A collection of Scores", function(){
    it("should start out with no scores", function(){
	var scores = new SumOfUs.Scores();

	expect(scores).toBeOfLength(0);
    });

    it("should accept raw attributes objects for scores", function(){
	var scores = new SumOfUs.Scores();

	scores.add({team: "Team A", points: 10 });

	expect(scores).toBeOfLength(1);
	expect(scores.at(0)).toBeScore({ team: "Team A", points: 10 });
    });

    it("should order scores by points decreasingly", function(){
	var scores = new SumOfUs.Scores();

	scores.add({team: "Team B", points: 0 });
	scores.add({team: "Team A", points: 10 });

	expect(scores).toBeOfLength(2);
	expect(scores.at(0)).toBeScore({ team: "Team A", points: 10 });
	expect(scores.at(1)).toBeScore({ team: "Team B", points: 0 });
    });
});