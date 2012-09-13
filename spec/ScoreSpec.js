describe("A Score", function(){
    it("should have a defaults", function(){
	var score = new SumOfUs.Score();

	expect(score).toBeScore({ team: "unknown", points: 0 });
    });
});