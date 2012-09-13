describe("A Scoreboard", function(){
    var scores;

    beforeEach(function(){
	loadFixtures('sumofus.html');
    });

    beforeEach(function(){
	scores = new SumOfUs.Scores();
	scores.add({ team: "Team A", points: 20 });
	scores.add({ team: "Team B", points: 10 });
    });

    it("should draw a list", function(){
	new SumOfUs.Scoreboard({ model: scores, el : $("#sumofus") });

	expect($("#sumofus")).toContain("ol");
    });

    it("should draw items for each score", function(){
	new SumOfUs.Scoreboard({ model: scores, el : $("#sumofus") });

	expect($("#sumofus ol")).toContain("li");
	expect($("#sumofus ol li").size()).toBe(2);
    });

    describe("An item", function(){
	it("should contain the team name", function(){
	   new SumOfUs.Scoreboard({ model: scores, el : $("#sumofus") });	

	   expect($("#sumofus ol li").first()).toHaveText("Team A");
	});
    });
});