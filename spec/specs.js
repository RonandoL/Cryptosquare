describe('encrypt', function(message) {

  it("will downcase a sentence", function() {
    expect(encrypt("Hello")).to.equal("hello");
  });

});
