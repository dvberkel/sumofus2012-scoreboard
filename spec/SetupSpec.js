describe("A jasmine setup", function(){
    it("should correctly run specs", function(){
	expect(0).toBe(0);
    });

    it("should correctly run jasmine-jquery specs", function(){
	loadFixtures('sumofus.html');

	expect($("#sumofus")).toBe('div');
    });
});